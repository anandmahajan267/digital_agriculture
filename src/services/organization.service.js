const snakeize = require('snakeize');
const camelize = require('camelize');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { Organization } = require('../models');
const validations = require('../validations/validateInputValues');

const createPost = async (name, description, userId) => {
  const error = await validations.validateNewOrganization(name, description);
  if (error.type) return error;

  const result = await sequelize.transaction(async (t) => {
    const date = new Date().toJSON();

    const newOrganization = await Organization
      .create(snakeize({ name, description, userId, createdOn: date, updatedOn: date }),
        { transaction: t });

    return { type: null, message: camelize(newOrganization) };
  });
  
  return result;
};

module.exports = {
  createPost,
};
