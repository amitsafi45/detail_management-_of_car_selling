export default (sequelize,DataTypes)=>{
    const customer=sequelize.define('customer',{
        customer_id:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
            
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
            type:DataTypes.STRING
        },
        city:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return customer

}