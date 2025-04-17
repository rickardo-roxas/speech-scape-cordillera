import express from 'express';
import { searchProvinceByName } from '../controllers/Search.controller.js';

const router = express.Router();

router.get('/provinces/:name', searchProvinceByName);

export default router;