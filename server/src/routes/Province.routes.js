const express = require('express');
const router = express.Router();
const controller = require('../controllers/Province.controller');

// Specific province
router.get('/:id', (req,res) => {

});

// Province page; obtain all
router.get('/', (req,res) => {

});

module.exports = router;