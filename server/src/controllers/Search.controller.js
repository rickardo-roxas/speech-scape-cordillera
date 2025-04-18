import ProvinceModel from '../models/Province.model.js';
import CityModel from '../models/City.model.js';
import ResponseHandler from '../utils/ResponseHandler.util.js';

/**
 * Retrieves results of city/ies or province/s based on a search query and sends it to the client.
 * @param {import('express').Request} req  - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function 
 * @returns {Promise<void>} - A JSON response containing the status, message, and the data of location 
 */
const searchLocationByQuery = async (req, res, next) => {
    const { name } = req.params;

    try {
        if (!name) {
            return ResponseHandler.errorResponse(res, {
                status: 404,
                message: "Input required.",
            });
        }

        const provinceMatches = await ProvinceModel.searchProvinceByName(name); 

        if (provinceMatches.length > 0) {
            return ResponseHandler.successResponse(res, {
                message: "Provinces found.",
                data: {
                    type: 'Province',
                    provinces: provinceMatches,
                },
            });   
        }

        const cityMatches = await CityModel.searchCityByName(name);
        
        if (cityMatches.length > 0) {
            return ResponseHandler.successResponse(res, {
                message: "Cities found.",
                data: {
                    type: 'City',
                    provinces: cityMatches,
                },
            });
        }

        return ResponseHandler.errorResponse(res, {
            status: 404,
            message: "No matching city or provinces found.",
        });
    } catch (err) {
        console.error("Search controller error:", err);
        next(err);
    }
};

/**
 * Retrieves a specific province or city and sends it to the client.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next- The next middleware function.
 * @returns {Promise<void>} - A JSON response containing the status, message, and the data of location. 
 */
const getLocationByName = async (req, res, next) => {
    const { name } = req.params;
    const { type } = req.query;

    try {
        if (type === 'Province') {
            const province = await ProvinceModel.getProvinceByName(name);

            if (!province || province.length === 0) {
                return ResponseHandler.errorResponse(res, {
                    status: 404,
                    message: "No province found.",
                });
            }

            return ResponseHandler.successResponse(res, {
                message: "Successfully retrieved province.",
                data: province,
            });
        } else if (type === 'City') {
            const city = await CityModel.getCityByName(name);

            if (!city || city.length === 0) {
                return ResponseHandler.errorResponse(res, {
                    status: 404,
                    message: "No province found.",
                });
            }

            return ResponseHandler.successResponse(res, {
                message: "Successfully retrieved city.",
                data: city,
            });
        }

        return ResponseHandler.errorResponse(res, {
            status: 404,
            message: "No city or province found.",
        });
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
};

export default {
    searchLocationByQuery,
    getLocationByName,
};