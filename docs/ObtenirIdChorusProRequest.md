# ObtenirIdChorusProRequest

Obtenir l\'ID Chorus Pro depuis un SIRET.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ChorusProCredentials**](ChorusProCredentials.md) |  | [optional] [default to undefined]
**siret** | **string** | SIRET de la structure (14 chiffres) | [default to undefined]
**type_identifiant** | **string** | Type d\&#39;identifiant (SIRET, SIREN, UE_HORS_FRANCE, etc.) | [optional] [default to 'SIRET']

## Example

```typescript
import { ObtenirIdChorusProRequest } from '@factpulse/sdk';

const instance: ObtenirIdChorusProRequest = {
    credentials,
    siret,
    type_identifiant,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
