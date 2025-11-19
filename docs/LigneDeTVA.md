# LigneDeTVA

Représente une ligne de totalisation par taux de TVA.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**montantBaseHt** | **string** | Montant de la base HT pour cette ligne de TVA. | [default to undefined]
**montantTva** | **string** | Montant de la TVA pour cette ligne. | [default to undefined]
**taux** | **string** |  | [optional] [default to undefined]
**tauxManuel** | **string** | Taux de TVA avec valeur manuelle. | [optional] [default to undefined]
**categorie** | [**CategorieTVA**](CategorieTVA.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LigneDeTVA } from '@factpulse/sdk';

const instance: LigneDeTVA = {
    montantBaseHt,
    montantTva,
    taux,
    tauxManuel,
    categorie,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
