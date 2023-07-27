import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { Curso } from "./cursos.js";


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
    tableName: 'plan_formativo',
    createdAt: false,//se hace para evitar que el modelo cree estas dos tablas automaticamente en la base
    updatedAt: false
});

//relacion uno a muchos
PlanFormativo.hasMany(Curso, {
    foreignKey: 'codigo_plan_formativo',
    sourceKey: 'codigo_plan_formativo'
});

Curso.belongsTo(PlanFormativo, {
    foreignKey: 'codigo_plan_formativo',
    targetKey: 'codigo_plan_formativo'
});



export{
    PlanFormativo
}


//dos tipos de carga
// Lazy Loading: carga diferida: carga perezosa
/* const plan = await PlanFormativo.findByPk('A1');
console.log(plan.dataValues);
const cursosPlan = await plan.getCursos();
cursosPlan.forEach(curso => {
    console.log(curso.dataValues);
}); */

// Eager Loading: carga ansiosa
/* const plan = await PlanFormativo.findByPk('A1', {
    include: Curso
});

console.log(plan.dataValues); */
 /* ejemplo carga ansiosa
 
 const curso = await Curso.findByPk('0004', {
    include: PlanFormativo
});
console.log(curso.dataValues);  */

