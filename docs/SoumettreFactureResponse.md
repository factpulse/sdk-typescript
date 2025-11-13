# SoumettreFactureResponse

Réponse après soumission de facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_retour** | **number** | Code retour (0 &#x3D; succès) | [default to undefined]
**libelle** | **string** | Message de retour | [default to undefined]
**identifiant_facture_cpp** | **number** |  | [optional] [default to undefined]
**numero_flux_depot** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SoumettreFactureResponse } from '@factpulse/sdk';

const instance: SoumettreFactureResponse = {
    code_retour,
    libelle,
    identifiant_facture_cpp,
    numero_flux_depot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
