const express = require('express');
const NodesController = require('../Controllers/NodesController');

const router = express.Router();

router.get('/v1/status', NodesController.getStatus);
router.get('/v1/blocks', NodesController.getBlocks);

module.exports = router;
