import Sequelize, { DataTypes } from 'sequelize'
import dbconfig from '../config/db.configs.js'
import car from './car.js'
import customer from './customer.js'
import invoice from './invoice.js'
import employee from './employee.js'
import employee_Qualification from './employee_Qualification.js'
const sequelize=new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    define:{
       timestamps:false,
       freezeTableName:true
    }
})
const db={}
 db.Sequelize=Sequelize
 db.sequelize=sequelize
 db.car=car(sequelize,DataTypes)
 db.customer=customer(sequelize,DataTypes)
 db.employee=employee(sequelize,DataTypes)
 db.invoice=invoice(sequelize,DataTypes)
 db.employee_Qualification=employee_Qualification(sequelize,DataTypes)
 //making relation
 db.employee.hasMany(db.car,{
    foreignKey:"employee_id"
})
 db.car.belongsTo(db.employee,{
    foreignKey:"employee_id"
 })
 db.customer.hasMany(db.car,{
    foreignKey:"customer_id"
 })
 db.car.belongsTo(db.customer,{
    foreignKey:"customer_id"
 })
 db.customer.hasMany(db.invoice,{
    foreignKey:"customer_id"
 })
 db.invoice.belongsTo(db.customer,{
    foreignKey:"customer_id"
 })
 db.employee.hasMany(db.invoice,{
    foreignKey:"employee_id"
 })
 db.invoice.belongsTo(db.employee,{
    foreignKey:"employee_id"
 })
 db.employee.hasMany(db.employee_Qualification,{
    foreignKey:"employee_id"
 })
 db.employee_Qualification.belongsTo(db.employee,{
    foreignKey:"employee_id"
 })
 export default db