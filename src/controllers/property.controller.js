require('dotenv/config');

const PropertyService = require('../services/property.service');
const errorMap = require('../utils/errorMap');

const error500message = 'Internal error';

const createProperty = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { userId } = req.user;

    const { type, message } = await PropertyService
      .createProperty(name, description, userId);
    if (type) return res.status(errorMap.mapError(type)).json({ message });

    return res.status(201).json(message.dataValues);
  } catch (err) {
    return res.status(500).json({ message: error500message });
  }
};

module.exports = {
  createProperty,
};
