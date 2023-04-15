'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('organization', {
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
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    return queryInterface.dropTable('organization');
  },
};
