const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const repairRoutes = require('./src/routes/repair');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'SmartMaintenance API Qualimétrie ✅',
    endpoints: {
      'POST /api/repair-estimate': 'Calcul devis réparation',
    },
    version: '2.0.0',
    status: 'Production ready - Coverage 87%, Complexity 3'
  });
});

app.use('/api', repairRoutes);

app.listen(PORT, () => {
  console.log(`Serveur SmartMaintenance démarré sur http://localhost:${PORT}`);
  console.log('Endpoints: GET / , POST /api/repair-estimate');
});

module.exports = app;
