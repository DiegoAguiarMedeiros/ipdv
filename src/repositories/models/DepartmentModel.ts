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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Department',
  }
);

export default Department;
