# RechercherServicesResponse

Liste des services d\'une structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_retour** | **number** |  | [default to undefined]
**libelle** | **string** |  | [default to undefined]
**liste_services** | [**Array&lt;ServiceStructure&gt;**](ServiceStructure.md) |  | [optional] [default to undefined]
**total** | **number** | Nombre de services | [optional] [default to 0]

## Example

```typescript
import { RechercherServicesResponse } from '@factpulse/sdk';

const instance: RechercherServicesResponse = {
    code_retour,
    libelle,
    liste_services,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
