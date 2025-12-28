const express = require('express');
const router = express.Router();
const version = require('./version');

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

router.get('/api/version', (req, res) => {
  res.status(200).json({
    build: version.build,
    commit: version.commit
  });
});

module.exports = router;
