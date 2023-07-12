import express from "express"
import { obtenerCiclista } from "../controllers/Cliclistas.controllers.js"

const router = express.Router()

router.get("/all",obtenerCiclista)

export default router


