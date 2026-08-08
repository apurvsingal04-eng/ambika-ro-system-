const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 10000;

// Search for dist or root build paths
const candidatePaths = [
  path.join(__dirname, 'artifacts/ambika-ro-system/dist'),
  path.join(__dirname, 'artifacts/ambika-ro-system'),
  path.join(__dirname, 'dist'),
  __dirname
];

let targetDir = __dirname;
for (const p of candidatePaths) {
  if (fs.existsSync(path.join(p, 'index.html'))) {
    targetDir = p;
    break;
  }
}

app.use(express.static(targetDir));

app.use((req, res) => {
  res.sendFile(path.join(targetDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving site from: ${targetDir} on port ${PORT}`);
});
