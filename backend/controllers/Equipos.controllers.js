import Equipo from "../models/Equipos.js";

const obtenerEquipos = async(req,res) =>{
    const equipos = await Equipo.find()
    res.json(equipos)
}

export {obtenerEquipos}