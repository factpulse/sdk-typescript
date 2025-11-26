# MontantTotal

Contient tous les montants totaux de la facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**montantHtTotal** | [**MontantHtTotal**](MontantHtTotal.md) |  | [default to undefined]
**montantTva** | [**MontantTvaTotal**](MontantTvaTotal.md) |  | [default to undefined]
**montantTtcTotal** | [**MontantTtcTotal**](MontantTtcTotal.md) |  | [default to undefined]
**montantAPayer** | [**MontantAPayer**](MontantAPayer.md) |  | [default to undefined]
**acompte** | [**MontantTotalAcompte**](MontantTotalAcompte.md) |  | [optional] [default to undefined]
**montantRemiseGlobaleTtc** | [**MontantRemiseGlobaleTtc**](MontantRemiseGlobaleTtc.md) |  | [optional] [default to undefined]
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
