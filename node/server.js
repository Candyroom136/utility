const express = require('express');
const path = require('path');

const app = express();

const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
