
import "dotenv/config";
import express from "express";
import personasRoutes from "./routes/personas.routes.js";

const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de personas funcionando correctamente"
    });
});

// Rutas de personas
app.use("/api/personas", personasRoutes);

// Puerto del servidor
const PORT = Number(process.env.PORT) || 3000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
