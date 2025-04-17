import databaseUtils from '../utils/Database.utils.js';
import MunicipalityModel from "./Municipality.model.js";
import LanguageModel from "./Language.model.js";
import EthnicGroupModel from './EthnicGroup.model.js';

/**
 * Class representing a province.
 */
class Province {
    /**
     * Creates a new Province object.
     * @param {String} province_name - The name of the province.
     * @param {String} info_1 - First informational bullet
     * @param {String} info_2 - Second informational bullet
     * @param {String} info_3 - Third informational bullet
     * @param {array} municipalities - Array of municipalities
     * @param {array} ethnic_groups - Array of ethnic groups
     * @param {array} languages - Array of languages
     * @param {array} images - Array of image URLs
     */
    constructor(province_name, info_1, info_2, info_3, municipalities, ethnic_groups, languages, images){
        this.province_name = province_name;
        this.info_1 = info_1;
        this.info_2 = info_2;
        this.info_3 = info_3
        this.municipalities = municipalities;
        this.ethnic_groups = ethnic_groups;
        this.languages = languages;
        this.images = images;
    }
}

/**
 * Retrieves the province by its name.
 * @param {String} name - The name of the province to retrieve.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getProvinceByName(name){
    try{
        const query = `
            SELECT province_id FROM provinces
            WHERE p_name = ?`;
        const result = await databaseUtils.performQuery(query, [name]);

        if(result.length === 0){
            console.log('No province found for province ' + name);
            return null;
        }

        const provinceID = result[0].province_id;
        const province = await getProvinceByID(provinceID);

        return province;
    }catch(err){
        console.error('Failed to fetch province ' + name);
        throw err;
    }
}

/**
 * Retrieves all information of a specific province
 * @param {integer} id - The ID of the province.
 * @returns {Promise} - Resolves with the results of the query or rejects with error. 
 */
async function getProvinceByID(id){
    try{
        const query = `
            SELECT p_name, info_1, info_2, info_3 FROM provinces 
            WHERE province_id = ?`;
        const province = await databaseUtils.performQuery(query, [id]);

        if(province.length === 0){
            console.log("No province found for province ID " + id);
            return [];
        }

        const municipalities = await getProvinceMunicipalitiesByID(id);
        const ethnic_groups = await getProvinceEthnicGroupsByID(id);
        const languages = await getProvinceLanguagesByID(id);
        const images = await getProvinceImagesByID(id);

        return new Province(
            province[0].p_name,
            province[0].info_1,
            province[0].info_2,
            province[0].info_3,
            municipalities,
            ethnic_groups,
            languages,
            images
        );
    }catch(err){
        console.error("Failed to fetch province ID " + id);
        throw err;
    }
}

/**
 * Retrieves all provinces in the database
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getAllProvinces() {
    try {
        const provinces = await databaseUtils.getAll('provinces');
        
        if (provinces.length === 0) {
            console.log("No provinces found");
            return [];
        }

        const provinceData = await Promise.all(provinces.map(async (province) => {
            const municipalities = await getProvinceMunicipalitiesByID(id);
            const ethnic_groups = await getProvinceEthnicGroupsByID(id);
            const languages = await getProvinceLanguagesByID(id);
            const images = await getProvinceImagesByID(id);

            return new Province(
                province.p_name,
                province.info_1,
                province.info_2,
                province.info_3,
                municipalities,
                ethnic_groups,
                languages,
                images
            );
        }));

        return provinceData;
    } catch (err) {
        console.error("Failed to fetch all provinces");
        throw err;
    }
}

/**
 * Returns all images of a province
 * @param {integer} id - The id of the province.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getProvinceImagesByID(id){
    try{
        const query = `
            SELECT img_url FROM province_images
            WHERE province_id = ?`;
        const images = await databaseUtils.performQuery(query, [id]);
        
        if(images.length === 0){
            console.log("No images found for province ID " + id);
            return [];
        }

        return images.map(image => image.img_url);
    }catch(err){
        console.error("Failed to fetch province images");
        throw err;
    }
}

/**
 * Returns all languages of a province
 * @param {integer} id - The id of the province.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getProvinceLanguagesByID(id){
    try{
        const query = `
            SELECT l.l_name, pl.percentage FROM province_languages 
            pl JOIN languages l ON pl.language_id = l.language_id 
            WHERE pl.province_id = ?`;
        const languages = await databaseUtils.performQuery(query, [id]);

        if(languages.length === 0){
            console.log("No languages found for province ID " + id);
            return [];
        }

        return languages.map(language => 
            new LanguageModel.Language(
                language.l_name, language.percentage
            )
        );
    }catch(err){
        console.error("Cannot fetch languages of province ID " + id);
        throw err;
    }
}

/**
 * Returns all ethnic groups of a province.
 * @param {integer} id - The id of the province.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getProvinceEthnicGroupsByID(id){
    try{
        const query = `
            SELECT eg_name, percentage FROM province_ethnic_group 
            JOIN ethnic_groups ON province_ethnic_group.eg_id = ethnic_groups.eg_id 
            WHERE province_ethnic_group.province_id = ?`;

        const ethnic_groups = await databaseUtils.performQuery(query, [id]);

        if(ethnic_groups.length === 0){
            console.log("No ethnic groups found for province " + id);
            return [];
        }

        return ethnic_groups.map((ethnicity) => 
            new EthnicGroupModel.EthnicGroup(
                ethnicity.eg_name,
                ethnicity.percentage
            )
        );
    }catch(err){
        console.error("Failed to fetch ethnicities of province id " + id);
        throw err;
    }
}

/**
 * Returns all municipalities of a province
 * @param {integer} id - The id of the province.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getProvinceMunicipalitiesByID(id){
    try{
        const query = `
            SELECT m_name, m_information FROM municipalities
            WHERE province_id = ?`;
        const municipalities = await databaseUtils.performQuery(query, [id]);

        if (municipalities.length === 0) {
            console.log("No municipalities found for province ID " + id);
            return [];
        }

        return municipalities.map((municipality) => 
            new MunicipalityModel.Municipality(
                municipality.m_name,
                municipality.m_information
            )
        );
    }catch(err){
        console.error("Failed to fetch municipalities of province id " + id);
        throw err;
    }
}

export default {
    Province,
    getAllProvinces,
    getProvinceByID,
    getProvinceByName,
    getProvinceImagesByID
}