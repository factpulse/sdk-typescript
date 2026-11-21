# LifecycleResponse

Reponse des cycles de vie, groupes par facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoices** | [**Array&lt;InvoiceLifecycle&gt;**](InvoiceLifecycle.md) | Cycles de vie par facture | [optional] [default to undefined]
**totalInvoices** | **number** | Nombre de factures | [default to undefined]
**cutoffDays** | **number** | Nombre de jours de la fenetre de recherche | [default to undefined]
**totalFlows** | **number** | Nombre de flux de statut (CDAR) lus sur la PA | [optional] [default to 0]
**truncated** | **boolean** | True si la limite de flux lus par appel a ete atteinte : la reponse est incomplete, reduire la fenetre (dateFrom/dateTo ou days) | [optional] [default to false]
**dateFrom** | **string** |  | [optional] [default to undefined]
**dateTo** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LifecycleResponse } from '@factpulse/sdk';

const instance: LifecycleResponse = {
    invoices,
    totalInvoices,
    cutoffDays,
    totalFlows,
    truncated,
    dateFrom,
    dateTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
