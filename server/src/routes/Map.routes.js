import express from 'express';
import controller from '../controllers/Map.controller';

const router = express.Router();

// Default map of the Philippines
router.get('/' , (req,res) => {

});

/**
 * Display a specific region based on ID
 */
router.get('/:id', (req,res) => {
    // controller.method
});

// Display a specific province based on name
router.get('/:id/:province', (req,res) => {
    // controller method
});

module.exports = router;