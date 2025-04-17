import ProvinceModel from '../models/Province.model.js';
import CityModel from '../models/City.model.js';
import { successResponse, errorResponse } from '../utils/ResponseHandler.util.js';

/**
 * Retrieves a city and sends it to the client.
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of city.
 */
const getCityByName = async (req, res, next) => {
    const { name } = req.params;

    try {
        const city = await CityModel.getCityByName(name);

        if (!city) {
            return errorResponse(res, {
                message: "City not found.",
                status: 404,
            });
        }

        return successResponse(res, {
            message: "Successfully retrieved city.",
            data: city,
        });
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
}

/**
 * Retrieves a province and sends it to the client.
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of province
 */
const getProvinceByName = async (req, res, next) => {
    const { name } = req.params;

    try {
        const province = await ProvinceModel.getProvinceByName(name);

        if (!province) {
            return errorResponse(err, {
                message: "Province not found.",
                status: 404,
            });
        }

        return successResponse(res, {
            message: "Successfully retrieved province",
            data: province,
        })
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
}

export default {
    getCityByName, 
    getProvinceByName,
}