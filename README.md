# SmartMaintenance - Projet Qualimétrie

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Ezra12363_smart-maintenance&metric=alert_status)](https://sonarcloud.io/dashboard?id=Ezra12363_smart-maintenance)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Ezra12363_smart-maintenance&metric=coverage)](https://sonarcloud.io/component_measures?id=Ezra12363_smart-maintenance&metric=Coverage)

## 🚀 API Devis Garage (Qualimétrie Étape 4 ✅)

**Serveur :** http://localhost:3000/

### Endpoints

**1. Health Check**
```
GET /
```
Response :
```
{
  \"message\": \"SmartMaintenance API Qualimétrie ✅\",
  \"endpoints\": {
    \"POST /api/repair-estimate\": \"Calcul devis réparation\"
  },
  \"version\": \"2.0.0\",
  \"status\": \"Production ready - Coverage 87%, Complexity 3\"
}
```

**2. Calcul Devis Réparation**
```
POST /api/repair-estimate
Content-Type: application/json
```
Body exemple :
```
{
  \"problemType\": \"Moteur\",
  \"hoursWorked\": 3,
  \"partsReplaced\": [
    {\"name\": \"Piston\", \"price\": 200},
    {\"name\": \"Joint\", \"price\": 50}
  ],
  \"isUrgent\": true,
  \"vehicleAge\": 12
}
```
**Response attendue :**
```
{
  \"estimate\": 885,
  \"details\": {
    \"laborCost\": 375,
    \"partsCost\": 510,
    \"laborDetails\": {...},
    \"partsDetails\": {...}
  }
}
```

### 📊 Qualimétrie Metrics (SonarCloud)

| Métrique | Avant | Après | Statut |
|----------|--------|--------|--------|
| Complexité | 23 | 3 | ✅ |
| Coverage | 0% | 87% | ✅ |
| Quality Gate | ❌ | ✅ A | ✅ |

### 🧪 Tests & Qualité

```bash
npm test          # Tests + Coverage 87%
npm run lint      # ESLint strict PASS
npm run dev       # Serveur dev (nodemon)
npm start         # Production
```

### 🚀 Installation

```bash
git clone https://github.com/Ezra12363/smart-maintenance.git
cd smart-maintenance
npm install
npm test
npm run dev
```

### 📈 Pipeline CI/CD
- [GitHub Actions](https://github.com/Ezra12363/smart-maintenance/actions)
- [SonarCloud](https://sonarcloud.io/dashboard?id=Ezra12363_smart-maintenance)

**Livrable complet !** 🎉
