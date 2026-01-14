
# SignatureParameters

Optional parameters to sign the generated PDF.  **MODE 1 - Stored certificate (recommended):** Only provide metadata (reason, location, etc.). The certificate will be automatically retrieved via client_uid from JWT. eIDAS compliant PAdES-B-LT signature.  **MODE 2 - Keys in payload (tests/special cases):** Provide key_pem + cert_pem directly in the payload. Accepted PEM format: raw (\"-----BEGIN...\") or base64.  **Selection rule:** - If key_pem AND cert_pem provided → Mode 2 (payload keys) - Otherwise → Mode 1 (stored certificate retrieved via client_uid)

## Properties

Name | Type
------------ | -------------
`keyPem` | string
`certPem` | string
`keyPassphrase` | string
`reason` | string
`location` | string
`contact` | string
`fieldName` | string
`usePadesLt` | boolean
`useTimestamp` | boolean

## Example

```typescript
import type { SignatureParameters } from ''

// TODO: Update the object below with actual values
const example = {
  "keyPem": null,
  "certPem": null,
  "keyPassphrase": null,
  "reason": null,
  "location": null,
  "contact": null,
  "fieldName": null,
  "usePadesLt": null,
  "useTimestamp": null,
} satisfies SignatureParameters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SignatureParameters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


