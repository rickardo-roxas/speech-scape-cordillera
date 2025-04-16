import express from 'express';
import controller from '../controllers/Province.controller.js';

const router = express.Router();

router.get('/', controller.getAllProvinces)

router.get('/:province_name', controller.getProvinceByName);


export default router;