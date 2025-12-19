# CertificateInfoResponse

Information about a generated certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cn** | **string** | Common Name | [default to undefined]
**organization** | **string** | Organization | [default to undefined]
**country** | **string** | Country code | [default to undefined]
**city** | **string** | City | [default to undefined]
**state** | **string** | State/Province | [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**subject** | **string** | Full subject (RFC4514) | [default to undefined]
**issuer** | **string** | Issuer (self-signed &#x3D; same as subject) | [default to undefined]
**serialNumber** | **number** | Certificate serial number | [default to undefined]
**validFrom** | **string** | Validity start date (ISO 8601) | [default to undefined]
**validTo** | **string** | Validity end date (ISO 8601) | [default to undefined]
**algorithm** | **string** | Signature algorithm | [default to undefined]

## Example

```typescript
import { CertificateInfoResponse } from '@factpulse/sdk';

const instance: CertificateInfoResponse = {
    cn,
    organization,
    country,
    city,
    state,
    email,
    subject,
    issuer,
    serialNumber,
    validFrom,
    validTo,
    algorithm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
