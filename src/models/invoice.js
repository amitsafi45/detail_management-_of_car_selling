export default (sequelize,DataTypes)=>{
    
    const invoice=sequelize.define('invoice',{
    
    invoice_id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false,
    }
    
})
return invoice
}