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
    const { q } = req.query;

    try {
        if (!q || q.trim() === '') {
            return ResponseHandler.errorResponse(res, {
                status: 404,
                message: "Input required.",
            });
        }

        const provinceMatches = await ProvinceModel.searchProvinceByName(q); 

        if (provinceMatches.length > 0) {
            return ResponseHandler.successResponse(res, {
                message: "Provinces found.",
                data: {
                    type: 'Province',
                    provinces: provinceMatches,
                },
            });   
        }

        const cityMatches = await CityModel.searchCityByName(q);
        
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
        err.statusCode = 500
        next(err);
    }
};

export default {
    searchLocationByQuery,
};