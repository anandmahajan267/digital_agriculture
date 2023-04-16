const Joi = require('joi');

const requiredFieldsMessage = 'Some required fields are missing';

const idSchema = Joi.number().integer().min(1).required();

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
});

const userSchema = Joi.object({
  displayName: Joi.string()
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
});

const organizationSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
  description: Joi.string()
    .min(1)
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
});

const propertySchema = Joi.object({
  name: Joi.string()
    .min(1)
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
  description: Joi.string()
    .min(1)
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
  regionFieldId: Joi.number()
    .integer()
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'number.empty': requiredFieldsMessage,
    }),
});

const regionFieldSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
  description: Joi.string()
    .min(1)
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'string.empty': requiredFieldsMessage,
    }),
  parentId: Joi.number()
    .integer()
    .required()
    .messages({
      'any.required': requiredFieldsMessage,
      'number.empty': requiredFieldsMessage,
    }),
  rowType: Joi.required()
    // .valid('REGION', 'FIELD')
    .messages({
      'any.required': requiredFieldsMessage,
    }),
});

module.exports = {
  idSchema,
  loginSchema,
  userSchema,
  organizationSchema,
  propertySchema,
  regionFieldSchema,
};
