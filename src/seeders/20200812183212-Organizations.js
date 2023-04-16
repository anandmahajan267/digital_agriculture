const common = require('../utils/common');

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('organization',
      [
        {
          id: 1,
          name: 'Action Institute',
          description: 'Action Institute',
          user_id: 1,
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
        {
          id: 2,
          name: 'Helping Hands',
          description: 'Helping Hands',
          user_id: 1,
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
        {
          id: 3,
          name: 'Angel Reach',
          description: 'Angel Reach',
          user_id: 1,
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
        {
          id: 4,
          name: 'Impact Hub',
          description: 'Impact Hub',
          user_id: 1,
          created_on: common.getCurrentUtcDateTime(),
          updated_on: common.getCurrentUtcDateTime(),
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('organization', null, {});
  },
};
