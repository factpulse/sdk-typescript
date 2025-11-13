# CertificateInfoResponse

Informations sur un certificat généré.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cn** | **string** | Common Name | [default to undefined]
**organisation** | **string** | Organisation | [default to undefined]
**pays** | **string** | Code pays | [default to undefined]
**ville** | **string** | Ville | [default to undefined]
**province** | **string** | Province | [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**sujet** | **string** | Sujet complet (RFC4514) | [default to undefined]
**emetteur** | **string** | Émetteur (auto-signé &#x3D; même que sujet) | [default to undefined]
**numero_serie** | **number** | Numéro de série du certificat | [default to undefined]
**valide_du** | **string** | Date de début de validité (ISO 8601) | [default to undefined]
**valide_au** | **string** | Date de fin de validité (ISO 8601) | [default to undefined]
**algorithme** | **string** | Algorithme de signature | [default to undefined]

## Example

```typescript
import { CertificateInfoResponse } from '@factpulse/sdk';

const instance: CertificateInfoResponse = {
    cn,
    organisation,
    pays,
    ville,
    province,
    email,
    sujet,
    emetteur,
    numero_serie,
    valide_du,
    valide_au,
    algorithme,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
