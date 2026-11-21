# EncaisseAmountByRate

Montant encaissé TTC pour un taux de TVA (un bloc MEN, MDG-43).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **number** | Taux de TVA applicable au montant encaissé, en % (MDT-224) | [default to undefined]
**amount** | [**Amount1**](Amount1.md) |  | [default to undefined]

## Example

```typescript
import { EncaisseAmountByRate } from '@factpulse/sdk';

const instance: EncaisseAmountByRate = {
    rate,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
