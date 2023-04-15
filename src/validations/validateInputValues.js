const schemas = require('./schemas');
const { Property } = require('../models');

const validateId = (id) => {
  const { error } = schemas.idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };

  return { type: null, message: '' };
};

const validateLogin = async (email, password) => {
  const { error } = schemas.loginSchema.validate({ email, password });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateNewUser = async (displayName, email, password) => {
  const { error } = schemas.userSchema.validate({ displayName, email, password });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateNewOrganization = async (name, description, propertyIds) => {
  const { error } = schemas.organizationSchema.validate({ name, description });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  
  const properties = await Promise.all(
    propertyIds.map(async (id) => Property.findOne({
      where: { id },
    })),
  );

  const somePropertyIsMissing = properties.some((category) => category === null);
  if (somePropertyIsMissing) {
    return { type: 'INVALID_VALUE', message: 'one or more "propertyIds" not found' };
  }

  return { type: null, message: '' };
};

const validateNewProperty = async (name, description) => {
  const { error } = schemas.propertySchema.validate({ name, description });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateLogin,
  validateNewUser,
  validateNewOrganization,
  validateNewProperty,
};
