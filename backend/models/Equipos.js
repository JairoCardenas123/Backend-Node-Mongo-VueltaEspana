import mongoose from "mongoose";

const equiposSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    ciclistas:{
        type:String,
        required:true,
        trim:true
    },
    trofeos:{
        type:String,
        required:true,
        trim:true
    }

    },
    {
        timestamps:true,
    }
)

const Equipo = mongoose.model("equipos",equiposSchema)

export default Equipo