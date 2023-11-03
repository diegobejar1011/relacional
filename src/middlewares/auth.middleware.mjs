import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verificarJWT = (req, res, next) =>{

    let token = req.get("Authorization");

    if(token){
        token= token.substring(7);

        jwt.verify(token, process.env.JWTSECRET, (error, decodeToken)=>{
            if(error){
                return res.status(401).send({
                    message: "Token invalido",
                    error: error.message
                })
            }
            req.usuario = decodeToken.usuario;
            next();
        });
    }
    if(!token){
        return res.status(401).send({message: "Token inexistente"});
    }
};