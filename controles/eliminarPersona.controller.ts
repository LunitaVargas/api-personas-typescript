
import type { Request, Response } from "express";
import { conexion } from "../database/conexion.js";
import type { Persona } from "../modelos/Persona.js";

export const eliminarPersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const resultado = await conexion.query<Persona>(
            "DELETE FROM personas WHERE id = $1 RETURNING *",
            [id]
        );

        if (resultado.rows.length === 0) {
            res.status(404).json({
                mensaje: "Persona no encontrada"
            });
            return;
        }

        res.status(200).json({
            mensaje: "Persona eliminada correctamente",
            persona: resultado.rows[0]
        });

    } catch (error) {
        console.error("Error al eliminar persona:", error);

        res.status(500).json({
            mensaje: "Error al eliminar persona"
        });
    }
};
