const common = require('../utils/common');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('organizations_properties',
      [
        {
          organization_id: 1,
          property_id: 1,
        },
        {
          organization_id: 1,
          property_id: 2,
        },
        {
          organization_id: 2,
          property_id: 1,
        },
        {
          organization_id: 2,
          property_id: 2,
        },
        {
          organization_id: 3,
          property_id: 1,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('organizations_properties', null, {});
  },
};
