import express from 'express';
import MapController from '../controllers/Map.controller.js';
import { successResponse } from '../utils/ResponseHandler.util.js';

const router = express.Router();

// Default map of the Philippines
router.get('/' , (_req,res) => {
    return successResponse(res, {
        message: "Select a province or city to get started.",
    });
});

// Display a specific province based on name
router.get('/:name', (req, _res) => {
    const { type } = req.query;

    if (type === 'Province') {
        MapController.getProvinceByName;
    } else if (type === 'City') {
        MapController.getCityByName;
    }
});

export default router;