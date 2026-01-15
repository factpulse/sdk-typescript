# AFNORFacilityPayloadHistoryUleB2gAdditionalData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pm** | **boolean** | Indicates whether the public structure acts as project manager for work invoices in addition to receiving simple invoices. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]
**pmOnly** | **boolean** | Indicates whether the public structure only acts as a project manager; if so, it can only receive invoices for work. This attribute is only returned if the directory line is defined for a public structure at the SIREN/SIRET or SIREN/SIRET/Routing code level. | [optional] [default to undefined]
**managesPaymentStatus** | **boolean** | Indicates whether the public structure manages the payment status of invoices. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]
**managesLegalCommitmentCode** | **boolean** | Indicates whether the public structure requires a legal commitment number. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]
**managesLegalCommitmentOrServiceCode** | **boolean** | Indicates whether the public structure requires a service code or a commitment code in its exchanges. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]
**serviceCodeStatus** | **boolean** | Indicates whether the structure requires a service code. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]

## Example

```typescript
import { AFNORFacilityPayloadHistoryUleB2gAdditionalData } from '@factpulse/sdk';

const instance: AFNORFacilityPayloadHistoryUleB2gAdditionalData = {
    pm,
    pmOnly,
    managesPaymentStatus,
    managesLegalCommitmentCode,
    managesLegalCommitmentOrServiceCode,
    serviceCodeStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
