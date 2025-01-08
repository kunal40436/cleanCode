const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Create uploads directory if it doesn't exist
(async () => {
  try {
    await fs.mkdir(path.join(__dirname, '../uploads'), { recursive: true });
  } catch (error) {
    console.error('Error creating uploads directory:', error);
  }
})();

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});