const express = require('express');
// require('express-async-errors');

const OrganizationController = require('../controllers/organization.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, OrganizationController.createOrganization);

module.exports = router;
