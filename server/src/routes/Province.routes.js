import express from 'express';
import controller from '../controllers/Province.controller';

const router = express.Router();

// Specific province
router.get('/:name', (req,res) => {
    // controller.method
});

// Retrieves all provinces
router.get('/', (req,res) => {
    // controller.method
});

module.exports = router;