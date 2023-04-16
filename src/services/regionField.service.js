const snakeize = require('snakeize');
const camelize = require('camelize');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { RegionField } = require('../models');
const validations = require('../validations/validateInputValues');

const createRegionField = async (name, description, parentId, rowType) => {
  const error = await validations.validateNewRegionField(name, description, parentId, rowType);
  if (error.type) return error;

  const result = await sequelize.transaction(async (t) => {
    const date = new Date().toJSON();

    const newRegionField = await RegionField
      .create(snakeize({ name, description, parentId, rowType, createdOn: date, updatedOn: date }),
        { transaction: t });

    return { type: null, message: camelize(newRegionField) };
  });

  return result;
};

module.exports = {
  createRegionField,
};
