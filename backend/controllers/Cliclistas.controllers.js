import Ciclista from "../models/Ciclistas.js";

const obtenerCiclista = async(req,res)=>{
    const ciclistas = await Ciclista.find()
    res.json(ciclistas)
}

export {obtenerCiclista}

