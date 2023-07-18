import { Sequelize } from "sequelize";

//Instancia de conexion. user:postgres,password, localhost, nombre de base de datos. 
 export const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/casoEstudiantes');

