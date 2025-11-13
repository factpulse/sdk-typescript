# RechercherStructureResponse

Réponse de recherche de structures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_retour** | **number** | Code retour (0 &#x3D; succès) | [default to undefined]
**libelle** | **string** | Message de retour | [default to undefined]
**liste_structures** | [**Array&lt;StructureInfo&gt;**](StructureInfo.md) |  | [optional] [default to undefined]
**total** | **number** | Nombre total de résultats | [optional] [default to 0]

## Example

```typescript
import { RechercherStructureResponse } from '@factpulse/sdk';

const instance: RechercherStructureResponse = {
    code_retour,
    libelle,
    liste_structures,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
