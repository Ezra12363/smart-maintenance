const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const repairRoutes = require('./src/controllers/repairController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', repairRoutes);

app.listen(PORT, () => {
  console.log(`Serveur SmartMaintenance démarré sur http://localhost:${PORT}`);
});

module.exports = app;

