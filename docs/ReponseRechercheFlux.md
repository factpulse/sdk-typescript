# ReponseRechercheFlux

Réponse d\'une recherche de flux

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Nombre total de résultats | [default to undefined]
**offset** | **number** | Décalage appliqué | [default to undefined]
**limit** | **number** | Limite de résultats | [default to undefined]
**resultats** | [**Array&lt;FluxResume&gt;**](FluxResume.md) | Liste des flux trouvés | [default to undefined]

## Example

```typescript
import { ReponseRechercheFlux } from '@factpulse/sdk';

const instance: ReponseRechercheFlux = {
    total,
    offset,
    limit,
    resultats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
