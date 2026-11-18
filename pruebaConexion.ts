
import { conexion } from "./database/conexion.js";

async function probarConexion() {
    try {
        const resultado = await conexion.query("SELECT NOW()");
        console.log("¡Conexión exitosa con PostgreSQL!");
        console.log(resultado.rows[0]);
    } catch (error) {
        console.error("Error al conectar:", error);
    } finally {
        await conexion.end();
    }
}

probarConexion();
