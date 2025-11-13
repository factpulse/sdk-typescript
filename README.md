# FactPulse SDK TypeScript

Client TypeScript/JavaScript officiel pour l'API FactPulse - Facturation électronique française.

## 🎯 Fonctionnalités

- **Factur-X** : Génération et validation de factures électroniques (profils MINIMUM, BASIC, EN16931, EXTENDED)
- **Chorus Pro** : Intégration avec la plateforme de facturation publique française
- **AFNOR PDP/PA** : Soumission de flux conformes à la norme XP Z12-013
- **Signature électronique** : Signature PDF (PAdES-B-B, PAdES-B-T, PAdES-B-LT)
- **Traitement asynchrone** : Support Celery pour opérations longues
- **TypeScript** : Support complet avec types générés automatiquement

## 🚀 Installation

```bash
npm install @factpulse/sdk
# ou
yarn add @factpulse/sdk
```

## 📖 Démarrage rapide

### 1. Authentification

```typescript
import { Configuration, TraitementFactureApi } from '@factpulse/sdk';

// Configuration du client
const config = new Configuration({
  basePath: 'https://factpulse.fr/api/facturation',
  accessToken: 'votre_token_jwt'
});

const api = new TraitementFactureApi(config);
```

### 2. Générer une facture Factur-X

```typescript
// Données de la facture
const factureData = {
  numeroFacture: "FAC-2025-001",
  dateFacture: "2025-01-15",
  montantTotalHt: "1000.00",
  montantTotalTtc: "1200.00",
  fournisseur: {
    nom: "Mon Entreprise SAS",
    siret: "12345678901234",
    adressePostale: {
      ligneUn: "123 Rue Example",
      codePostal: "75001",
      nomVille: "Paris",
      paysCodeIso: "FR"
    }
  },
  destinataire: {
    nom: "Client SARL",
    siret: "98765432109876",
    adressePostale: {
      ligneUn: "456 Avenue Test",
      codePostal: "69001",
      nomVille: "Lyon",
      paysCodeIso: "FR"
    }
  },
  lignesDePoste: [{
    numero: 1,
    denomination: "Prestation de conseil",
    quantite: "10.00",
    montantUnitaireHt: "100.00",
    montantLigneHt: "1000.00"
  }]
};

// Générer le PDF Factur-X
const response = await api.genererFactureApiV1TraitementGenererFacturePost(
  JSON.stringify(factureData),
  'EN16931',
  'pdf'
);

// Sauvegarder le fichier
const fs = require('fs');
fs.writeFileSync('facture.pdf', Buffer.from(response.data));
```

### 3. Soumettre une facture complète (Chorus Pro / AFNOR PDP)

```typescript
const response = await api.soumettreFactureCompleteApiV1TraitementFacturesSoumettreCompletePost({
  facture: factureData,
  destination: {
    type: "chorus_pro",
    credentials: {
      login: "votre_login_chorus",
      password: "votre_password_chorus"
    }
  }
});

console.log(`Facture soumise : ${response.data.idFactureChorus}`);
```

## 🔑 Obtention du token JWT

### Via l'API

```typescript
import axios from 'axios';

const response = await axios.post('https://factpulse.fr/api/token/', {
  username: 'votre_email@example.com',
  password: 'votre_mot_de_passe'
});

const token = response.data.access;
```

**Accès aux credentials d'un client spécifique :**

Si vous gérez plusieurs clients et souhaitez accéder aux credentials (Chorus Pro, AFNOR PDP) d'un client particulier, ajoutez le champ `client_uid` :

```typescript
const response = await axios.post('https://factpulse.fr/api/token/', {
  username: 'votre_email@example.com',
  password: 'votre_mot_de_passe',
  client_uid: 'identifiant_client'  // UID du client cible
});

const token = response.data.access;
```

### Via le Dashboard

1. Connectez-vous sur https://factpulse.fr/api/dashboard/
2. Générez un token API
3. Copiez et utilisez le token dans votre configuration

## 📚 Ressources

- **Documentation API** : https://factpulse.fr/api/facturation/documentation
- **Code source** : https://github.com/factpulse/sdk-typescript
- **Issues** : https://github.com/factpulse/sdk-typescript/issues
- **Support** : contact@factpulse.fr

## 📄 Licence

MIT License - Copyright (c) 2025 FactPulse
