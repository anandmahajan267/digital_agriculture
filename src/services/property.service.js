const snakeize = require('snakeize');
const camelize = require('camelize');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { Property } = require('../models');
const validations = require('../validations/validateInputValues');

const createProperty = async (name, description, regionFieldId) => {
  const error = await validations.validateNewProperty(name, description, regionFieldId);
  if (error.type) return error;

  const result = await sequelize.transaction(async (t) => {
    const date = new Date().toJSON();

    const newOrganization = await Property
      .create(snakeize({ name, description, regionFieldId, createdOn: date, updatedOn: date }),
        { transaction: t });

    return { type: null, message: camelize(newOrganization) };
  });
  
  return result;
};

module.exports = {
  createProperty,
};
