const snakeize = require('snakeize');
const camelize = require('camelize');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const { Organization, OrganizationProperty } = require('../models');
const validations = require('../validations/validateInputValues');

const createOrganization = async (name, description, userId, propertyIds) => {
  const error = await validations.validateNewOrganization(name, description, propertyIds);
  if (error.type) return error;

  const result = await sequelize.transaction(async (t) => {
    const date = new Date().toJSON();

    const newOrganization = await Organization
      .create(snakeize({ name, description, userId, createdOn: date, updatedOn: date }),
        { transaction: t });

    const inserts = propertyIds.map(async (id) => {
      await OrganizationProperty.create(snakeize({
        organizationId: newOrganization.id,
        propertyId: id,
      }), { transaction: t });
    });

    await Promise.all(inserts);
    return { type: null, message: camelize(newOrganization) };
  });

  return result;
};

module.exports = {
  createOrganization,
};
