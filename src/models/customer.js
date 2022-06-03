export default (sequelize,DataTypes)=>{
    const customer=sequelize.define('customer',{
        customer_id:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
            unique:true 
            
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        phone_number:{
            type:DataTypes.STRING,
            allowNull:false
             
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return customer

}