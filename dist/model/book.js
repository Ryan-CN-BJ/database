import sequelize from './db.js';
import { DataTypes, Model } from 'sequelize';
class Book extends Model {
}
Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgurl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    publishDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Book',
    timestamps: true,
    paranoid: true
});
