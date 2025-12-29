# GenerateCertificateRequest

Request to generate a self-signed X.509 test certificate.  WARNING: This certificate is intended for TESTING only. DO NOT use in production! eIDAS level: SES (Simple Electronic Signature)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cn** | **string** | Common Name (CN) - Certificate name | [optional] [default to 'Test Signature FactPulse']
**organization** | **string** | Organization (O) | [optional] [default to 'FactPulse Test']
**country** | **string** | ISO 2-letter country code (C) | [optional] [default to 'FR']
**city** | **string** | City (L) | [optional] [default to 'Paris']
**state** | **string** | State/Province (ST) | [optional] [default to 'Ile-de-France']
**email** | **string** |  | [optional] [default to undefined]
**validityDays** | **number** | Validity duration in days | [optional] [default to 365]
**keySize** | **number** | RSA key size in bits | [optional] [default to 2048]
**keyPassphrase** | **string** |  | [optional] [default to undefined]
**generateP12** | **boolean** | Also generate a PKCS#12 (.p12) file | [optional] [default to false]
**p12Passphrase** | **string** | Passphrase for PKCS#12 file | [optional] [default to 'changeme']

## Example

```typescript
import { GenerateCertificateRequest } from '@factpulse/sdk';

const instance: GenerateCertificateRequest = {
    cn,
    organization,
    country,
    city,
    state,
    email,
    validityDays,
    keySize,
    keyPassphrase,
    generateP12,
    p12Passphrase,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
