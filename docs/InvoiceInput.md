# InvoiceInput

Invoice for B2B international reporting (flux 10.1).  Used for unitary declaration of international B2B invoices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceId** | **string** | Invoice identifier | [default to undefined]
**issueDate** | **string** | Invoice issue date | [default to undefined]
**typeCode** | [**FactureElectroniqueRestApiSchemasEreportingInvoiceTypeCode**](FactureElectroniqueRestApiSchemasEreportingInvoiceTypeCode.md) | Invoice type code | [optional] [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**sellerSiren** | **string** | Seller SIREN/SIRET | [default to undefined]
**sellerVatId** | **string** |  | [optional] [default to undefined]
**sellerCountry** | [**Sellercountry**](Sellercountry.md) |  | [optional] [default to undefined]
**buyerId** | **string** |  | [optional] [default to undefined]
**buyerVatId** | **string** |  | [optional] [default to undefined]
**buyerCountry** | [**Buyercountry**](Buyercountry.md) |  | [default to undefined]
**taxExclusiveAmount** | [**Taxexclusiveamount1**](Taxexclusiveamount1.md) |  | [default to undefined]
**taxAmount** | [**Taxamount1**](Taxamount1.md) |  | [default to undefined]
**taxBreakdown** | [**Array&lt;TaxBreakdownInput&gt;**](TaxBreakdownInput.md) | VAT breakdown | [default to undefined]
**referencedInvoiceId** | **string** |  | [optional] [default to undefined]
**referencedInvoiceDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceInput } from '@factpulse/sdk';

const instance: InvoiceInput = {
    invoiceId,
    issueDate,
    typeCode,
    currency,
    dueDate,
    sellerSiren,
    sellerVatId,
    sellerCountry,
    buyerId,
    buyerVatId,
    buyerCountry,
    taxExclusiveAmount,
    taxAmount,
    taxBreakdown,
    referencedInvoiceId,
    referencedInvoiceDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
