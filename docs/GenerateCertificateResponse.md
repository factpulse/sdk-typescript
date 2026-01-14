
# GenerateCertificateResponse

Response after generating a test certificate.  Contains certificate PEM, private key PEM, and optionally PKCS#12.

## Properties

Name | Type
------------ | -------------
`status` | string
`certificatePem` | string
`privateKeyPem` | string
`pkcs12Base64` | string
`info` | [CertificateInfoResponse](CertificateInfoResponse.md)
`warning` | string

## Example

```typescript
import type { GenerateCertificateResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "status": success,
  "certificatePem": -----BEGIN CERTIFICATE-----
MIID...
-----END CERTIFICATE-----,
  "privateKeyPem": -----BEGIN PRIVATE KEY-----
MIIE...
-----END PRIVATE KEY-----,
  "pkcs12Base64": null,
  "info": null,
  "warning": null,
} satisfies GenerateCertificateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateCertificateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


