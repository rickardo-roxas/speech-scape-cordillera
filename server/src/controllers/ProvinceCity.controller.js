import ProvinceModel from '../models/Province.model.js';
import CityModel from '../models/City.model.js';
import ResponseHandler from '../utils/ResponseHandler.util.js';

/**
 * Retrieves all cities and provinces and sends it to the client.
 * @param {*} req - The request object
 * @param {*} res - The response object
 * @param {*} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of all provinces and cities.
 */
const getAllLocations = async (_req, res, next) => {
    try{
        const provinces = await ProvinceModel.getAllProvinces();
        const cities = await CityModel.getAllCities();

        if(!provinces || provinces.length === 0){
            return ResponseHandler.errorResponse(res, {
                error: 404,
                message: 'Provinces not found.',
            });
        }

        if (!cities || cities.length === 0) {
            return ResponseHandler.errorResponse(res, {
                error: 404,
                message: "Cities not found.",
            });
        }

        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved provinces.",
            data:{
                provinces,
                cities
            }, 
        });
    }catch(err){
        err.statusCode = 500;
        next(err);
    }
};

/**
 * Passes a specific city by name as a json
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of a city.
 */
const getCityByName = async (req, res, next) => {
    const { name } = req.params;

    try {
        const city = await CityModel.getCityByName(name);

        if (!city || city.length === 0) {
            return ResponseHandler.errorResponse(res, {
                error: 404,
                message: "City not found.",
            });
        }

        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved city.",
            data: city,
        });
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
}

/**
 * Passes a specific province by name as a json
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of a province.
 */
const getProvinceByName = async (req, res, next) => {
    const { name } = req.params;

    try {
        const province = await ProvinceModel.getProvinceByName( name );

        if(!province){
            return ResponseHandler.errorResponse(res, {
                error: 404,
                message: 'Province not found.'
            });
        }

        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved province.",
            data: province,
        });
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
}

export default {
    getAllLocations,
    getProvinceByName,
    getCityByName,
};