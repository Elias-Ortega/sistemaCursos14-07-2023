//configuracion del servidor, sin las llaves se importa.
import express from 'express';
import { routerEstudiantes } from '../routes/estudiantes.routes.js';
import { routerPlanFormativo } from '../routes/planFormativo.routes.js';
import { routerCurso } from '../routes/cursos.routes.js';

export default class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        this.middlewares();//se coloca en el cosntructor para llamarlo
        this.routes();   //para que las rutas se ejecuten al momento de disparar la aplicacion,cuando se inicie el servidor.
    }

    //middlewares( metodos para una configuracion extra)
    middlewares(){   
        this.app.use(express.static('public')) ;  //recursos estaticos y this porque estamos trabajando  con poo.
        this.app.use(express.json());
    }

    //para llamar a las rutas
    routes(){
        this.app.use('/estudiantes', routerEstudiantes);
        this.app.use('/planFormativo',routerPlanFormativo);
        this.app.use('/cursos', routerCurso);
    }

    //funcion listen para llamarlo desde afuera
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }


}