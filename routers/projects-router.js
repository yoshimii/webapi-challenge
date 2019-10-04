const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel');

// Create - post - 
router.post('/', (req, res) => {
    Projects.insert(req.body).then(project => {
        res.status(201).json(project)
    })
})

// Read - get all projects
router.get('/', (req, res) => {
    Projects.get().then(list => {
        res.status(200).json(list)
    })
})

// Read - get by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const project = await Projects.get(id)
        if(project == null) {
            next()
        }
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({ error: "bad request" })
    }
})

// Update - put
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Projects.get(id).then((old) => {
      
        Projects.update(id, changes).then(proj => {
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