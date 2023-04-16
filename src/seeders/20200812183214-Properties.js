const common = require('../utils/common');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('property',
      [
        {
          id: 1,
          name: 'Cotton Property 1',
          description: 'Cotton Property 1',
          region_field_id: 3,
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
        {
          id: 2,
          name: 'Cotton Property 2',
          description: 'Cotton Property 2',
          region_field_id: 4,
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('property', null, {});
  },
};
