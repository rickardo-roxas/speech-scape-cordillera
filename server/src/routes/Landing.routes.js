import express from 'express';
import LandingController from '../controllers/Landing.controller.js';
import ResponseHandler from '../utils/ResponseHandler.util.js';

const router = express.Router();

// Display data on a region in the landing page.
router.get('/', LandingController.getDefaultRegion);

router.get('/:name', LandingController.getRegionByName);

export default router;