import express from 'express';
import ProvinceCityController from '../controllers/ProvinceCity.controller.js';

const router = express.Router();

// Displays all cities and provinces
router.get('/', ProvinceCityController.getAllLocations);

// Displays a specific province or city
router.get('/:province_name', ProvinceCityController.getLocationByName);


export default router;