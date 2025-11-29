# FactPulse SDK TypeScript

Client TypeScript/JavaScript officiel pour l'API FactPulse - Facturation électronique française.

## Fonctionnalités

- **Factur-X** : Génération et validation de factures électroniques (profils MINIMUM, BASIC, EN16931, EXTENDED)
- **Chorus Pro** : Intégration avec la plateforme de facturation publique française
- **AFNOR PDP/PA** : Soumission de flux conformes à la norme XP Z12-013
- **Signature électronique** : Signature PDF (PAdES-B-B, PAdES-B-T, PAdES-B-LT)
- **Client simplifié** : Authentification JWT et polling intégrés via `helpers`

## Installation

```bash
npm install @factpulse/sdk
# ou
yarn add @factpulse/sdk
```

## Démarrage rapide

Le module `helpers` offre une API simplifiée avec authentification et polling automatiques :

```typescript
import {
  FactPulseClient,
  montant,
  montantTotal,
  ligneDePoste,
  ligneDeTva,
  fournisseur,
  destinataire,
} from '@factpulse/sdk/helpers';
import * as fs from 'fs';

// Créer le client
const client = new FactPulseClient({
  email: 'votre_email@example.com',
  password: 'votre_mot_de_passe'
});

// Construire la facture avec les helpers
const factureData = {
  numeroFacture: 'FAC-2025-001',
  dateFacture: '2025-01-15',
  fournisseur: fournisseur(
    'Mon Entreprise SAS',
    '12345678901234',
    '123 Rue Example',
    '75001',
    'Paris'
  ),
  destinataire: destinataire(
    'Client SARL',
    '98765432109876',
    '456 Avenue Test',
    '69001',
    'Lyon'
  ),
  montantTotal: montantTotal(1000.00, 200.00, 1200.00, 1200.00),
  lignesDePoste: [
    ligneDePoste(1, 'Prestation de conseil', 10, 100.00, 1000.00)
  ],
  lignesDeTva: [
    ligneDeTva(1000.00, 200.00, { tauxManuel: '20.00' })
  ],
};

// Générer le PDF Factur-X
const pdfBytes = await client.genererFacturx(
  factureData,
  'facture_source.pdf',
  'EN16931'
);

fs.writeFileSync('facture_facturx.pdf', pdfBytes);
```

## Helpers disponibles

### montant(value)

Convertit une valeur en string formaté pour les montants monétaires.

```typescript
import { montant } from '@factpulse/sdk/helpers';

montant(1234.5);      // "1234.50"
montant("1234.56");   // "1234.56"
montant(null);        // "0.00"
```

### montantTotal(ht, tva, ttc, aPayer, options?)

Crée un objet MontantTotal complet.

```typescript
import { montantTotal } from '@factpulse/sdk/helpers';

const total = montantTotal(1000.00, 200.00, 1200.00, 1200.00, {
  remiseTtc: 50.00,          // Optionnel
  motifRemise: 'Fidélité',   // Optionnel
  acompte: 100.00,           // Optionnel
});
```

### ligneDePoste(numero, denomination, quantite, montantUnitaireHt, montantTotalLigneHt, options?)

Crée une ligne de facturation.

```typescript
import { ligneDePoste } from '@factpulse/sdk/helpers';

const ligne = ligneDePoste(
  1,
  'Prestation de conseil',
  5,
  200.00,
  1000.00,  // montantTotalLigneHt requis
  {
    tauxTva: 'TVA20',        // Ou tauxTvaManuel: '20.00'
    categorieTva: 'S',       // S, Z, E, AE, K
    unite: 'HEURE',          // FORFAIT, PIECE, HEURE, JOUR...
    reference: 'REF-001',    // Optionnel
  }
);
```

### ligneDeTva(montantBaseHt, montantTva, options?)

Crée une ligne de ventilation TVA.

```typescript
import { ligneDeTva } from '@factpulse/sdk/helpers';

const tva = ligneDeTva(1000.00, 200.00, {
  taux: 'TVA20',       // Ou tauxManuel: '20.00'
  categorie: 'S',      // S, Z, E, AE, K
});
```

### adressePostale(ligne1, codePostal, ville, options?)

Crée une adresse postale structurée.

```typescript
import { adressePostale } from '@factpulse/sdk/helpers';

const adresse = adressePostale('123 Rue de la République', '75001', 'Paris', {
  pays: 'FR',          // Défaut: 'FR'
  ligne2: 'Bâtiment A' // Optionnel
});
```

### adresseElectronique(identifiant, schemeId?)

Crée une adresse électronique (identifiant numérique).

```typescript
import { adresseElectronique } from '@factpulse/sdk/helpers';

// SIRET (schemeId="0225")
const adresse = adresseElectronique('12345678901234', '0225');

// SIREN (schemeId="0009", défaut)
const adresse = adresseElectronique('123456789');
```

### fournisseur(nom, siret, adresseLigne1, codePostal, ville, options?)

Crée un fournisseur complet avec calcul automatique du SIREN et TVA intra.

```typescript
import { fournisseur } from '@factpulse/sdk/helpers';

const f = fournisseur(
  'Ma Société SAS',
  '12345678901234',
  '123 Rue Example',
  '75001',
  'Paris',
  { iban: 'FR7630006000011234567890189' }
);
// SIREN et TVA intracommunautaire calculés automatiquement
```

### destinataire(nom, siret, adresseLigne1, codePostal, ville, options?)

Crée un destinataire (client) avec calcul automatique du SIREN.

```typescript
import { destinataire } from '@factpulse/sdk/helpers';

const d = destinataire(
  'Client SARL',
  '98765432109876',
  '456 Avenue Test',
  '69001',
  'Lyon'
);
```

## Mode Zero-Trust (Chorus Pro / AFNOR)

Pour passer vos propres credentials sans stockage côté serveur :

```typescript
import {
  FactPulseClient,
  ChorusProCredentials,
  AFNORCredentials,
} from '@factpulse/sdk/helpers';

const client = new FactPulseClient({
  email: 'votre_email@example.com',
  password: 'votre_mot_de_passe',
  chorusCredentials: {
    pisteClientId: 'votre_client_id',
    pisteClientSecret: 'votre_client_secret',
    chorusProLogin: 'votre_login',
    chorusProPassword: 'votre_password',
    sandbox: true,
  },
  afnorCredentials: {
    flowServiceUrl: 'https://api.pdp.fr/flow/v1',
    tokenUrl: 'https://auth.pdp.fr/oauth/token',
    clientId: 'votre_client_id',
    clientSecret: 'votre_client_secret',
  },
});
```

## Ressources

- **Documentation API** : https://factpulse.fr/api/facturation/documentation
- **Support** : contact@factpulse.fr

## Licence

MIT License - Copyright (c) 2025 FactPulse
