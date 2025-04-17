import express from 'express';
import LandingController from '../controllers/Landing.controller';

const router = express.Router();

router.get('/', LandingController.getRegionByName);