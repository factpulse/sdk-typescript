# Configuration GitHub Actions - npm Trusted Publishing

Ce SDK utilise **npm Trusted Publishing** avec OIDC. **Aucun token npm n'est requis après la configuration initiale !**

## Prérequis : Première publication manuelle

⚠️ **IMPORTANT** : Trusted Publishing ne fonctionne que pour les packages qui existent déjà sur npm.
La première publication doit être faite manuellement.

### 1. Créer l'organisation npm (si pas déjà fait)

Allez sur https://www.npmjs.com/org/create et créez l'organisation `factpulse`.

### 2. Première publication manuelle

```bash
cd sdk-typescript

# Se connecter à npm
npm login

# Publier la première version
npm publish --access public
```

## Étape 1 : Configurer Trusted Publishing sur npmjs.com

Après la première publication :

1. Connectez-vous sur https://www.npmjs.com/
2. Allez sur le package `@factpulse/sdk` > **Settings** > **Publishing access**
3. Dans la section **Trusted Publisher**, cliquez sur **GitHub Actions**
4. Remplissez :
   - **Organization or user**: `factpulse`
   - **Repository**: `sdk-typescript`
   - **Workflow filename**: `publish-npm.yml`
   - **Environment name**: (laisser vide)
5. Cliquez **Add**

## Étape 2 (Recommandé) : Désactiver les tokens classiques

Pour une sécurité maximale, après avoir vérifié que Trusted Publishing fonctionne :

1. Allez dans **Settings** > **Publishing access**
2. Sélectionnez **"Require two-factor authentication and disallow tokens"**
3. Cliquez **Update Package Settings**

## Déploiement automatique (après configuration)

Le workflow se déclenche automatiquement lors de la création d'un tag `v*` :

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

## Comment ça marche ?

- Le workflow utilise `id-token: write` pour générer un token OIDC
- npm vérifie que la requête vient bien du workflow configuré
- La provenance est générée automatiquement
- Aucun secret npm à gérer ou à faire tourner

## Dépendances privées (si nécessaire)

Si vous avez des dépendances npm privées, ajoutez un token read-only :

```yaml
- run: npm install
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_READ_TOKEN }}
```

Le publish utilise OIDC, pas besoin de token pour cette étape.
