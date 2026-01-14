
# CreateAggregatedReportRequest

Request to create a PPF-compliant aggregated e-reporting submission.  This schema allows creating a SINGLE report file containing multiple flux types, as expected by the PPF and PA platforms: - TransactionsReport: Contains both Invoice (10.1) and Transactions (10.3) - PaymentsReport: Contains both Invoice payments (10.2) and Transaction payments (10.4)  Source: Specifications externes v3.1, XSD ereporting.xsd

## Properties

Name | Type
------------ | -------------
`reportId` | string
`reportName` | string
`transmissionType` | [TransmissionTypeCode](TransmissionTypeCode.md)
`sender` | [ReportSender](ReportSender.md)
`period` | [ReportPeriod](ReportPeriod.md)
`invoices` | [Array&lt;InvoiceInput&gt;](InvoiceInput.md)
`transactions` | [Array&lt;AggregatedTransactionInput&gt;](AggregatedTransactionInput.md)
`invoicePayments` | [Array&lt;InvoicePaymentInput&gt;](InvoicePaymentInput.md)
`transactionPayments` | [Array&lt;AggregatedPaymentInput&gt;](AggregatedPaymentInput.md)

## Example

```typescript
import type { CreateAggregatedReportRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "reportId": EREPORT-2025-001,
  "reportName": null,
  "transmissionType": null,
  "sender": null,
  "period": null,
  "invoices": null,
  "transactions": null,
  "invoicePayments": null,
  "transactionPayments": null,
} satisfies CreateAggregatedReportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAggregatedReportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


