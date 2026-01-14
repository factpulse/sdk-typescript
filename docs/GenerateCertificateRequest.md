
# GenerateCertificateRequest

Request to generate a self-signed X.509 test certificate.  WARNING: This certificate is intended for TESTING only. DO NOT use in production! eIDAS level: SES (Simple Electronic Signature)

## Properties

Name | Type
------------ | -------------
`cn` | string
`organization` | string
`country` | string
`city` | string
`state` | string
`email` | string
`validityDays` | number
`keySize` | number
`keyPassphrase` | string
`generateP12` | boolean
`p12Passphrase` | string

## Example

```typescript
import type { GenerateCertificateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "cn": Test Signature Client XYZ,
  "organization": Client XYZ SARL,
  "country": FR,
  "city": Paris,
  "state": Ile-de-France,
  "email": null,
  "validityDays": 365,
  "keySize": 2048,
  "keyPassphrase": null,
  "generateP12": false,
  "p12Passphrase": changeme,
} satisfies GenerateCertificateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateCertificateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


