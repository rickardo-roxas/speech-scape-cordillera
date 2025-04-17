import databaseUtils from '../utils/Database.utils.js';

/**
 * Class representing a municipality.
 * Languages may be null or undefined.
 */
class Municipality {
    /**
     * Creates a Municipality object.
     * @param {String} municipality_name - Name of municipality.
     * @param {String} info - Information bullet on the municipality.
     * @param {array} languages - Array of language objects.
     */
    constructor(municipality_name, info, languages) {
        this.municipality_name = municipality_name;
        this.info = info;
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

export default {
    Municipality,
    getAllMunicipalities
};