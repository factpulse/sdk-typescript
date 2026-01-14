
# InvoicingFramework

Defines the invoicing framework.  - invoicing_framework_code: Chorus Pro code (A1, A2, A9, A12) - used for B2G - operation_nature: Operation nature (B1, S1, M1, etc.) - priority for Factur-X  If operation_nature is provided, it will be used directly in Factur-X XML (BT-23). Otherwise, the code will be derived from invoicing_framework_code via automatic mapping.  Example:     >>> framework = InvoicingFramework(     ...     invoicing_framework_code=InvoicingFrameworkCode.A1_SUPPLIER_INVOICE,     ...     operation_nature=OperationNature.GOODS  # Forces B1 instead of S1     ... )

## Properties

Name | Type
------------ | -------------
`invoicingFrameworkCode` | [InvoicingFrameworkCode](InvoicingFrameworkCode.md)
`operationNature` | [OperationNature](OperationNature.md)
`approverServiceCode` | string
`approverStructureCode` | string

## Example

```typescript
import type { InvoicingFramework } from ''

// TODO: Update the object below with actual values
const example = {
  "invoicingFrameworkCode": null,
  "operationNature": null,
  "approverServiceCode": null,
  "approverStructureCode": null,
} satisfies InvoicingFramework

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvoicingFramework
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


