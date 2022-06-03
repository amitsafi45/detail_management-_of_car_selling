export default(sequelize,DataTypes)=>{
    const car=sequelize.define('car',{
        car_id:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
            
        },
        serial_Number:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        model_No:{
            type:DataTypes.STRING,
            allowNull:false
        },
        color:{
            type:DataTypes.STRING,
            allowNull:false
        },
        year:{
            type:DataTypes.STRING
        }
    })
    return car
}