import ProvinceModel from '../models/Province.model.js';

/**
 * Passes all provinces in the database as a json
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getAllProvinces = async (req, res, next) => {
    try{
        const provinces = await ProvinceModel.getAllProvinces();

        if(!provinces || provinces.length === 0){
            return res.status(404).json({
                message: 'Provinces not found'
            })
        }

        res.status(200).json(provinces);
    }catch(err){
        err.statusCode = 500;
        next(err);
    }
} 

/**
 * Passes a specific province by id as a json
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getProvinceByID = async (req, res, next) => {
    const {province_id} = req.params;

    try{
        const province = await ProvinceModel.getProvinceByID(province_id);

        if(!province || province.length === 0){
            return res.status(404).json({
                message: "Province not found."
            });
        }

        res.status(200).json(province);
    }catch(err){
        err.statusCode = 500;
        next(err);
    }
}

/**
 * Passes a specific province by name as a json
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const getProvinceByName = async (req, res, next) => {
    const {province_name} = req.params;

    try{
        const province = await ProvinceModel.getProvinceByName(province_name);

        if(!province){
            return res.status(404).json({
                message: 'Province not found'
            })
        }

        res.status(200).json(province);
    }catch(err){
        err.statusCode  = 500;
        next(err);
    }
}

export default {
    getAllProvinces,
    getProvinceByID,
    getProvinceByName
}