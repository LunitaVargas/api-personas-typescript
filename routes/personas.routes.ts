
import { Router } from "express";

import { crearPersona } from "../controles/crearPersona.controller.js";
import { obtenerPersonas } from "../controles/obtenerPersonas.controller.js";
import { obtenerPersona } from "../controles/obtenerPersona.controller.js";
import { actualizarPersona } from "../controles/actualizarPersona.controller.js";
import { eliminarPersona } from "../controles/eliminarPersona.controller.js";

const router = Router();

router.post("/", crearPersona);
router.get("/", obtenerPersonas);
router.get("/:id", obtenerPersona);
router.put("/:id", actualizarPersona);
router.delete("/:id", eliminarPersona);

export default router;
