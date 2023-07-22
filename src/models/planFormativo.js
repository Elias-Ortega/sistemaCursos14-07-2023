import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";


const PlanFormativo = sequelize.define('PlanFormativo', {

    codigo_plan_formativo: {
        type: DataTypes.STRING(30),
        primaryKey: true,
    },

    descripcion: {
        type: DataTypes.STRING(250)

    },
    duracion_horas: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'plan_formativo', //esta configuracion es para que encuentre la tabla si no la encuentra
    createdAt: false,
    updatedAt: false
});

export {
    PlanFormativo
}

/* const listadoPlanes = await PlanFormativo.findAll();

listadoPlanes.forEach( () => {
    console.log(plan.dataValues);
}); */