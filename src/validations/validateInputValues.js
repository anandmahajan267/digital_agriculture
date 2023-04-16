const schemas = require('./schemas');
const { Property, RegionField } = require('../models');

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
    return { type: 'INVALID_VALUE', message: 'one or more propertyIds not found' };
  }

  return { type: null, message: '' };
};

const validateNewProperty = async (name, description, regionFieldId) => {
  const { error } = schemas.propertySchema.validate({ name, description, regionFieldId });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  const regionField = await RegionField.findOne({ where: { id: regionFieldId } });
  if (!regionField) {
    return { type: 'INVALID_VALUE', message: 'Please provide vaild regionFieldId' };
  }

  return { type: null, message: '' };
};

const isVaildRowTpe = async (parentId) => {
  if (parentId > 0) {
    const regionField = await RegionField.findOne({ where: { id: parentId, row_type: 'REGION' } });
    if (!regionField) {
      return { type: 'INVALID_VALUE', message: 'Please provide vaild parentId' };
    }
  }

  return { type: null, message: '' };
};

const validateRowType = async (parentId, rowType) => {
  if (!['REGION', 'FIELD'].includes(rowType)) {
    return { type: 'INVALID_VALUE', message: 'rowType should be REGION or FIELD' };
  }

  if (parentId === 0 && rowType !== 'REGION') {
    return { type: 'INVALID_VALUE', message: 'rowType should be REGION root parent' };
  }

  return isVaildRowTpe(parentId);
};

const validateNewRegionField = async (name, description, parentId, rowType) => {
  const { error } = schemas.regionFieldSchema.validate({ name, description, parentId, rowType });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return validateRowType(parentId, rowType);
};

module.exports = {
  validateId,
  validateLogin,
  validateNewUser,
  validateNewOrganization,
  validateNewProperty,
  validateNewRegionField,
};
