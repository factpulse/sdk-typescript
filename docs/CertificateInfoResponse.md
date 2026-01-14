
# CertificateInfoResponse

Information about a generated certificate.

## Properties

Name | Type
------------ | -------------
`cn` | string
`organization` | string
`country` | string
`city` | string
`state` | string
`email` | string
`subject` | string
`issuer` | string
`serialNumber` | number
`validFrom` | string
`validTo` | string
`algorithm` | string

## Example

```typescript
import type { CertificateInfoResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "cn": Test Signature Client XYZ,
  "organization": Client XYZ SARL,
  "country": FR,
  "city": Lyon,
  "state": Rhone-Alpes,
  "email": null,
  "subject": CN=Test Signature Client XYZ,O=Client XYZ SARL,L=Lyon,ST=Rhone-Alpes,C=FR,
  "issuer": CN=Test Signature Client XYZ,O=Client XYZ SARL,L=Lyon,ST=Rhone-Alpes,C=FR,
  "serialNumber": 123456789,
  "validFrom": 2025-01-07T12:00:00+00:00,
  "validTo": 2026-01-07T12:00:00+00:00,
  "algorithm": sha256WithRSAEncryption,
} satisfies CertificateInfoResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CertificateInfoResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


