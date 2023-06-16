'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Departments', 'costCenterId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'CostCenters',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Departments', 'costCenterId');
  },
};
