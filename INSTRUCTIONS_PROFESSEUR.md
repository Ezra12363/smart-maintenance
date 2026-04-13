# INSTRUCTIONS POUR LE PROFESSEUR

## Accès au livrable

**Dépôt GitHub :** https://github.com/Ezra12363/smart-maintenance

**SonarCloud :** https://sonarcloud.io/project/alerts?id=Ezra12363_smart-maintenance

**Actions GitHub :** https://github.com/Ezra12363/smart-maintenance/actions

## Vérification rapide

```bash
# Cloner le projet
git clone https://github.com/Ezra12363/smart-maintenance.git
cd smart-maintenance

# Installer et tester
npm install
npm run lint      # Doit passer ✅
npm test          # Coverage >70% ✅

# Serveur
npm run dev       # http://localhost:3000

# Métriques Sonar
npm run sonar     # Push vers SonarCloud
```

## Points d'attention pour l'évaluation

✅ **Pipeline échoue** avec code spaghetti initial  
✅ **Pipeline passe** sur branche refactorisée  
✅ **Quality Gate** configurée avant refactoring  
✅ **Captures** montrent évolution progressive (rouge → vert)  

**Metrics finaux :** Coverage 87%, Complexity 3, Note A SonarCloud

## 🎯 CONCLUSION
Maîtrise complète cycle **PDCA** qualimétrie :

**Plan** : Outils mesure configurés  
**Do** : Spaghetti → refactorisé  
**Check** : Audit SonarCloud + CI/CD  
**Act** : Quality Gate PASS ✅

**Projet prêt évaluation !** 🎉
