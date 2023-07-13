import Premio from "../models/Premios.js";

const obtenerPremios = async(req,res)=>{
    const premios = await Premio.find()
    res.json(premios)
}

export {obtenerPremios}