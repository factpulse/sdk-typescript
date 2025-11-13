# GenerateCertificateResponse

Réponse après génération d\'un certificat de test.  Contient le certificat PEM, la clé privée PEM, et optionnellement le PKCS#12.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Statut de l\&#39;opération | [optional] [default to 'success']
**certificat_pem** | **string** | Certificat X.509 au format PEM | [default to undefined]
**cle_privee_pem** | **string** | Clé privée RSA au format PEM | [default to undefined]
**pkcs12_base64** | **string** |  | [optional] [default to undefined]
**info** | [**CertificateInfoResponse**](CertificateInfoResponse.md) | Informations sur le certificat généré | [default to undefined]
**avertissement** | **string** | Avertissement sur l\&#39;utilisation du certificat | [optional] [default to '⚠️ Ce certificat est AUTO-SIGNÉ et destiné uniquement aux TESTS. Ne PAS utiliser en production. Niveau eIDAS : SES (Simple Electronic Signature)']

## Example

```typescript
import { GenerateCertificateResponse } from '@factpulse/sdk';

const instance: GenerateCertificateResponse = {
    status,
    certificat_pem,
    cle_privee_pem,
    pkcs12_base64,
    info,
    avertissement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
