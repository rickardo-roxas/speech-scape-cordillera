import express from 'express';
import SearchController from '../controllers/Search.controller.js';

const router = express.Router();

// Displays the search results of cities and provinces based on user input.
router.get('/', SearchController.searchLocationByQuery);

export default router;