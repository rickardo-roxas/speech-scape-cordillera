import databaseUtils from '../utils/Database.utils.js';

/**
 * Class representing a municipality.
 * Languages may be null or undefined.
 */
class Municipality {
    constructor(m_name, m_information, languages) {
        this.m_name = m_name;
        this.m_information = m_information;
        this.languages = languages;
    }
}

/**
 * Retrieves all municipalities from the database.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getAllMunicipalities() {
    try {
        const municipalities = await databaseUtils.getAll('municipalities');

        return municipalities.map((municipality) => new Municipality(
            municipality.m_name,
            municipality.m_information,
        ));
    } catch (err) {
        console.error('Error fetching all municipalities:', err);
        throw err;
    }
}

/**
 * Retrieves all municipalities for a specific Province
 * @param {*} id 
 * @returns 
 */
async function getMunicipalitiesByProvinceID(id){
    try{

        const query = "SELECT m_name, m_information FROM municipalities WHERE province_id = ?";

        const municipalities = await databaseUtils.performQuery(query, [id]);

        if(municipalities.length === 0){
            console.log("No municipalities found for province ID " + id);
            return [];
        }

        return municipalities.map(municipality => new Municipality(
            municipality.m_name,
            municipality.m_information,
            null
        ));

    }catch(err){
        console.error("Failed to fetch municipalities of province ID " + id);
        throw err;
    }
}

export default {
    getAllMunicipalities,
    getMunicipalitiesByProvinceID
};