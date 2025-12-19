# GenerateCertificateResponse

Response after generating a test certificate.  Contains certificate PEM, private key PEM, and optionally PKCS#12.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Operation status | [optional] [default to 'success']
**certificatePem** | **string** | X.509 certificate in PEM format | [default to undefined]
**privateKeyPem** | **string** | RSA private key in PEM format | [default to undefined]
**pkcs12Base64** | **string** |  | [optional] [default to undefined]
**info** | [**CertificateInfoResponse**](CertificateInfoResponse.md) | Generated certificate information | [default to undefined]
**warning** | **string** | Warning about certificate usage | [optional] [default to 'WARNING: This certificate is SELF-SIGNED and intended for TESTING only. DO NOT use in production. eIDAS level: SES (Simple Electronic Signature)']

## Example

```typescript
import { GenerateCertificateResponse } from '@factpulse/sdk';

const instance: GenerateCertificateResponse = {
    status,
    certificatePem,
    privateKeyPem,
    pkcs12Base64,
    info,
    warning,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
