import express from 'express';
import ProvinceCityController from '../controllers/ProvinceCity.controller.js';

const router = express.Router();

// Displays all cities and provinces
router.get('/', ProvinceCityController.getAllLocations);

// Displays a specific province
router.get('/province/:name', ProvinceCityController.getProvinceByName);

// Displays a specific city
router.get('/city/:name', ProvinceCityController.getCityByName);

export default router;