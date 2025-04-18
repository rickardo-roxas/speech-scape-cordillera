import RegionModel from "../models/Region.model.js";
import ResponseHandler from "../utils/ResponseHandler.util.js";

/**
 * Retrieves all regions and sends it to the client.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 * @returns {Promise<void>} - Sends a JSON response with the status and data of all regions.
 */
const getAllRegions = async (_req, res, next) => {
    try {
        const regions = await RegionModel.getAllRegions();

        if (!regions) {
            return ResponseHandler.errorResponse(res, {
                message: "Regions not found.",
                status: 404,
            });
        }

        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved all regions.",
            data: regions,
        });
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
};

/**
 * Retrieves CAR region and sends it to the client.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 * @returns {Promise<void>} - Sends a JSON response with the status and data of the CAR region.
 */
const getDefaultRegion = async (_req, res, next) => {
    try {
        const region = await RegionModel.getRegionByID(8);

        if (!region) {
            return ResponseHandler.errorResponse(res, {
                message: "Regions not found.",
                status: 404,
            });
        }

        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved region.",
            data: region,
        });
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
};

/**
 * Retrieves a region by its name and sends it to the client.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The next middleware function.
 * @returns {Promise<void>} - Sends a JSON response with the status and data of a region.
 */
const getRegionByName = async (req, res, next) => {
    const { region_name } = req.params;

    try {
        const region = await RegionModel.getRegionByName(region_name);

        if (!region) {
            return ResponseHandler.errorResponse(res, {
                message: "Region not found.",
                status: 404,
            });
        }

        return ResponseHandler.successResponse(res, {
            message: "Successfully retrieved region.",
            data: region,
        });
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
};

export default {
    getAllRegions,
    getRegionByName,
    getDefaultRegion,
};