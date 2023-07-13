import express from "express";
import { obtenerEtapas } from "../controllers/Etapas.controllers.js";

const router = express.Router()

router.get("/etp",obtenerEtapas)

export default router

