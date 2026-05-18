import sequelize from "./db.js";
import { DataTypes, Model } from 'sequelize';
import Student from './student.js';
class Class extends Model {
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
    openDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Class',
    timestamps: true,
    paranoid: true
});
Class.hasMany(Student);
export default Class;
