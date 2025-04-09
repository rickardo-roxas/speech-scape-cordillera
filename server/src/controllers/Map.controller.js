// import Province from '../models/Province.model.js';
import Region from '../models/Region.model.js';

/**
 * Retrieves all regions
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 * @returns {Promise<void>} Sends a JSON response with the status and data of all regions.
 */
const getAllRegions = async (req, res, next) => {
    try {
        const regions = await Region.getAllRegions();
        res.status(200).json({
            status: 200,
            message: "Successfully retrieved all regions.",
            data: regions,
        });
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
}

/**
 * Retrieves a region through its ID.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const getRegionByID = async (req, res, next) => {
    const { region_id } = req.params;

    try {
        const region = await Region.getRegionByID(region_id);

        if (!region) {
            return res.status(404).json({
                status: 404,
                message: "Region not found.",
            });
        }

        res.status(200).json({
            status: 200,
            message: "Successfully retrieved region.",
            data: region,
        });


    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
}

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

export default {
    getAllRegions,
    getRegionByID,
    getProvinceByName,
}