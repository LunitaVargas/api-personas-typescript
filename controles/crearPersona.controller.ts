
import type { Request, Response } from "express";
import { conexion } from "../database/conexion.js";
import type { Persona } from "../modelos/Persona.js";

export const crearPersona = async (req: Request, res: Response) => {
    try {
        const datosPersona: Omit<Persona, "id"> = req.body;

        const resultado = await conexion.query<Persona>(
            "INSERT INTO personas (nombre, edad, hobby) VALUES ($1, $2, $3) RETURNING *",
            [datosPersona.nombre, datosPersona.edad, datosPersona.hobby]
        );

        const personaCreada = resultado.rows[0];

        if (!personaCreada) {
            res.status(500).json({
                mensaje: "No se pudo crear la persona"
            });
            return;
        }

        res.status(201).json({
            mensaje: "Persona creada correctamente",
            persona: personaCreada
        });

    } catch (error) {
        console.error("Error al crear persona:", error);

        res.status(500).json({
            mensaje: "Error al crear persona"
        });
    }
};
