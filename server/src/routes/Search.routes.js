import express from 'express';
import SearchController from '../controllers/Search.controller.js';

const router = express.Router();

// Displays the search results of cities and provinces based on user input.
router.post('/', SearchController.searchLocationByQuery);

// Display a certain province or city based on name.
router.get('/:name', SearchController.getLocationByName);

export default router;