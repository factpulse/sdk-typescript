# ReponseSoumissionFlux

Réponse après soumission d\'un flux

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_id** | **string** | Identifiant unique du flux généré par la PDP | [default to undefined]
**tracking_id** | **string** |  | [optional] [default to undefined]
**nom** | **string** | Nom du flux | [default to undefined]
**syntaxe_flux** | **string** | Syntaxe du flux (CII, UBL, etc.) | [default to undefined]
**profil_flux** | **string** |  | [optional] [default to undefined]
**sha256** | **string** | Hash SHA256 du fichier soumis | [default to undefined]
**message** | **string** | Message de confirmation | [default to undefined]

## Example

```typescript
import { ReponseSoumissionFlux } from '@factpulse/sdk';

const instance: ReponseSoumissionFlux = {
    flow_id,
    tracking_id,
    nom,
    syntaxe_flux,
    profil_flux,
    sha256,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
