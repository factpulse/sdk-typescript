
# InvoiceLine

Represents an invoice line item (BG-25).

## Properties

Name | Type
------------ | -------------
`lineNumber` | number
`lineNote` | string
`parentLineId` | string
`lineSubType` | [LineSubType](LineSubType.md)
`reference` | string
`buyerAssignedId` | string
`productGlobalId` | string
`productGlobalIdScheme` | string
`itemName` | string
`itemDescription` | string
`originCountry` | string
`characteristics` | [Array&lt;ProductCharacteristic&gt;](ProductCharacteristic.md)
`classifications` | [Array&lt;ProductClassification&gt;](ProductClassification.md)
`quantity` | [Quantity](Quantity.md)
`unit` | [UnitOfMeasure](UnitOfMeasure.md)
`grossUnitPrice` | [GrossUnitPrice](GrossUnitPrice.md)
`unitNetPrice` | [UnitNetPrice](UnitNetPrice.md)
`priceBasisQuantity` | [PriceBasisQuantity](PriceBasisQuantity.md)
`priceBasisUnit` | string
`priceAllowanceAmount` | [PriceAllowanceAmount](PriceAllowanceAmount.md)
`lineNetAmount` | [LineNetAmount](LineNetAmount.md)
`allowanceAmount` | [InvoiceLineAllowanceAmount](InvoiceLineAllowanceAmount.md)
`allowanceReasonCode` | [AllowanceReasonCode](AllowanceReasonCode.md)
`allowanceReason` | string
`allowancesCharges` | [Array&lt;AllowanceCharge&gt;](AllowanceCharge.md)
`vatRate` | string
`manualVatRate` | [ManualVatRate](ManualVatRate.md)
`vatCategory` | [VATCategory](VATCategory.md)
`periodStartDate` | string
`periodEndDate` | string
`purchaseOrderLineRef` | string
`accountingAccount` | string
`additionalDocuments` | [Array&lt;AdditionalDocument&gt;](AdditionalDocument.md)
`lineNotes` | [Array&lt;InvoiceNote&gt;](InvoiceNote.md)

## Example

```typescript
import type { InvoiceLine } from ''

// TODO: Update the object below with actual values
const example = {
  "lineNumber": null,
  "lineNote": null,
  "parentLineId": null,
  "lineSubType": null,
  "reference": null,
  "buyerAssignedId": null,
  "productGlobalId": null,
  "productGlobalIdScheme": null,
  "itemName": null,
  "itemDescription": null,
  "originCountry": null,
  "characteristics": null,
  "classifications": null,
  "quantity": null,
  "unit": null,
  "grossUnitPrice": null,
  "unitNetPrice": null,
  "priceBasisQuantity": null,
  "priceBasisUnit": null,
  "priceAllowanceAmount": null,
  "lineNetAmount": null,
  "allowanceAmount": null,
  "allowanceReasonCode": null,
  "allowanceReason": null,
  "allowancesCharges": null,
  "vatRate": null,
  "manualVatRate": null,
  "vatCategory": null,
  "periodStartDate": null,
  "periodEndDate": null,
  "purchaseOrderLineRef": null,
  "accountingAccount": null,
  "additionalDocuments": null,
  "lineNotes": null,
} satisfies InvoiceLine

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoiceLine
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


