import express from 'express';
import controller from '../controllers/Map.controller';

const router = express.Router();

// Default map of the Philippines
router.get('/' , (req,res) => {

});

// Map of a specific province
router.get('/region:id', (req,res) => {
    // controller.method
});

// Map of a specific province from a specific region
router.get('/region:id/:province', (req,res) => {
    
});

module.exports = router;