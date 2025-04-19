import ProvinceModel from '../models/Province.model.js';
import CityModel from '../models/City.model.js';
import ResponseHandler from '../utils/ResponseHandler.util.js';

/**
 * Retrieves a city and sends it to the client.
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of city
 */
const getCityByName = async (req, res, next) => {
    const { name } = req.params;
    
    try {
        if (!name) {
            return ResponseHandler.errorResponse(res, {
                message: "Input required.",
                status: 404,
            });
        }
    
        const city = await CityModel.getCityByName(name);
    
        if (!city || city.length === 0) {
            return ResponseHandler.errorResponse(res, {
                message: "City not found.",
                status: 404,
            });
        }
    
        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved city.",
            data: city,
        }); 
    } catch(err) {
        err.statusCode=500;
        next(err);
    } 
}

/**
 * Retrieves a city and sends it to the client.
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of city
 */
const getProvinceByName = async (req, res, next) => {
    const { name } = req.params;
    
    try {
        if (!name) {
            return ResponseHandler.errorResponse(res, {
                message: "Input required.",
                status: 404,
            });
        }
    
        const province = await ProvinceModel.getProvinceByName(name);

        if (!province || province.length === 0) {
            return ResponseHandler.errorResponse(res, {
                status: 404,
                message: "Province not found.",
            });
        }

        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved province.",
            data: province,
        });
    } catch(err) {
        err.statusCode=500;
        next(err);
    } 
}


export default {
    getLocationByName,
    getCityByName,
    getProvinceByName
};