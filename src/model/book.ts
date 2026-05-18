import sequelize from './db.js'
import { DataTypes, Model, Optional } from 'sequelize'

interface BookAttributes {
  id: number
  name: string
  imgurl:string
  author: string
  price: number,
  publishDate:Date
}

interface BookCreationAttributes extends Optional<BookAttributes,'id'>{}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  declare id: number
  declare name: string
  declare imgurl:string
  declare author: string
  declare price: number
  declare publishDate:Date
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
})
