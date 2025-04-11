import databaseUtils from '../utils/Database.utils.js';
import MunicipalitiesModel from "./Municipalities.model.js";
import LanguageModel from "./Language.model.js";


class Province{
        constructor(name, info_1, info_2, info_3, municipalities, ethnicities, languages, images){
        this.name = name;
        this.info_1 = info_1;
        this.info_2 = info_2;
        this.info_3 = info_3
        this.municipalities = municipalities;
        this.ethnicities = ethnicities;
        this.languages = languages;
        this.images = images;
    }
}

/**
 * Retrieves all information of a specific province
 * @param {*} id 
 * @returns 
 */
async function getProvinceByID(id){
    try{
        const query = "SELECT p_name, info_1, info_2, info_3 FROM provinces WHERE province_id = ?";
        
        const province = await databaseUtils.performQuery(query, [id]);

        if(province.length === 0){
            console.log("No province found for province ID " + id);
            return [];
        }

        const municipalities = await getProvinceMunicipalitiesByID(id);
        const ethnicities = await getProvinceEthnicitiesByID(id);
        const languages = await getProvinceLanguagesByID(id);
        const images = await getProvinceImagesByID(id);

        return new Province(
            province[0].p_name,
            province[0].info_1,
            province[0].info_2,
            province[0].info_3,
            municipalities,
            ethnicities,
            languages,
            images
        );

    }catch(err){
        console.error("Failed to fetch province ID " + id);
        throw err;
    }
}

await function getAllProvinces(){
    
}

/**
 * Returns all images of a province
 */
async function getProvinceImagesByID(id){
    try{
        const query = "SELECT img_url FROM province_images WHERE province_id = ?";
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
 */
async function getProvinceLanguagesByID(id){
    try{
        const query = "SELECT l.l_name, pl.percentage FROM province_languages pl JOIN languages l ON pl.language_id = l.language_id WHERE pl.province_id = ?";

        const languages = await databaseUtils.performQuery(query, [id]);

        if(languages.length === 0){
            console.log("No languages found for province ID " + id);
            return [];
        }

        return languages.map(language => new LanguageModel.Language(language.l_name, language.percentage));

    }catch(err){
        console.error("Cannot fetch languages of province ID " + id);
        throw err;
    }
}

/**
 * Returns all ethnicities of a province as a dictionary
 */
async function getProvinceEthnicitiesByID(id){
    try{
        const query = "SELECT eg_name, percentage FROM province_ethnic_group JOIN ethnic_groups ON province_ethnic_group.eg_id = ethnic_groups.eg_id WHERE province_ethnic_group.province_id = ?";

        const ethnicities = await databaseUtils.performQuery(query, [id]);

        if(ethnicities.length === 0){
            console.log("No ethnicities found");
            return [];
        }

        return ethnicities.map(ethnicity => ({
            ethnic_group: ethnicity.eg_name,
            percentage: ethnicity.percentage
        }));

    }catch(err){
        console.error("Failed to fetch ethnicities of province id " + id);
        throw err;
    }
}

/**
 * Returns all municipalities of a province
 */
async function getProvinceMunicipalitiesByID(id){
    try{
        return await MunicipalitiesModel.getMunicipalitiesByProvinceID(id);
    }catch(err){
        console.error("Failed to fetch municipalities of province id " + id);
        throw err;
    }
    
}