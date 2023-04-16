module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        display_name: 'Anand Mahajan',
        email: 'anandmahajan267@gmail.com',
        password: 'test123'
      },
      {
        id: 2,
        display_name: 'Anand test Account',
        email: 'anand.testaccount@gmail.com',
        password: 'test123'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
