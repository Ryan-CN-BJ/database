import sequelize from './db.js'
import { DataTypes, Model, Optional } from 'sequelize'

interface AdminAttributes {
  id: number
  loginId: string
  loginPassword: string
  name:string
}

export interface AdminCreationAttributes extends Optional<AdminAttributes, 'id'> {}

class Admin extends Model<AdminAttributes, AdminCreationAttributes> implements AdminAttributes {
  declare id: number
  declare loginId: string
  declare loginPassword: string
  declare name: string
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
})

export default Admin