import express from 'express'
import db from './src/models/index.js'
const app=express()

app.listen(3000,async()=>{
   await db.sequelize.sync({force:true})
    console.log('listening')
})