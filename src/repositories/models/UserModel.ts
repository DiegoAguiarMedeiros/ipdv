import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';
class User extends Model {
    static associate(models) {
        User.belongsTo(models.Role, {
            foreignKey: 'id',
            onDelete: 'CASCADE',
        });

        User.belongsTo(models.Department, {
            foreignKey: 'id',
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        departmentId: {
            type: DataTypes.INTEGER,
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
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        lastLogin: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export default User;