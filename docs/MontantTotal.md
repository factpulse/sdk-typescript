# MontantTotal

Contient tous les montants totaux de la facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**montantHtTotal** | [**Montanthttotal**](Montanthttotal.md) |  | [default to undefined]
**montantTva** | [**Montanttva1**](Montanttva1.md) |  | [default to undefined]
**montantTtcTotal** | [**Montantttctotal**](Montantttctotal.md) |  | [default to undefined]
**montantAPayer** | [**Montantapayer**](Montantapayer.md) |  | [default to undefined]
**acompte** | [**MontantTotalAcompte**](MontantTotalAcompte.md) |  | [optional] [default to undefined]
**montantRemiseGlobaleTtc** | [**MontantTotalMontantRemiseGlobaleTtc**](MontantTotalMontantRemiseGlobaleTtc.md) |  | [optional] [default to undefined]
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
