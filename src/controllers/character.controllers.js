// src/controllers/character.controller.js

import { Character } from "../models/character.model.js";

export const getALLcharacters = async (req, res) => {
    try {
        const characters = await Character.findAll();
        res.status(200).json(characters);
    } catch (e) {
        res.status(500).json({
            message: "Error al obtener los personajes.",
            error: e.message
        });
    }
};

export const createCharacter = async (req, res) => {
    try {
        const { name, ki, race, gender, description } = req.body;

        const newCharacter = await Character.create({
            name,
            ki,
            race,
            gender,
            description
        });

        res.status(201).json({
            message: "Personaje creado.",
            character: newCharacter
        });

    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                message: "Error al crear el personaje.",
                errors: error.errors.map(err => err.message)
            });
        }

        res.status(500).json({
            message: "Error del servidor al crear el personaje.",
            error: error.message
        });
    }
};