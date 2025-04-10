import databaseUtils from '../utils/Database.utils.js';
import Province from './Province.model.js';

/**
 * Class representing a region.
 */
class Region {
    constructor(region_name, info_1, info_2, info_3, provinces) {
        this.region_name = region_name;
        this.info_1 = info_1;
        this.info_2 = info_2;
        this.info_3 = info_3;
        this.provinces = provinces;
    }
}

/**
 * Returns all regions from the database.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getAllRegions() {
    try {
        const regions = await databaseUtils.getAll('region');
        return regions.map((region) => new Region(
            region.region_id,
            region.region_name,
            region.info_1,
            region.info_2,
            region.info_3
        ));
    } catch (err) {
        console.error('Error fetching all regions:', err);
        next(err);
    }
}

/**
 * Retrieves a region through its ID.
 * @param {string} id - The ID of the region to retrieve.
 * @returns {Promise} - Resolves with the results of the query or rejects with error.
 */
async function getRegionByID(id) {
    try {
        const region = await databaseUtils.performQuery(
            'SELECT * FROM region JOIN province ON region.region_id = province.region_id WHERE region.id = ?',
            [id]
        );
        
        if (region.length === 0) {
            throw new Error('Region not found');
        }

        const regionData = {
            region_id: results[0].region_id,
            region_name: results[0].region_name,
            info_1: results[0].info_1,
            info_2: results[0].info_2,
            info_3: results[0].info_3,
        };

        const provinces = await Province.getProvincesOfRegion(regionData.region_id);
        if (provinces.length === 0) {
            throw new Error('No provinces found for this region');
        }

        return new Region(
            regionData.region_id,
            regionData.region_name,
            regionData.info_1,
            regionData.info_2,
            regionData.info_3,
            provinces
        );
    } catch (err) {
        console.error(`Error fetching region with ID ${id}:`, err);
        next(err);
    }
}

export default {
    getAllRegions,
    getRegionByID,
};