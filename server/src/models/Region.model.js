import databaseUtils from '../utils/Database.utils.js';

/**
 * Class representing a region.
 */
class Region {
    constructor(region_id, region_name, info_1, info_2, info_3, provinces) {
        this.region_id = region_id;
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
            'SELECT * FROM region WHERE id = ? JOIN province ON region.region_id = province.region_id',
            [id]
        );
        
        if (region.length === 0) {
            throw new Error('Region not found');
        }

        return region.map((region) => new Region(
            region.region_id,
            region.region_name,
            region.info_1,
            region.info_2,
            region.info_3,
            provinces.map((province) => new Province(
                province.province_id,
                province.province_name,
                province.info_1,
                province.info_2,
                province.info_3
            ))
        ));
    } catch (err) {
        console.error(`Error fetching region with ID ${id}:`, err);
        next(err);
    }
}

export default {
    getAllRegions,
    getRegionByID,
};