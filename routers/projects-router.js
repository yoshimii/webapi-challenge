const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel');

// Create - post - 
router.get('/', (req, res) => {
    id = req.params.id;
    Projects.get(id).then(project => {
        res.status(200).json(project)
    })
})

// Read - get

// Update - put

// Delete - delete



module.exports = router;