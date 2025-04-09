import express from 'express';
import controller from '../controllers/Map.controller.js';

const router = express.Router();

// Default map of the Philippines
router.get('/' , controller.getAllRegions);

// Display a certain region
router.get('/:id', controller.getRegionByID);

// Display a specific province based on name
router.get('/:id/:province', controller.getProvinceByName);

export default router;