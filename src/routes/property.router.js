const express = require('express');

const PropertyController = require('../controllers/property.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, PropertyController.createProperty);

module.exports = router;
