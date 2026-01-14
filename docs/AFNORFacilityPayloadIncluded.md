# AFNORFacilityPayloadIncluded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siret** | **string** | SIRET Number | [optional] [default to undefined]
**siren** | **string** | SIREN number | [optional] [default to undefined]
**name** | **string** | business name | [optional] [default to undefined]
**facilityType** | [**AFNORFacilityType**](AFNORFacilityType.md) |  | [optional] [default to undefined]
**diffusible** | [**AFNORDiffusionStatus**](AFNORDiffusionStatus.md) |  | [optional] [default to undefined]
**administrativeStatus** | [**AFNORFacilityAdministrativeStatus**](AFNORFacilityAdministrativeStatus.md) |  | [optional] [default to undefined]
**address** | [**AFNORAddressRead**](AFNORAddressRead.md) |  | [optional] [default to undefined]
**b2gAdditionalData** | [**AFNORFacilityPayloadHistoryUleB2gAdditionalData**](AFNORFacilityPayloadHistoryUleB2gAdditionalData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORFacilityPayloadIncluded } from '@factpulse/sdk';

const instance: AFNORFacilityPayloadIncluded = {
    siret,
    siren,
    name,
    facilityType,
    diffusible,
    administrativeStatus,
    address,
    b2gAdditionalData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
