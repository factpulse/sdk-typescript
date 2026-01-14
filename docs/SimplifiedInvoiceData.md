
# SimplifiedInvoiceData

Simplified invoice data (minimal format for auto-enrichment).

## Properties

Name | Type
------------ | -------------
`number` | string
`supplier` | { [key: string]: any; }
`recipient` | { [key: string]: any; }
`lines` | Array&lt;{ [key: string]: any; }&gt;
`date` | string
`dueDays` | number
`comment` | string
`purchaseOrderReference` | string
`contractReference` | string
`invoiceType` | [FactureElectroniqueModelsInvoiceTypeCode](FactureElectroniqueModelsInvoiceTypeCode.md)
`precedingInvoiceReference` | string
`operationNature` | [OperationNature](OperationNature.md)
`invoicingFramework` | [InvoicingFrameworkCode](InvoicingFrameworkCode.md)

## Example

```typescript
import type { SimplifiedInvoiceData } from ''

// TODO: Update the object below with actual values
const example = {
  "number": null,
  "supplier": null,
  "recipient": null,
  "lines": null,
  "date": null,
  "dueDays": null,
  "comment": null,
  "purchaseOrderReference": null,
  "contractReference": null,
  "invoiceType": null,
  "precedingInvoiceReference": null,
  "operationNature": null,
  "invoicingFramework": null,
} satisfies SimplifiedInvoiceData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SimplifiedInvoiceData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


