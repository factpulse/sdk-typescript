# RechercherStructureRequest

Recherche de structures par critères.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ChorusProCredentials**](ChorusProCredentials.md) |  | [optional] [default to undefined]
**identifiant_structure** | **string** |  | [optional] [default to undefined]
**type_identifiant_structure** | **string** |  | [optional] [default to undefined]
**raison_sociale_structure** | **string** |  | [optional] [default to undefined]
**restreindre_structures_privees** | **boolean** | Limiter la recherche aux structures privées uniquement | [optional] [default to false]

## Example

```typescript
import { RechercherStructureRequest } from '@factpulse/sdk';

const instance: RechercherStructureRequest = {
    credentials,
    identifiant_structure,
    type_identifiant_structure,
    raison_sociale_structure,
    restreindre_structures_privees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
