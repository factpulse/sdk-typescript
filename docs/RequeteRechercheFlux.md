# RequeteRechercheFlux

Requête pour rechercher des flux soumis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_maj_apres** | **string** |  | [optional] [default to undefined]
**date_maj_avant** | **string** |  | [optional] [default to undefined]
**type_flux** | [**Array&lt;TypeFlux&gt;**](TypeFlux.md) |  | [optional] [default to undefined]
**direction_flux** | [**Array&lt;DirectionFlux&gt;**](DirectionFlux.md) |  | [optional] [default to undefined]
**tracking_id** | **string** |  | [optional] [default to undefined]
**flow_id** | **string** |  | [optional] [default to undefined]
**statut_acquittement** | [**StatutAcquittement**](StatutAcquittement.md) |  | [optional] [default to undefined]
**offset** | **number** | Décalage pour la pagination | [optional] [default to 0]
**limit** | **number** | Nombre maximum de résultats (max 100) | [optional] [default to 25]

## Example

```typescript
import { RequeteRechercheFlux } from '@factpulse/sdk';

const instance: RequeteRechercheFlux = {
    date_maj_apres,
    date_maj_avant,
    type_flux,
    direction_flux,
    tracking_id,
    flow_id,
    statut_acquittement,
    offset,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
