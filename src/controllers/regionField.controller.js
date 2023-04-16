require('dotenv/config');

const RegionFieldService = require('../services/regionField.service');
const errorMap = require('../utils/errorMap');

const error500message = 'Internal error';

const createRegionField = async (req, res) => {
  try {
    const { name, description, parentId, rowType } = req.body;

    const { type, message } = await RegionFieldService
      .createRegionField(name, description, parentId, rowType);
    if (type) return res.status(errorMap.mapError(type)).json({ message });

    return res.status(201).json(message.dataValues);
  } catch (err) {
    return res.status(500).json({ message: error500message });
  }
};

module.exports = {
  createRegionField,
};
