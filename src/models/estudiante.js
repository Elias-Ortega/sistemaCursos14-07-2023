import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";


const Estudiante = sequelize.define('Estudiante', {

    id_estudiante: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    rut: {
        type: DataTypes.STRING(15)

    },
    nombre: {
        type: DataTypes.STRING(30)

    },
    apellido_pat: {
        type: DataTypes.STRING(30)
    },
    apellido_mat: {
        type: DataTypes.STRING(30)
    },
    direccion: {
        type: DataTypes.STRING(100)
    },
    codigo_comuna: {
        type: DataTypes.INTEGER
    },
    codigo_curso: {
        type: DataTypes.STRING(30)
    }
}, {
    tableName: 'estudiante',
    createdAt: false,
    updatedAt: false
});

/* //select de la tabla
const arregloEstudiantes = await Estudiante.findAll();
console.log(arregloEstudiantes); */

//eliminacion de una fila, metodo destroy , retorna una promesa. destroy no tiene returning no muestra el objeto eliminado.
/* const estudianteUno =  Estudiante.build({id_estudiante:1001}); 
const estudianteEliminado =  await estudianteUno.destroy();
console.log(estudianteEliminado); */

//  insert en tabla con metodo create
/* const estudianteUno = await Estudiante.create({id_estudiante:1002, nombre:'sequelize', apellido_pat: 'sequelize', apellido_mat:'sequelize'}); 
console.log(estudianteUno);
 */
/* //insert cuando no esta el objeto en la base creado lo va a insertar
const estudianteUno = Estudiante.build({id_estudiante:1001, nombre:'sequelize', apellido_pat: 'sequelize', apellido_mat:'sequelize'});
 const estudianteInsertado = await estudianteUno.save();
console.log(estudianteInsertado); */
/* Estudiante.sync(); */

//El metodo sync es destructivo jamas se debe usar en ambiente de produccion
//porque no solo puede eliminar tablas, tambien puede modificar las tablas de la base.