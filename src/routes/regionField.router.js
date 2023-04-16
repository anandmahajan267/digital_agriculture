const express = require('express');

const RegionFieldController = require('../controllers/regionField.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, RegionFieldController.createRegionField);

module.exports = router;
