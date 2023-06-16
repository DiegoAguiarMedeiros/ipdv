import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

class CostCenter extends Model {
  static associate(models) {
    CostCenter.hasMany(models.Department, {
      foreignKey: 'costCenterId',
      onDelete: 'CASCADE',
    });
  }
}

CostCenter.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    modelName: 'Department',
  }
);

export default CostCenter;
