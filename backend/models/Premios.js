import mongoose from "mongoose";

const premiosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true,
    },
    premio:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps:true,
    }
)

const Premio = mongoose.model("premios",premiosSchema)

export default Premio;