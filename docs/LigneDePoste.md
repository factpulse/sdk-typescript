# LigneDePoste

Représente une ligne de détail dans une facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numero** | **number** |  | [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**denomination** | **string** |  | [default to undefined]
**quantite** | [**Quantite**](Quantite.md) |  | [default to undefined]
**unite** | [**Unite**](Unite.md) |  | [default to undefined]
**montantUnitaireHt** | [**MontantUnitaireHt**](MontantUnitaireHt.md) |  | [default to undefined]
**montantRemiseHt** | **string** | Montant de la remise HT. | [optional] [default to undefined]
**montantTotalLigneHt** | **string** | Montant total HT de la ligne (quantité × prix unitaire - remise). | [optional] [default to undefined]
**tauxTva** | **string** |  | [optional] [default to undefined]
**tauxTvaManuel** | **string** | Taux de TVA avec valeur manuelle. | [optional] [default to undefined]
**categorieTva** | [**CategorieTVA**](CategorieTVA.md) |  | [optional] [default to undefined]
**dateDebutPeriode** | **string** |  | [optional] [default to undefined]
**dateFinPeriode** | **string** |  | [optional] [default to undefined]
**codeRaisonReduction** | [**CodeRaisonReduction**](CodeRaisonReduction.md) |  | [optional] [default to undefined]
**raisonReduction** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LigneDePoste } from '@factpulse/sdk';

const instance: LigneDePoste = {
    numero,
    reference,
    denomination,
    quantite,
    unite,
    montantUnitaireHt,
    montantRemiseHt,
    montantTotalLigneHt,
    tauxTva,
    tauxTvaManuel,
    categorieTva,
    dateDebutPeriode,
    dateFinPeriode,
    codeRaisonReduction,
    raisonReduction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
