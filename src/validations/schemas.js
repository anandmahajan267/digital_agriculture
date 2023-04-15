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

module.exports = {
  idSchema,
  loginSchema,
  userSchema,
};
