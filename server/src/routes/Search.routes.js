import express from 'express';
import { searchProvincesByName } from '../controllers/Search.controller.js';

const router = express.Router();
router.get('/', (req,res) => {

router.get('/provinces', searchProvincesByName);

export default router;