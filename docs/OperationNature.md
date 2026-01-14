
# OperationNature

Operation nature (BT-23) for Factur-X - French Reform.  BR-FR-08: The invoicing framework must be one of the following codes. First letter indicates: B = Goods, S = Services, M = Mixed.  Ref: XP Z12-012, article_conformite_pdf_facturx.md  Example:     >>> framework = InvoicingFramework(     ...     invoicing_framework_code=InvoicingFrameworkCode.A1_SUPPLIER_INVOICE,     ...     operation_nature=OperationNature.GOODS     ... )

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { OperationNature } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies OperationNature

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OperationNature
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


