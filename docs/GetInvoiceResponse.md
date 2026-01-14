
# GetInvoiceResponse

Invoice details.

## Properties

Name | Type
------------ | -------------
`returnCode` | number
`message` | string
`chorusInvoiceId` | number
`invoiceNumber` | string
`invoiceDate` | string
`totalGrossAmount` | string
`currentStatus` | [InvoiceStatus](InvoiceStatus.md)
`recipientStructureId` | number
`recipientStructureName` | string

## Example

```typescript
import type { GetInvoiceResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "returnCode": null,
  "message": null,
  "chorusInvoiceId": null,
  "invoiceNumber": null,
  "invoiceDate": null,
  "totalGrossAmount": null,
  "currentStatus": null,
  "recipientStructureId": null,
  "recipientStructureName": null,
} satisfies GetInvoiceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetInvoiceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


