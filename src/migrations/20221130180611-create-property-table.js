'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('property', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_on: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_on: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('property');
  },
};
