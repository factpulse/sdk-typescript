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
**montantRemiseHt** | [**LigneDePosteMontantRemiseHt**](LigneDePosteMontantRemiseHt.md) |  | [optional] [default to undefined]
**montantTotalLigneHt** | [**MontantTotalLigneHt**](MontantTotalLigneHt.md) |  | [optional] [default to undefined]
**tauxTva** | **string** |  | [optional] [default to undefined]
**tauxTvaManuel** | [**LigneDePosteTauxTvaManuel**](LigneDePosteTauxTvaManuel.md) |  | [optional] [default to undefined]
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
