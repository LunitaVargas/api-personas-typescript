
import type { Request, Response } from "express";
import { conexion } from "../database/conexion.js";
import type { Persona } from "../modelos/Persona.js";

export const obtenerPersonas = async (req: Request, res: Response) => {
    try {
        const resultado = await conexion.query<Persona>(
            "SELECT * FROM personas ORDER BY id ASC"
        );

        res.status(200).json({
            mensaje: "Personas obtenidas correctamente",
            personas: resultado.rows
        });

    } catch (error) {
        console.error("Error al obtener personas:", error);

        res.status(500).json({
            mensaje: "Error al obtener personas"
        });
    }
};
