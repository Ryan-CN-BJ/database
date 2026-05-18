import sequelize from "./db.js";
import { DataTypes, Model } from 'sequelize';
import Class from './class.js';
class Student extends Model {
}
Student.init({
    id: {
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
}, {
    sequelize,
    modelName: 'Student',
    timestamps: true,
    paranoid: true
});
Student.belongsTo(Class);
export default Student;
