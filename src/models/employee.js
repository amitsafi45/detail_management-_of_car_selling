export default (sequelize,DataTypes)=>{
  const employee=sequelize.define('employee',{
    employee_id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    }})
    return employee     
}