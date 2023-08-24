import express from "express";
import { conectar } from "./modelo/db_conectar.js";
const app_e = express();
app_e.use(express.urlencoded({extended:false}));
app_e._router(express.json());
app_e.use(express.static('./vista'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))
app_e.listen("5000",function(){
    console.log('Aplicacion Iniciada en: http://localhost:5000/')
})
app_e.get('/',function(req,res){
    conectar.query('SELECT id_cliente,nit,nombres,apellidos,direccion,telefono,date_format(fecha_nacimiento, "%d-%m-%y")as fecha_nacimineto FROM clientes;,(error,results')
        if(error){
            throw error;
 
        }else{

    
    res.send("clientes/index",{resultado:results})
        }
        }) 
    })
