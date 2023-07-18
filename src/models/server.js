//configuracion del servidor, sin las llaves se importa.
import express from "express";

export default class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        this.routes();   //para que las rutas se ejecuten al momento de disparar la aplicacion,cuando se inicie el servidor.
    }

    //para llamar a las rutas
    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World!')
          })
    }

    //funcion listen para llamarlo desde afuera
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }


}