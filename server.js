const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const repairRoutes = require('./src/routes/repair');

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SmartMaintenance API',
      version: '2.0.0',
      description: 'API de devis réparation garage - Qualimétrie 100%',
    },
  },
  apis: ['./src/**/*.js'], // Scan src/ pour @swagger
};
const specs = swaggerJsDoc(swaggerOptions);

app.use(helmet());
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'SmartMaintenance API Qualimétrie ✅',
    docs: 'http://localhost:3000/api-docs',
    endpoints: {
      'POST /api/repair-estimate': 'Calcul devis réparation',
    },
    version: '2.0.0',
    status: 'Production ready - Tests 100%, Swagger UI'
  });
});

app.use('/api', repairRoutes);

app.listen(PORT, () => {
  console.log(`Serveur SmartMaintenance démarré sur http://localhost:${PORT}`);
  console.log('Swagger: http://localhost:3000/api-docs');
  console.log('Endpoints: GET / , POST /api/repair-estimate');
});

module.exports = app;
