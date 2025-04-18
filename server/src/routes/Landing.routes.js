import express from 'express';
import LandingController from '../controllers/Landing.controller.js';

const router = express.Router();

// Display data on a region in the landing page.
router.get('/', LandingController.getRegionByName);

export default router;