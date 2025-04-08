import Province from '../models/Province.model.js';
import Region from '../models/Region.model.js';

// Display the Philippines
export const getProvinces = async (req,res) => {
    try {
        // Implementation
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
};

// Display a region
export const getRegionById = async (req, res) => {
    const { id } = req.params;

    try {
        // Implementation
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
};

// Display a province
export const getProvinceByName = async (req, res) => {
    const { name } = req.params;

    try {
        // Implementation
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
};