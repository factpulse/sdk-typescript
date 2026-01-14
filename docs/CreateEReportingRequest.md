
# CreateEReportingRequest

Request to create an e-reporting submission.  Supports all four flux types: - 10.1: B2B international invoices (use `invoices` field) - 10.2: B2B international payments (use `invoicePayments` field) - 10.3: B2C aggregated transactions (use `transactions` field) - 10.4: B2C aggregated payments (use `aggregatedPayments` field)

## Properties

Name | Type
------------ | -------------
`reportId` | string
`reportName` | string
`flowType` | [EReportingFlowType](EReportingFlowType.md)
`transmissionType` | [TransmissionTypeCode](TransmissionTypeCode.md)
`sender` | [ReportSender](ReportSender.md)
`period` | [ReportPeriod](ReportPeriod.md)
`invoices` | [Array&lt;InvoiceInput&gt;](InvoiceInput.md)
`transactions` | [Array&lt;AggregatedTransactionInput&gt;](AggregatedTransactionInput.md)
`invoicePayments` | [Array&lt;InvoicePaymentInput&gt;](InvoicePaymentInput.md)
`aggregatedPayments` | [Array&lt;AggregatedPaymentInput&gt;](AggregatedPaymentInput.md)

## Example

```typescript
import type { CreateEReportingRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "reportId": EREPORT-2025-001,
  "reportName": null,
  "flowType": null,
  "transmissionType": null,
  "sender": null,
  "period": null,
  "invoices": null,
  "transactions": null,
  "invoicePayments": null,
  "aggregatedPayments": null,
} satisfies CreateEReportingRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateEReportingRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


