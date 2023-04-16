'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('organizations_properties', {
      organization_id: {
        type: Sequelize.INTEGER,
        field: 'organization_id',
        allowNull: false,
        references: {
          model: 'organization',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      property_id: {
        type: Sequelize.INTEGER,
        field: 'property_id',
        allowNull: false,
        references: {
          model: 'property',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('organizations_properties');
  },
};
