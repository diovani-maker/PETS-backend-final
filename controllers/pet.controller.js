const Pet = require('../models/pet.models');

//Todos os pets
const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({});
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Um pet específico
const getPet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id);
        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Criar pet
const createPet = async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
        res.status(201).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Atualizar pet
const updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, species, breed, age, owner } = req.body;

        // Atualiza o pet no banco de dados
        const pet = await Pet.findByIdAndUpdate(id, {
            name,
            species,
            breed,
            age,
            owner
        }, { new: true }); // Retorna o pet atualizado

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Excluir pet
const deletePet = async (req, res) => {
    try {
        const { id } = req.params;

        // Exclui o pet do banco de dados
        const pet = await Pet.findByIdAndDelete(id);

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Filtro Owner por Pet
const getOwnerByPet = async (req, res) => {
    try {
        const { name } = req.params;
        const pet = await Pet.findOne({ name });

        if (!pet) {
            return res.status(404).json({ message: "Pet not found" });
        }

        res.status(200).json({ owner: pet.owner });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Filtro Pets por Owner + qtde
const getPetsByOwner = async (req, res) => {
    try {
        const { owner } = req.params;
        const pets = await Pet.find({ owner });

        if (pets.length === 0) {
            return res.status(404).json({ message: `No pets found for owner: ${owner}` });
        }

        res.status(200).json({
            owner,
            numberOfPets: pets.length,
            pets
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPets,
    getPet,
    createPet,
    updatePet,
    deletePet,
    getOwnerByPet,
    getPetsByOwner,
};
