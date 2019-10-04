const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel');

// Create - post - 
router.post('/', (req, res) => {
    Projects.insert(req.body).then(project => {
        res.status(201).json(project)
    })
})

// Read - get
router.get('/:id', (req, res) => {
    id = req.params.id;
    Projects.get(id).then(project => {
        res.status(200).json(project)
    })
})
// Update - put

// Delete - delete



module.exports = router;