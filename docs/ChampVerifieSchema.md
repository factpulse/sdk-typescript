# ChampVerifieSchema

Un champ vérifié avec toutes ses informations (extraction + conformité + localisation).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_term** | **string** | Business Term EN16931 (ex: BT-1) | [default to undefined]
**label** | **string** | Libellé du champ (ex: N° Facture) | [default to undefined]
**valeur_pdf** | **string** |  | [optional] [default to undefined]
**valeur_xml** | **string** |  | [optional] [default to undefined]
**statut** | [**StatutChampAPI**](StatutChampAPI.md) | Statut de conformité | [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**confiance** | **number** | Score de confiance (0-1) | [optional] [default to 1.0]
**source** | **string** | Source d\&#39;extraction | [optional] [default to 'pdf_natif']
**bbox** | [**BoundingBoxSchema**](BoundingBoxSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChampVerifieSchema } from '@factpulse/sdk';

const instance: ChampVerifieSchema = {
    business_term,
    label,
    valeur_pdf,
    valeur_xml,
    statut,
    message,
    confiance,
    source,
    bbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
