import mongoose from "mongoose";

const etapasSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true,
    },
    descripcion:{
        type:String,
        required:true,
        trim:true
    },
    kilometros:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps:true
    }
)

const Etapa = mongoose.model("etapas",etapasSchema)

export default Etapa;