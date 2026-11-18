
import type { Request, Response } from "express";
import { conexion } from "../database/conexion.js";
import type { Persona } from "../modelos/Persona.js";

export const obtenerPersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const resultado = await conexion.query<Persona>(
            "SELECT * FROM personas WHERE id = $1",
            [id]
        );

        if (resultado.rows.length === 0) {
            res.status(404).json({
                mensaje: "Persona no encontrada"
            });
            return;
        }

        res.status(200).json({
            mensaje: "Persona encontrada correctamente",
            persona: resultado.rows[0]
        });

    } catch (error) {
        console.error("Error al obtener persona:", error);

        res.status(500).json({
            mensaje: "Error al obtener persona"
        });
    }
};
