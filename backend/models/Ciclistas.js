import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema(
    {
    categoria: {
        type: String,
        required:true,
        trim:true 
    },
    producto:{
        type:String,
        required:true,
        trim:true
    },
    talla:{
        type:String,
        required:true,
        trim:true,
    }
    }, 
    {
        timestamps:true,
    }
);

const Ciclista = mongoose.model("ciclistas",ciclistasSchema);

export default Ciclista;