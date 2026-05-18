import sequelize from "./db.js";
import { DataTypes, Model, Optional } from 'sequelize'

interface StudentAttributes {
  id: number
  name: string
  birthday: Date
  sex:boolean
  mobile:string
  classId?: number
}

interface StudentCreationAttributes extends Optional<StudentAttributes,'id'>{}

class Student extends Model<StudentAttributes, StudentCreationAttributes> implements StudentAttributes {
  declare id: number
  declare name: string
  declare birthday: Date
  declare sex:boolean
  declare mobile:string
  declare classId?: number
}

Student.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'Student',
    timestamps: true,
    paranoid: true
})

Student.belongsTo('Class')

export default Student