const express = require('express');
const repairRoutes = require('./routes/repair');

const app = express();
app.use(express.json());

app.use('/api', repairRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur spaghetti démarré sur http://localhost:${PORT}`);
});
