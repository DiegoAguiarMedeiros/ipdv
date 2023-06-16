import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

class Department extends Model {
  static associate(models) {
    Department.belongsTo(models.CostCenter, {
      foreignKey: 'costCenterId',
      onDelete: 'CASCADE',
    });

    Department.hasMany(models.User, {
      foreignKey: 'departmentId',
      onDelete: 'CASCADE',
    });
  }
}

Department.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    costCenterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

export default Department;
