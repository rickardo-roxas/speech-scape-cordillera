import databaseUtils from '../utils/Database.utils.js';

class Language{
    constructor(name){
        this.name = name;
    }
}

/**
 * Returns all available languages
 */
async function getAllLanguages() {
    try {
        const languages = await databaseUtils.getAll('languages');

        return languages; 

    } catch (err) {
        console.error("Failed to fetch all languages", err);
        throw err;
    }
}

/**
 * Returns a language based by language_id
 */
async function getLanguageByID(id) {
    try {
        const query = "SELECT * FROM languages WHERE language_id = ?";
        const language = await databaseUtils.performQuery(query, [id]);

        if (language.length === 0) {
            throw new Error("Language not found");
        }

        return language[0]; 
    } catch (err) {
        console.error("Failed to fetch language with id " + id, err);
        throw err; 
    }
}

export default{
    getAllLanguages,
    getLanguageByID
};