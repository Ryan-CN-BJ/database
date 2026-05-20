import sequelize from "./db.js";
import { DataTypes, Model, Optional } from 'sequelize'
import Student from './student.js'

interface ClassAttributes {
  id: number
  name: string,
  openDate: Date
}

export interface ClassCreationAttributes extends Optional<ClassAttributes, 'id'> {}

class Class extends Model<ClassAttributes, ClassCreationAttributes> implements ClassAttributes {
  declare id: number
  declare name: string
  declare openDate: Date
}

Class.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openDate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Class',
    timestamps: true,
    paranoid: true
})

Class.hasMany(Student)
export default Class