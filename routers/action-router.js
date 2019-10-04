const express = require('express');
const router = express.Router();
const Actions = require('.././data/helpers/actionModel');

// Create - post
router.post('/:id', async (req, res) => {
    const action = req.body;
    const id = req.params.body
    try {
        await Actions.get(id)
        await Actions.insert(req.body)
        res.status(201).json(req.body);
    } catch (error) {
        res.status(400).json({ error: "bad request" })
    }

})


// Read - get
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Actions.get(id).then(act => {
        res.status(200).json(act)
    })
})
// Update - put
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Actions.get(id).then(oldAct => {
        Actions.update(id, changes).then(act => {
            res.status(200).json(act)
        })
    })
    
})
// Delete - delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Actions.remove(id).then(act => {
        res.status(204).json(req.body)
    })
})
module.exports = router;