
import type { Request, Response } from "express";
import { conexion } from "../database/conexion.js";
import type { Persona } from "../modelos/Persona.js";

export const actualizarPersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombre, edad, hobby } = req.body;

        const resultado = await conexion.query<Persona>(
            `UPDATE personas
             SET nombre = $1, edad = $2, hobby = $3
             WHERE id = $4
             RETURNING *`,
            [nombre, edad, hobby, id]
        );

        if (resultado.rows.length === 0) {
            res.status(404).json({
                mensaje: "Persona no encontrada"
            });
            return;
        }

        res.status(200).json({
            mensaje: "Persona actualizada correctamente",
            persona: resultado.rows[0]
        });

    } catch (error) {
        console.error("Error al actualizar persona:", error);

        res.status(500).json({
            mensaje: "Error al actualizar persona"
        });
    }
};
