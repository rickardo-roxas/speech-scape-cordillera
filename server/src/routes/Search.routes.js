const express = require('express');
const router = express.Router();
const controller = require('../controllers/Search.controller');

// Default
router.get('/', (req,res) => {
    
})

// Search specific province
router.post('/:id', (req, res) => {

});

module.exports = router;