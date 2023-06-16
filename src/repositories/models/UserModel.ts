import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

class User extends Model {
    static associate(models) {
        User.belongsTo(models.Role, {
            foreignKey: 'roleId',
            onDelete: 'CASCADE',
        });

        User.belongsTo(models.Department, {
            foreignKey: 'departmentId',
            onDelete: 'CASCADE',
        });
    }
}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        lastLogin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export default User;