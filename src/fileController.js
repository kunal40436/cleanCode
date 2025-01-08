const path = require('path');
const fs = require('fs').promises;

class FileController {
  async uploadFile(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const fileInfo = {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        path: req.file.path
      };

      // Here you would typically save file metadata to a database
      
      res.status(200).json({
        message: 'File uploaded successfully',
        file: fileInfo
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFile(req, res) {
    try {
      const filename = req.params.filename;
      const filePath = path.join(__dirname, '../uploads', filename);

      // Check if file exists
      await fs.access(filePath);
      
      res.sendFile(filePath);
    } catch (error) {
      res.status(404).json({ error: 'File not found' });
    }
  }
}

module.exports = new FileController();