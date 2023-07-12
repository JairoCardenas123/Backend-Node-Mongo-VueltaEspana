import express from "express"
import { obtenerEquipos } from "../controllers/Equipos.controllers.js"

const router = express.Router()

router.get("/equ",obtenerEquipos)

export default router

