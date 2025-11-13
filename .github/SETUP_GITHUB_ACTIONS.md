# Configuration GitHub Actions

## Secret npm requis

1. Allez sur https://github.com/factpulse/sdk-typescript/settings/secrets/actions
2. Cliquez sur "New repository secret"
3. Nom : `NPM_TOKEN`
4. Valeur : Votre token npm (obtenu sur https://www.npmjs.com/settings/YOUR_USERNAME/tokens)

## Déploiement

Le workflow se déclenche automatiquement lors de la création d'un tag `v*` (exemple : `v1.0.0`).
