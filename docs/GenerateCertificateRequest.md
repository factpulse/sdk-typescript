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
**validity_days** | **number** | Validity duration in days | [optional] [default to 365]
**key_size** | **number** | RSA key size in bits | [optional] [default to 2048]
**key_passphrase** | **string** |  | [optional] [default to undefined]
**generate_p12** | **boolean** | Also generate a PKCS#12 (.p12) file | [optional] [default to false]
**p12_passphrase** | **string** | Passphrase for PKCS#12 file | [optional] [default to 'changeme']

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
    validity_days,
    key_size,
    key_passphrase,
    generate_p12,
    p12_passphrase,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
