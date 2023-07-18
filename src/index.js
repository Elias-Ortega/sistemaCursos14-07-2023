import 'dotenv/config';
import Server from './models/server.js';

//se instancia la clase server
const server = new Server();

//se llama a listen
server.listen();