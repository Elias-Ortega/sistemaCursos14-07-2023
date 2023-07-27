import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { PlanFormativo } from "./planFormativo.js";
import { PlanModulo } from "./planModulo.js";

const Modulo = sequelize.define('Modulo', {
    codigo_modulo:{
        type: DataTypes.INTEGER,
        primaryKey: true
    }, 
    descripcion:{
        type: DataTypes.STRING(100),
    },
    duracion_horas:{
        type: DataTypes.INTEGER,
    }
}, {
    tableName: 'modulo',
    updatedAt: false,
    createdAt: false
});

//segunda forma haciendo el modelo de la tabla que rompe la relacion M:N(models/planModulo.js)
/* Modulo.belongsToMany(PlanFormativo, {
    through: PlanModulo,
    foreignKey:'codigo_modulo'
});

PlanFormativo.belongsToMany(Modulo, {
    through: PlanModulo,
    foreignKey: 'codigo_plan_formativo'
}); */

//primera forma relacion muchos a muchos, creando la tabla directo con sequelize
Modulo.belongsToMany(PlanFormativo, {
    through: 'plan_modulo',
    foreignKey:'codigo_modulo'
});

PlanFormativo.belongsToMany(Modulo, {
    through: 'plan_modulo',
    foreignKey: 'codigo_plan_formativo'
});

/* sequelize.sync(); */

/* const modulo = await Modulo.findOne({
    where:{
        descripcion: 'Orientación al perfil y metodología'
    }
});

console.log(modulo);

const planesFormativos = await modulo.getPlanFormativos();
planesFormativos.forEach(plan => {
    console.log(plan.dataValues);
}); */