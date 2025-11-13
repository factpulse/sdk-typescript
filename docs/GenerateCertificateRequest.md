# GenerateCertificateRequest

Requête pour générer un certificat X.509 auto-signé de test.  ⚠️ ATTENTION : Ce certificat est destiné uniquement aux TESTS. NE PAS utiliser en production ! Niveau eIDAS : SES (Simple Electronic Signature)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cn** | **string** | Common Name (CN) - Nom du certificat | [optional] [default to 'Test Signature FactPulse']
**organisation** | **string** | Organisation (O) | [optional] [default to 'FactPulse Test']
**pays** | **string** | Code pays ISO 2 lettres (C) | [optional] [default to 'FR']
**ville** | **string** | Ville (L) | [optional] [default to 'Paris']
**province** | **string** | Province/État (ST) | [optional] [default to 'Ile-de-France']
**email** | **string** |  | [optional] [default to undefined]
**duree_jours** | **number** | Durée de validité en jours | [optional] [default to 365]
**taille_cle** | **number** | Taille de la clé RSA en bits | [optional] [default to 2048]
**passphrase_cle** | **string** |  | [optional] [default to undefined]
**generer_p12** | **boolean** | Générer aussi un fichier PKCS#12 (.p12) | [optional] [default to false]
**passphrase_p12** | **string** | Passphrase pour le fichier PKCS#12 | [optional] [default to 'changeme']

## Example

```typescript
import { GenerateCertificateRequest } from '@factpulse/sdk';

const instance: GenerateCertificateRequest = {
    cn,
    organisation,
    pays,
    ville,
    province,
    email,
    duree_jours,
    taille_cle,
    passphrase_cle,
    generer_p12,
    passphrase_p12,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
