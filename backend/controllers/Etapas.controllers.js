import Etapa from "../models/Etapas.js";

const obtenerEtapas = async (req,res)=>{
    const etapas = await Etapa.find()
    res.json(etapas)
}

export {obtenerEtapas}