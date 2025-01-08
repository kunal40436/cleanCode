const express = require('express');
const router = express.Router();
const fileController = require('./fileController');
const { upload } = require('./fileService');

// Upload route
router.post('/upload', upload.single('file'), fileController.uploadFile);

// Download route
router.get('/files/:filename', fileController.getFile);

module.exports = router;