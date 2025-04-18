import express from 'express';
import MapController from '../controllers/Map.controller.js';
import ResponseHandler from '../utils/ResponseHandler.util.js';

const router = express.Router();

// Default map of the Philippines
router.get('/' , (_req,res) => {
    return ResponseHandler.successResponse(res, {
        message: "Select a province or city to get started.",
    });
});

// Display a specific province based on name
router.get('/:name', MapController.getLocationByName);

export default router;