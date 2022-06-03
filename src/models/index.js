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
 db.employee.hasMany(db.car)
 export default db