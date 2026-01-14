# SignatureParameters

Optional parameters to sign the generated PDF.  **MODE 1 - Stored certificate (recommended):** Only provide metadata (reason, location, etc.). The certificate will be automatically retrieved via client_uid from JWT. eIDAS compliant PAdES-B-LT signature.  **MODE 2 - Keys in payload (tests/special cases):** Provide key_pem + cert_pem directly in the payload. Accepted PEM format: raw (\"-----BEGIN...\") or base64.  **Selection rule:** - If key_pem AND cert_pem provided → Mode 2 (payload keys) - Otherwise → Mode 1 (stored certificate retrieved via client_uid)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyPem** | **string** |  | [optional] [default to undefined]
**certPem** | **string** |  | [optional] [default to undefined]
**keyPassphrase** | **string** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**location** | **string** |  | [optional] [default to undefined]
**contact** | **string** |  | [optional] [default to undefined]
**fieldName** | **string** | PDF signature field name | [optional] [default to 'FactPulseSignature']
**usePadesLt** | **boolean** | Enable PAdES-B-LT (long-term archival). REQUIRES certificate with OCSP/CRL access | [optional] [default to false]
**useTimestamp** | **boolean** | Enable RFC 3161 timestamping with FreeTSA (PAdES-B-T) | [optional] [default to true]

## Example

```typescript
import { SignatureParameters } from '@factpulse/sdk';

const instance: SignatureParameters = {
    keyPem,
    certPem,
    keyPassphrase,
    reason,
    location,
    contact,
    fieldName,
    usePadesLt,
    useTimestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
