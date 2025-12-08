# LigneDeTVA

Représente une ligne de totalisation par taux de TVA.  Pour les exonérations (catégories E, AE, K, G, O), les champs `motif_exoneration` et `code_vatex` sont requis selon EN16931.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**montantBaseHt** | [**MontantBaseHt**](MontantBaseHt.md) |  | [default to undefined]
**montantTva** | [**MontantTvaLigne**](MontantTvaLigne.md) |  | [default to undefined]
**taux** | **string** |  | [optional] [default to undefined]
**tauxManuel** | [**Tauxmanuel**](Tauxmanuel.md) |  | [optional] [default to undefined]
**categorie** | [**CategorieTVA**](CategorieTVA.md) |  | [optional] [default to undefined]
**motifExoneration** | **string** |  | [optional] [default to undefined]
**codeVatex** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LigneDeTVA } from '@factpulse/sdk';

const instance: LigneDeTVA = {
    montantBaseHt,
    montantTva,
    taux,
    tauxManuel,
    categorie,
    motifExoneration,
    codeVatex,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
