import sequelize from './db.js';
import { DataTypes, Model } from 'sequelize';
class Admin extends Model {
}
Admin.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Admin',
    timestamps: true,
    paranoid: true
});
export default Admin;
