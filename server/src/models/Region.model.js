import databaseUtils from '../utils/Database.utils.js';
import ProvinceModel from './Province.model.js';
import CityModel from './City.model.js';

/**
 * Class representing a region.
 */
class Region {
    /**
     * Constructs a new Region object.
     * @param {String} region_name - The name of the region
     * @param {String} info_1 - First informational bullet
     * @param {String} info_2 - Second informational bullet
     * @param {String} info_3  - Third informational bullet
     * @param {array} provinces - Array of provinces
     * @param {array} cities - Array of cities
     */
    constructor(region_name, info_1, info_2, info_3, provinces, cities) {
        this.region_name = region_name;
        this.info_1 = info_1;
        this.info_2 = info_2;
        this.info_3 = info_3;
        this.provinces = provinces;
        this.cities = cities;
    }
}

/**
 * Returns all regions from the database.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getAllRegions() {
    try {
        const regions = await databaseUtils.getAll('region');

        if (regions.length === 0) {
            console.log("No regions found.");
            return [];
        }
        
        const regionData = Promise.all(regions.map(async (region) => {
            const cities = await getRegionCitiesByID(region.region_id);
            const provinces = await getRegionProvincesByID(region.region_id);

            return new Region(
                region.region_name,
                region.info_1,
                region.info_2,
                region.info_3,
                cities,
                provinces
            );
        }));
        
        return regionData; 
    } catch (err) {
        console.error('Error fetching all regions:', err);
        throw err;
    }
}

/**
 * Retrieves a region based on its name.
 * @param {string} name - Name of the region.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getRegionByName(name) {
    try {
        const query = `
            SELECT region_id FROM region
            WHERE region_name = ?`;
        const regionID = databaseUtils.performQuery(query, [name]);

        if (regionID.length === 0) {
            console.log("No region found");
            return [];
        }

        const region = await getRegionByID(regionID);
        return region;
    } catch(err) {
        console.error("Failed to fetch region  ", name);
        throw err;
    }
}

/**
 * Retrieves a region.
 * @param {integer} id - The ID of the region.
 * @returns {Promise} - Resolves with the results of the query or rejects with error. 
 */
async function getRegionByID(id) {
    try {
        const query = `
            SELECT region_name, info_1, info_2, info_3 FROM region
            WHERE region_id = ?`;
        const [region] = await databaseUtils.performQuery(query, [id]);

        if (region.length === 0) {
            console.log("No region found");
            return [];
        }

        const cities = await getRegionCitiesByID(id);
        const provinces = await getRegionProvincesByID(id);

        return new Region(
            region.region_name,
            region.info_1,
            region.info_2,
            region.info_3,
            provinces,
            cities
        );
    } catch(err) {
        console.log("Failed to fetch region with ID", id);
        throw err;
    }
}

/**
 * Retrieves all cities from a specific region and returns their names and images.
 * @param {integer} id - The ID of the region to retrieve cities from. 
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getRegionCitiesByID(id) {
    try {
        const query = `
            SELECT city_id, city_name FROM cities 
            WHERE region_id = ?`;
        const cities = await databaseUtils.performQuery(query, [id]);

        if (cities.length === 0) {
            console.log("No cities found for region ", id);
            return [];
        }

        const cityDetails = await Promise.all(
            cities.map(async (city) => {
                const images = await CityModel.getCityImagesByID(city.city_id);
                return {
                    name: city.city_name,
                    images: images
                };
            })
        );
        return cityDetails;
    } catch(err) {
        console.log("Failed to fetch cities of region ", id);
        throw err;
    }
}

/**
 * Retrieves all provinces from a specific region and returns their names and images.
 * @param {integer} id - The ID of the region.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getRegionProvincesByID(id) {
    try {
        const query = `
            SELECT province_id, p_name FROM provinces
            WHERE region_id = ?`;
        const provinces = await databaseUtils.performQuery(query, [id]);

        if (provinces.length === 0) {
            console.log("No provinces found for region ", id);
        }

        const provinceDetails = await Promise.all(
            provinces.map(async (province) => {
                const images = await ProvinceModel.getProvinceImagesByID(province.province_id);
                return {
                    name: province.p_name,
                    images: images
                };
            })
        );

        return provinceDetails;
    } catch(err) {
        console.log("Failed to fetch provinces of region ", id);
        throw err;
    } 
}

export default {
    getAllRegions,
    getRegionByID,
    getRegionByName
};