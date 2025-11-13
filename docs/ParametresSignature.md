# ParametresSignature

Paramètres optionnels pour signer le PDF généré.  **MODE 1 - Certificat stocké (recommandé) :** Ne fournissez que les métadonnées (raison, localisation, etc.). Le certificat sera récupéré automatiquement via client_uid du JWT. Signature PAdES-B-LT conforme eIDAS.  **MODE 2 - Clés dans le payload (tests/cas spéciaux) :** Fournissez key_pem + cert_pem directement dans le payload. Format PEM accepté : brut (\"-----BEGIN...\") ou base64.  **Règle de sélection :** - Si key_pem ET cert_pem fournis → Mode 2 (clés payload) - Sinon → Mode 1 (certificat stocké récupéré via client_uid)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_pem** | **string** |  | [optional] [default to undefined]
**cert_pem** | **string** |  | [optional] [default to undefined]
**key_passphrase** | **string** |  | [optional] [default to undefined]
**raison** | **string** |  | [optional] [default to undefined]
**localisation** | **string** |  | [optional] [default to undefined]
**contact** | **string** |  | [optional] [default to undefined]
**field_name** | **string** | Nom du champ de signature PDF | [optional] [default to 'FactPulseSignature']
**use_pades_lt** | **boolean** | Activer PAdES-B-LT (archivage long terme). NÉCESSITE certificat avec accès OCSP/CRL | [optional] [default to false]
**use_timestamp** | **boolean** | Activer l\&#39;horodatage RFC 3161 avec FreeTSA (PAdES-B-T) | [optional] [default to true]

## Example

```typescript
import { ParametresSignature } from '@factpulse/sdk';

const instance: ParametresSignature = {
    key_pem,
    cert_pem,
    key_passphrase,
    raison,
    localisation,
    contact,
    field_name,
    use_pades_lt,
    use_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
