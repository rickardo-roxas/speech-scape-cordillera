import databaseUtils from "../utils/Database.utils.js";
import Language from "./Language.model.js";
import EthnicGroup from "./EthnicGroup.model.js";

/**
 * Class representing a city.
 */
class City {
    constructor(city_name, info_1, info_2, info_3, ethnic_groups, languages, images) {
        this.city_name = city_name;
        this.info_1 = info_1;
        this.info_2 = info_2;
        this.info_3 = info_3;
        this.ethnic_groups = ethnic_groups;
        this.languages = languages;
        this.images = images;
    }
}

/**
 * Returns all cities from the database.
 */
async function getAllCities() {
    try {
        const cities = await databaseUtils.getAll('city');
        return cities.map((city) => new City(
            city.city_name,
            city.info_1,
            city.info_2,
            city.info_3,
        ));
    } catch(err) {
        console.error("Failed to fetch all cities");
        throw err;
    }
}

async function getCityByID(id) {
    try {
        const query = `
            SELECT * FROM city 
            WHERE city.city_id = ?`;    
        
        const city = await databaseUtils.performQuery(query, [id]);

        if (city.length === 0) {
            console.log("City not found");
            return null;
        }

        const images = await getCityImagesByID(city[0].city_id);
        const languages = await getCityLanguagesByID(city[0].city_id);
        const ethnic_groups = await getCityEthnicGroupsByID(city[0].city_id);

        return new City(
            city_name = city[0].city_name,
            info_1 = city[0].info_1,
            info_2 = city[0].info_2,
            info_3 = city[0].info_3,
            images = city.map(img => img.img_url),
            languages = city.map(languages => languages.language),
            ethnic_groups = city.map(ethnic_groups => ethnic_groups.ethnic_group)
            )
    } catch(err) {
        console.log("Failed to fetch city.");
        throw err;
    }
}

/**
 * Retrieves all cities from a specific region.
 * @param {integer} id - The ID of the region to retrieve cities from. 
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getCitiesOfRegion(id) {
    try {
        const query = "SELECT * FROM city WHERE region_id = ?";
        const cities = await databaseUtils.performQuery(query, [id]);

        if (cities.length === 0) {
            console.log("No cities found for region ID " + id);
            return [];
        }

        // Fetch city details for each city in the region
        const cityDetails = await Promise.all(cities.map(city => getCityByID(city.city_id)));
        return cityDetails;

    } catch(err) {
        console.log("Failed to fetch city of region." );
        throw err;
    }
}

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

        return languages.map(language => ({
            name: language.l_name,
            percentage: language.percentage
        }));
        
    } catch(err) {
        console.log("Failed to fetch city languages");
        throw err;
    }
}

// To do
async function getCityEthnicGroupsByID(id) {

}