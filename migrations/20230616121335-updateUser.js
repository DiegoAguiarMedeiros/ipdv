'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addColumn('Users', 'departmentId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Departments',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'roleId');
    await queryInterface.removeColumn('Users', 'departmentId');
  },
};
