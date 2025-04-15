import databaseUtils from '../utils/Database.utils.js';

/**
 * Class representing a language.
 */
class Language {
    constructor(name, percentage) {
        this.name = name;
        this.percentage = percentage;
    }
}

/**
 * Returns all available languages as Language objects
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getAllLanguages() {
    try {
        const languages = await databaseUtils.getAll('languages');

        return languages.map(language => new Language(language.l_name));

    } catch (err) {
        console.error("Failed to fetch all languages", err);
        throw err;
    }
}

/**
 * Returns a language by language_id as a Language object
 * @param {number} id - The ID of the language to retrieve.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getLanguageByID(id) {
    try {
        const query = "SELECT * FROM languages WHERE language_id = ?";
        const language = await databaseUtils.performQuery(query, [id]);

        if (language.length === 0) {
            throw new Error("Language not found");
        }

        // Return a Language object
        return new Language(language[0].l_name);

    } catch (err) {
        console.error("Failed to fetch language with id " + id, err);
        throw err; 
    }
}

export default {
    Language,
    getAllLanguages,
    getLanguageByID
};
