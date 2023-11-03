import express from "express";
import db from "./configs/db.mjs";
import cors from "cors";
import dotenv from "dotenv";
import pedidosRutas from "./routes/pedidos.routes.mjs";

dotenv.config();

const app= express();

const port= process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api", pedidosRutas);

//Servidor
app.listen(port,()=>console.log('server listening on port', port))

//DB
db.connect()
    .then(()=>{
        console.log("Base de datos lista");
    })
    .catch((error)=>{
        console.log("Error de conexion", error);
    })