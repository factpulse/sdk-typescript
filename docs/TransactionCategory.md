
# TransactionCategory

Transaction category codes (TT-81 CategoryCode).  Source: Annexe 6 - Format sémantique FE e-reporting v1.9 Onglet: E-REPORTING - Flux 10, ligne 127 Path XML: /TransactionsReport/Transactions/CategoryCode Longueur: 10 caractères max Cardinalité: 1..1 (obligatoire pour flux 10.3) Règle de gestion: G1.68  Note: Legacy aliases (B2C, B2B_INT, EXEMPT) were removed to fix OpenAPI generator issues. Use LEGACY_CATEGORY_MAPPING for backward compatibility.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { TransactionCategory } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies TransactionCategory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionCategory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


