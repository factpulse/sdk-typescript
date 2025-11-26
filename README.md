# FactPulse SDK TypeScript

Client TypeScript/JavaScript officiel pour l'API FactPulse - Facturation électronique française.

## 🎯 Fonctionnalités

- **Factur-X** : Génération et validation de factures électroniques (profils MINIMUM, BASIC, EN16931, EXTENDED)
- **Chorus Pro** : Intégration avec la plateforme de facturation publique française
- **AFNOR PDP/PA** : Soumission de flux conformes à la norme XP Z12-013
- **Signature électronique** : Signature PDF (PAdES-B-B, PAdES-B-T, PAdES-B-LT)
- **Client simplifié** : Authentification JWT et polling intégrés via `helpers`
- **TypeScript** : Support complet avec types générés automatiquement

## 🚀 Installation

```bash
npm install @factpulse/sdk
# ou
yarn add @factpulse/sdk
```

## 📖 Démarrage rapide

### Méthode recommandée : Client simplifié avec helpers

Le module `helpers` offre une API simplifiée avec authentification et polling automatiques :

```typescript
import { FactPulseClient } from '@factpulse/sdk/helpers';
import * as fs from 'fs';

// Créer le client (authentification automatique)
const client = new FactPulseClient({
  email: 'votre_email@example.com',
  password: 'votre_mot_de_passe'
});

// Données de la facture
const factureData = {
  numero_facture: 'FAC-2025-001',
  date_facture: '2025-01-15',
  fournisseur: {
    nom: 'Mon Entreprise SAS',
    siret: '12345678901234',
    adresse_postale: {
      ligne_un: '123 Rue Example',
      code_postal: '75001',
      nom_ville: 'Paris',
      pays_code_iso: 'FR'
    }
  },
  destinataire: {
    nom: 'Client SARL',
    siret: '98765432109876',
    adresse_postale: {
      ligne_un: '456 Avenue Test',
      code_postal: '69001',
      nom_ville: 'Lyon',
      pays_code_iso: 'FR'
    }
  },
  montant_total: {
    montant_ht_total: '1000.00',
    montant_tva: '200.00',
    montant_ttc_total: '1200.00',
    montant_a_payer: '1200.00'
  },
  lignes_de_poste: [{
    numero: 1,
    denomination: 'Prestation de conseil',
    quantite: '10.00',
    unite: 'PIECE',
    montant_unitaire_ht: '100.00'
  }]
};

// Lire le PDF source
const pdfSource = fs.readFileSync('facture_source.pdf');

// Générer le PDF Factur-X (polling automatique)
const pdfBytes = await client.genererFacturx(
  factureData,
  pdfSource,
  'EN16931',  // profil
  'pdf',      // format
  true        // sync (attend le résultat)
);

// Sauvegarder
fs.writeFileSync('facture_facturx.pdf', pdfBytes);
```

### Méthode alternative : SDK brut

Pour un contrôle total, utilisez le SDK généré directement :

```typescript
import { Configuration, TraitementFactureApi } from '@factpulse/sdk';
import axios from 'axios';

// 1. Obtenir le token JWT
const tokenResponse = await axios.post('https://factpulse.fr/api/token/', {
  username: 'votre_email@example.com',
  password: 'votre_mot_de_passe'
});
const token = tokenResponse.data.access;

// 2. Configurer le client
const config = new Configuration({
  basePath: 'https://factpulse.fr/api/facturation',
  accessToken: token
});

// 3. Appeler l'API
const api = new TraitementFactureApi(config);
const response = await api.genererFactureApiV1TraitementGenererFacturePost(
  JSON.stringify(factureData),
  'EN16931',
  'pdf',
  new Blob([pdfSource])
);

// 4. Polling manuel pour récupérer le résultat
const taskId = response.data.id_tache;
// ... (implémenter le polling)
```

## 🔧 Avantages des helpers

| Fonctionnalité | SDK brut | helpers |
|----------------|----------|---------|
| Authentification | Manuelle | Automatique |
| Refresh token | Manuel | Automatique |
| Polling tâches async | Manuel | Automatique (backoff) |
| Retry sur 401 | Manuel | Automatique |
| Types TypeScript | ✓ | ✓ |

## 🔑 Options d'authentification

### Client UID (multi-clients)

Si vous gérez plusieurs clients :

```typescript
const client = new FactPulseClient({
  email: 'votre_email@example.com',
  password: 'votre_mot_de_passe',
  clientUid: 'identifiant_client'  // UID du client cible
});
```

### Configuration avancée

```typescript
const client = new FactPulseClient({
  email: 'votre_email@example.com',
  password: 'votre_mot_de_passe',
  apiUrl: 'https://factpulse.fr',  // URL personnalisée
  pollingInterval: 2000,  // Intervalle de polling initial (ms)
  pollingTimeout: 120000,  // Timeout de polling (ms)
  maxRetries: 2  // Tentatives en cas de 401
});
```

## 💡 Formats de montants acceptés

L'API accepte plusieurs formats pour les montants :

```typescript
// String (recommandé pour la précision)
const montant = "1234.56";

// Number
const montant = 1234.56;

// Integer
const montant = 1234;

// Helper de formatage
const montantFormate = FactPulseClient.formatMontant(1234.5);  // "1234.50"
```

## 📚 Ressources

- **Documentation API** : https://factpulse.fr/api/facturation/documentation
- **Code source** : https://github.com/factpulse/sdk-typescript
- **Issues** : https://github.com/factpulse/sdk-typescript/issues
- **Support** : contact@factpulse.fr

## 📄 Licence

MIT License - Copyright (c) 2025 FactPulse
