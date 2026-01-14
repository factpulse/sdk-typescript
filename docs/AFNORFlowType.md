
# AFNORFlowType

- `CustomerInvoice`: a non-self-billed outgoing invoice or a self-billed incoming invoice - `SupplierInvoice`: a non-self-billed incoming invoice or self-billed outgoing invoice - `StateInvoice`: an invoice Flow sent to DFH - `CustomerInvoiceLC`: a lifecycle (CDAR) related to a customer invoice - `SupplierInvoiceLC`: a lifecycle (CDAR) related to supplier invoice - `StateCustomerInvoiceLC`: a customer invoice LC sent to DFH - `StateSupplierInvoiceLC`: a supplier invoice LC sent to DFH - `AggregatedCustomerTransactionReport` : a transaction E-Reporting flow containing aggregated B2C sales (FRR 10.3) - `IndividualCustomerTransactionReport`: a transaction E-Reporting flow containing international B2B sales or a B2C transaction flow reported individually (FRR 10.1) - `AggregatedCustomerPaymentReport` : a E-Reporting of collections flow containing collections linked to B2C sales (FRR 10.4) - `UnitaryCustomerPaymentReport` : an E-Reporting of collections flow containing collections linked to unit international B2B sales or B2C sales (FRR 10.2) - `UnitarySupplierTransactionReport`: a transaction E-Reporting flow containing international B2B purchases (FRR 10.1) - `MultiFlowReport`: an E-Reporting flow which contains at least 2 different flow types (FRR 10) 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { AFNORFlowType } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies AFNORFlowType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORFlowType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


