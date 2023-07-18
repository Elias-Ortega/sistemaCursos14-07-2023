import { Router } from "express"
import { create, deleteById, findAll, findById, update } from "../controllers/estudiantes.controllers.js";

const routerEstudiantes = Router();

//agrega estudiantes a todas las rutas de estudiante
routerEstudiantes.get('/', findAll );

  routerEstudiantes.get('/:id', findById );

  routerEstudiantes.post('/', create);

  routerEstudiantes.put('/', update);

  routerEstudiantes.delete('/:id', deleteById);

  export {
    routerEstudiantes
  }