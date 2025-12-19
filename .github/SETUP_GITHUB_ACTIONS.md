# Configuration GitHub Actions - npm Trusted Publishing

Ce SDK utilise **npm Trusted Publishing** avec OIDC pour une sécurité renforcée.

## Configuration sur npmjs.com (Trusted Publishing)

1. Connectez-vous sur https://www.npmjs.com/
2. Allez sur le package `@factpulse/sdk` > **Settings** > **Publishing access**
3. Cliquez sur **Add new provider** > **GitHub Actions**
4. Remplissez :
   - **Repository owner**: `factpulse`
   - **Repository name**: `sdk-typescript`
   - **Workflow filename**: `publish-npm.yml`
   - **Environment**: `npm-publish` (optionnel mais recommandé)
5. Cliquez **Add**

## Configuration sur GitHub

### Option 1 : Avec Environment (recommandé)

1. Allez sur https://github.com/factpulse/sdk-typescript/settings/environments
2. Cliquez **New environment**
3. Nom : `npm-publish`
4. Configurez les règles de protection si souhaité (reviewers, etc.)

### Option 2 : Token npm Automation

Si vous ne pouvez pas utiliser Trusted Publishing :

1. Allez sur https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Cliquez **Generate New Token** > **Automation**
3. Copiez le token généré
4. Allez sur https://github.com/factpulse/sdk-typescript/settings/secrets/actions
5. Cliquez **New repository secret**
6. Nom : `NPM_TOKEN`
7. Valeur : le token copié

## Déploiement

Le workflow se déclenche automatiquement lors de la création d'un tag `v*` :

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

## Provenance

Le flag `--provenance` génère une attestation de provenance signée, visible sur npmjs.com.
Cela garantit que le package a été publié depuis ce repository GitHub.
