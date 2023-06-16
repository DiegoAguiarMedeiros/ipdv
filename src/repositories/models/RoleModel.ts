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
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: 'Role',
  }
);

export default Role;