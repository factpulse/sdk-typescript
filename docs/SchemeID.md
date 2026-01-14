
# SchemeID

Identification scheme codes (Electronic Address Scheme - EAS), mainly for electronic invoice addressing.  **Possible values:** - `0225`: FR_SIREN - French SIREN (most common for France) - `0009`: FR_SIRET - French SIRET - `0002`: FR_SIREN_OLD - French SIREN (old code, for legal organization ID) - `0088`: GLN - Global Location Number - `0060`: DUNS - Data Universal Numbering System - `9957`: FR_VAT_INTRA - French intra-community VAT number - `0199`: GLEIF - Global Legal Entity Identifier Foundation - `0231`: DT_DIRECTORY_ID - Directory ID for tax administration - `EM`: EMAIL - Email-based electronic address (BT-34/BT-49)

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { SchemeID } from ''

// TODO: Update the object below with actual values
const example = {
} satisfies SchemeID

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchemeID
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


