import databaseUtils from "../utils/Database.utils.js";
import Language from "./Language.model.js";
import EthnicGroupModel from "./EthnicGroup.model.js";
import BarangayModel from './Barangay.model.js';

/**
 * Class representing a city.
 */
class City {
    /**
     * Creates a new City object. 
     * @param {string} city_name - The name of the city.
     * @param {string} info_1 - First informational bullet
     * @param {string} info_2 - Second informational bullet
     * @param {string} info_3 - Third informational bullet
     * @param {array} barangays - Array of barangays
     * @param {array} ethnic_groups - Array of ethnic groups
     * @param {array} languages - Array of languages
     * @param {array} images - Array of image URLs
     */
    constructor(city_name, info_1, info_2, info_3, barangays, ethnic_groups, languages, images) {
        this.city_name = city_name;
        this.info_1 = info_1;
        this.info_2 = info_2;
        this.info_3 = info_3;
        this.barangays = barangays;
        this.ethnic_groups = ethnic_groups;
        this.languages = languages;
        this.images = images;
    }
}

/**
 * Returns all cities from the database.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getAllCities() {
    try {
        const cities = await databaseUtils.getAll('cities');

        if (cities.length === 0) {
            console.log("No cities found");
            return [];
        }

        const citiesData = await Promise.all(cities.map(async (city) => {
            const barangays = await getCityBarangaysByID(city.city_id);
            const ethnic_groups = await getCityEthnicGroupsByID(city.city_id);
            const languages = await getCityLanguagesByID(city.city_id);
            const images = await getCityImagesByID(city.city_id);

            return new City(
                city.city_name,
                city.info_1,
                city.info_2,
                city.info_3,
                barangays,
                ethnic_groups,
                languages,
                images
            );
        }));

        return citiesData;
    } catch(err) {
        console.error("Failed to fetch all cities.");
        throw err;
    }
}

/**
 * Retrieves a city by its ID.
 * @param {int} id - The ID of a city.
 * @returns {Promise} - Resolves with the results of the query or rejects with error. 
 */
async function getCityByID(id) {
    try {
        const query = `
            SELECT city_name, info_1, info_2, info_3 FROM cities
            WHERE city_id_ = ?`;
        const city = await databaseUtils.performQuery(query, id);

        if (city.length === 0) {
            console.log("No city found for city ID " + id);
            return [];
        }

        const barangays = await getCityBarangaysByID(id);
        const ethnic_groups = await getCityEthnicGroupsByID(id);
        const languages = await getCityLanguagesByID(id);
        const images = await getCityImagesByID(id);

        return new City(
            city[0].city_name,
            city[0].info_1,
            city[0].info_2,
            city[0].info_3,
            barangays,
            ethnic_groups,
            languages,
            images
        );
    } catch(err) {
        console.error("Failed to fetch city with id " + id);
        throw err;
    }
}

/**
 * Retrieves a city by its name.
 * @param {string} name - The name of the city to retrieve.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getCityByName(name) {
    try {
        const query = `
            SELECT city_id FROM city 
            WHERE city_name = ?`;    
        const result = await databaseUtils.performQuery(query, [name]);

        if (result.length === 0) {
            console.log("City not found");
            return null;
        }

        const cityID = result[0].city_id;
        const city = await getCityByID(cityID);

        if (city.length === 0) {
            console.log("City not found");
            return [];
        }

        return city;
    } catch(err) {
        console.log("Failed to fetch city.");
        throw err;
    }
}

/**
 * Retrieves the images of a city.
 * @param {integer} id - The ID of the city.
 * @returns {Promise} - Resolves with the results of the query or rejects with error. 
 */
async function getCityImagesByID(id) {
    try {
        const query = "SELECT img_url FROM city_images WHERE city_id = ?";
        const images = await databaseUtils.performQuery(query, [id]);

        if (images.length === 0) {
            console.log("No images found for city ID " + id);
            return [];
        }

        return images.map(image => image.img_url);
    } catch(err) {
        console.log("Failed to fetch city images");
        throw err;
    }
}
/**
 * Retrieves the languages of a city. 
 * @param {*} id - The id of the city.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getCityLanguagesByID(id) {
    try {
        const query = `
            SELECT l_name, percentage FROM city_languages 
            JOIN languages ON city_languages.language_id = languages.language_id 
            WHERE city_id = ?`;

        const languages = await databaseUtils.performQuery(query, [id]);

        if (languages.length === 0) {
            console.log("No languages found for city ID " + id);
            return [];
        }

        return new Language(
            languages[0].l_name,
            languages[0].percentage
        );
    } catch(err) {
        console.log("Failed to fetch city languages");
        throw err;
    }
}

/**
 * Retrieves the ethnic groups of a city.
 * @param {integer} id - The ID of the city.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getCityEthnicGroupsByID(id) {
    try {
        const query = `
            SELECT eg_name percentage from FROM city_ethnic_group
            JOIN ethnic_groups ON city_ethnic_group.eg_id = ethnic_groups.eg_id
            WHERE city_ethnic_groups.city_id = ?`;
        const ethnic_groups = await databaseUtils.performQuery(query, [id]);

        if (ethnic_groups.length === 0) {
            console.log("No ethnic groups found for city ", id);
            return [];
        }

        return ethnic_groups.map((ethnic_group) => 
            new EthnicGroupModel.EthnicGroup(
                ethnic_group.eg_name,
                ethnic_group.percentage
            )
        );
    } catch(err) {
        console.error("Failed to fetch ethnic groups of city ", id);
        throw err;    
    }
}

/**
 * Retrieves all barangays of a city.
 * @param {integer} id - The id of the city.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getCityBarangaysByID(id) {
    try {
        const query = `
            SELECT barangay_name FROM city_barangays
            WHERE city_id = ?`;
        const barangays = await databaseUtils.performQuery(query, [id]);

        if (barangays.length === 0) {
            console.log("No barangays found for city ", id);
            return [];
        }

        return barangays.map((barangay => 
            new BarangayModel.Barangay(
                barangay.barangay_name
            )
        ));
    } catch(err) {
        console.error("Failed to fetch barangays of city ", id);
        throw err;
    }
}

/**
 * Retrieves a city's id and name based on user input.
 * @param {String} name - User input for city name.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function searchCityByName(name) {
    try {
        const query = `
            SELECT city_id, city_name
            FROM cities
            WHERE LOWER(city_name) LIKE ?`;
        const searchTerm = `%${name.toLowerCase().trim()}%`;
        const city = await databaseUtils.performQuery(query, [searchTerm]);
        
        if (city.length === 0) {
            console.log("No city found.");
            return [];
        }

        return city;
    } catch(err) {
        console.error("Failed to fetch city with input of ", name);
        throw err;
    }
}


export default {
    City,
    getAllCities,
    getCityByID,
    getCityByName,
    searchCityByName,
};