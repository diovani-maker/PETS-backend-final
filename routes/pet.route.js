const express = require('express');
const router = express.Router();
const { 
    getPets, 
    getPet, 
    createPet, 
    updatePet, 
    deletePet, 
    getOwnerByPet, 
    getPetsByOwner 
} = require('../controllers/pet.controller.js');

router.get('/', getPets);
router.get('/:id', getPet);
router.post('/', createPet);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);
router.get('/owner/:name', getOwnerByPet);
router.get('/owner/:owner/pets', getPetsByOwner);

module.exports = router;