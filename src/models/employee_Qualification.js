export default(sequelize,DataTypes)=>{
    const employee_Qualification=sequelize.define('employee_Qualification',{
        employee_Qualification_id:{
            type:DataTypes.INTEGER,
            autoincrement:true,
            primaryKey:true
        },
        Qualification:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return employee_Qualification
}