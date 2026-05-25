import sequelize from './db.js'
import { DataTypes, Model, Optional, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

interface AdminAttributes {
  id: number
  loginId: string
  loginPassword: string
  name: string
}

export type AdminDTO = Pick<AdminAttributes, 'id' | 'loginId'>;

export interface AdminCreationAttributes extends Optional<AdminAttributes, 'id'> {}

class Admin extends Model<
  InferAttributes<Admin, { omit: 'createdAt' | 'updatedAt' | 'deletedAt' }>,
  InferCreationAttributes<Admin, { omit: 'createdAt' | 'updatedAt' | 'deletedAt' }>
> {
  declare id: CreationOptional<number>
  declare loginId: string
  declare loginPassword: string
  declare name: string

  declare readonly createdAt: Date
  declare readonly updatedAt: Date
  declare readonly deletedAt: Date | null
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