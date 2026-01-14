
# VATCategory

Standardized VAT categories for Factur-X (EN 16931 standard).  **Possible values:** - `S`: STANDARD - Standard VAT rate - `Z`: ZERO - Zero VAT rate - `E`: EXEMPT - VAT exemption - `AE`: REVERSE_CHARGE - Reverse charge (auto-liquidation) - `K`: INTRA_COMMUNITY - Intra-community supply - `G`: EXPORT - Export outside EU - `O`: OUT_OF_SCOPE - Outside VAT scope - `L`: CANARY_ISLANDS - Canary Islands VAT - `M`: CEUTA_MELILLA - Ceuta/Melilla VAT

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { VATCategory } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies VATCategory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VATCategory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


