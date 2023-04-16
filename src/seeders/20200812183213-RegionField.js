const common = require('../utils/common');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('region_field',
      [
        {
          id: 1,
          name: 'Cotton Master Region',
          description: 'Cotton Master Region',
          parent_id: 0,
          row_type: 'REGION',
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
        {
          id: 2,
          name: 'Cotton sub Region',
          description: 'Cotton sub Region',
          parent_id: 1,
          row_type: 'REGION',
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
        {
          id: 3,
          name: 'Cotton Field 1',
          description: 'Cotton Field 1',
          parent_id: 2,
          row_type: 'FIELD',
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
        {
          id: 4,
          name: 'Cotton Field 2',
          description: 'Cotton Field 2',
          parent_id: 2,
          row_type: 'FIELD',
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('region_field', null, {});
  },
};
