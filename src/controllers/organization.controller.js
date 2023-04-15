require('dotenv/config');

const OrganizationService = require('../services/organization.service');
const errorMap = require('../utils/errorMap');

const error500message = 'Internal error';

const createOrganization = async (req, res) => {
  try {
    console.log('req : ', req);
    const { name, description } = req.body;
    const { userId } = req.user;

    const { type, message } = await OrganizationService
      .createPost(name, description, userId);
    if (type) return res.status(errorMap.mapError(type)).json({ message });

    return res.status(201).json(message.dataValues);
  } catch (err) {
    return res.status(500).json({ message: error500message });
  }
};

module.exports = {
  createOrganization,
};
