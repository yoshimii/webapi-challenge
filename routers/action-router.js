const express = require('express');
const router = express.Router();
const Actions = require('.././data/helpers/actionModel');

// Create - post
router.post('/', (req, res) => {

})
// Read - get
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Actions.get(id).then(act => {
        res.status(200).json(act)
    })
})
// Update - put
router.put('/', (req, res) => {

})
// Delete - delete
router.delete('/id', (req, res) => {

})
module.exports = router;