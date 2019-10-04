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
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const project = req.body;
    Projects.get(id).then((old) => {
        console.log(id, project)
        Projects.update(id, project).then(proj => {
            res.status(200).json({ updatedTo: proj, was: old })
        })
    })
    
})


// Delete - delete
router.delete('/:id', (req, res) => {
    id = req.params.id;
    Projects.remove(id).then(projID => {
        res.status(200).json(projID)
    })
})


module.exports = router;