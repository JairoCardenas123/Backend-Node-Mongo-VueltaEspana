import express from "express";
import { obtenerPremios } from "../controllers/Premios.controllers.js";

const router = express.Router()

router.get("/pre",obtenerPremios)

export default router;