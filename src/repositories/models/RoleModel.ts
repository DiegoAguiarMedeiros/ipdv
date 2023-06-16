import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

class Role extends Model {
  static associate(models) {
    Role.hasMany(models.User, {
      foreignKey: 'roleId',
      onDelete: 'CASCADE',
    });
  }
}

Role.init(
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
    modelName: 'Role',
  }
);

export default Role;