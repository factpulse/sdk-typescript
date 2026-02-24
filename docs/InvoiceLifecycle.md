# InvoiceLifecycle

Cycle de vie d\'une facture specifique.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerId** | **string** |  | [optional] [default to undefined]
**invoiceId** | **string** | Reference de la facture (IssuerAssignedID du CDAR) | [default to undefined]
**events** | [**Array&lt;LifecycleEvent&gt;**](LifecycleEvent.md) | Evenements de cycle de vie tries chronologiquement | [optional] [default to undefined]
**totalEvents** | **number** | Nombre total d\&#39;evenements | [default to undefined]

## Example

```typescript
import { InvoiceLifecycle } from '@factpulse/sdk';

const instance: InvoiceLifecycle = {
    sellerId,
    invoiceId,
    events,
    totalEvents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
