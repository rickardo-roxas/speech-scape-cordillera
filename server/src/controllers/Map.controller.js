// import Province from '../models/Province.model.js';
//  import Region from '../models/Region.model.js';

/**
 * Retrieves all provinces from the database.
 * @param { request } req - The request object.
 * @param { response } res  - The response object.
 */
const getAllProvinces = async (req,res) => {
    const provinces = {}

    try {
        // Implementation
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
};

/**
 * Retrieves a region through its ID.
 * @param { request } req - The request object.
 * @param { response } res - The response object.
 */
const getRegionById = async (req, res) => {
    const { id } = req.params;

    const region = Region.getById(id);

    try {
        // Implementation
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
};

/**
 * Retrieves a province through its name.
 * @param { request } req - The request object.
 * @param { response } res - The response object.
 */
const getProvinceByName = async (req, res) => {
    const { name } = req.params;

    try {
        // Implementation
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
};

module.exports = {
    getAllProvinces,
    getRegionById,
    getProvinceByName,
};