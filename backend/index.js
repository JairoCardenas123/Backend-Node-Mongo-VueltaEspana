import express  from "express"; 
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import ciclistaRouter from "./routes/ciclistas.routes.js"
import equiposRouter from "./routes/equipos.routes.js"
import etapaRouter from "./routes/etapas.routes.js"
import premioRouter from "./routes/premios.routes.js"

const app = express();
dotenv.config();

const PORT = process.env.PORT
conectarDB();

app.use("/ciclista",ciclistaRouter)
app.use("/equipo",equiposRouter)
app.use("/etapas",etapaRouter)
app.use("/premios",premioRouter)


app.listen(PORT,() =>{
    console.log(`server is a listening on port ${PORT}`);
})

