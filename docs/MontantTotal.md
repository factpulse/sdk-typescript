# MontantTotal

Contient tous les montants totaux de la facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**montantHtTotal** | **string** | Montant total HT. | [default to undefined]
**montantTva** | **string** | Montant total de la TVA. | [default to undefined]
**montantTtcTotal** | **string** | Montant total TTC. | [default to undefined]
**montantAPayer** | **string** | Montant à payer. | [default to undefined]
**acompte** | **string** | Acompte versé. | [optional] [default to undefined]
**montantRemiseGlobaleTtc** | **string** | Montant de la remise globale TTC. | [optional] [default to undefined]
**motifRemiseGlobaleTtc** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { MontantTotal } from '@factpulse/sdk';

const instance: MontantTotal = {
    montantHtTotal,
    montantTva,
    montantTtcTotal,
    montantAPayer,
    acompte,
    montantRemiseGlobaleTtc,
    motifRemiseGlobaleTtc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
