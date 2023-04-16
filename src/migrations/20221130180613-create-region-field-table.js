'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('region_field', {
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
      parent_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
      },
      row_type: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['REGION', 'FIELD'],
        defaultValue: 'REGION'
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
    return queryInterface.dropTable('region_field');
  },
};
