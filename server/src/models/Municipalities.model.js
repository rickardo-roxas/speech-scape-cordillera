import databaseUtils from '../utils/Database.utils.js';

class Municipality {
    constructor(municipality_id, m_name, m_information, province_id) {
        this.municipality_id = municipality_id;
        this.m_name = m_name;
        this.m_information = m_information;
        this.province_id = province_id;
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
            municipality.municipality_id,
            municipality.m_name,
            municipality.m_information,
            municipality.province_id
        ));
    } catch (err) {
        console.error('Error fetching all municipalities:', err);
        throw err;
    }
}

/**
 * Retrieves a municipality through its province ID.
 * @param {integer} id - The ID of the province to retrieve municipalities from.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getMunicipalitiesOfProvince(id) {
    try {
        const municipalities = await databaseUtils.performQuery(
            'SELECT * FROM municipalities WHERE province_id = ?',
            [id]
        );

        return municipalities.map((municipality) => new Municipality(
            municipality.municipality_id,
            municipality.m_name,
            municipality.m_information,
            municipality.province_id
        ));
    } catch (err) {
        console.error('Error fetching municipalities of province:', err);
        throw err;
    }
}