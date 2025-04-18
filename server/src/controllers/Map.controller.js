import ProvinceModel from '../models/Province.model.js';
import CityModel from '../models/City.model.js';
import ResponseHandler from '../utils/ResponseHandler.util.js';

/**
 * Retrieves a city or province and sends it to the client.
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 * @param {import('express').NextFunction} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the status and data of location
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
                    message: "Province not found.",
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
                    message: "City not found.",
                    status: 404,
                });
            }
    
            return ResponseHandler.successResponse(res, {
                message: "Successfully retrieved city.",
                data: city,
            }); 
        } else {
            return ResponseHandler.errorResponse(res, {
                status: 404,
                message: "Invalid type. Please try again.",
            });
        }
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
};

export default {
    getLocationByName,
};