# AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressingIdentifier** | **string** | Addressing identifier of the directory line. | [optional] [default to undefined]
**siren** | **string** | SIREN number | [optional] [default to undefined]
**siret** | **string** | SIRET Number | [optional] [default to undefined]
**addressingSuffix** | **string** | suffix of the directory line which defines an address mesh not attached to a facility | [optional] [default to undefined]
**routingCode** | [**AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode**](AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode.md) |  | [optional] [default to undefined]
**platform** | [**AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodePlatform**](AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodePlatform.md) |  | [optional] [default to undefined]
**legalUnit** | [**AFNORLegalUnitPayloadIncludedNoSiren**](AFNORLegalUnitPayloadIncludedNoSiren.md) |  | [optional] [default to undefined]
**facility** | [**AFNORFacilityPayloadIncluded**](AFNORFacilityPayloadIncluded.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode } from '@factpulse/sdk';

const instance: AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode = {
    addressingIdentifier,
    siren,
    siret,
    addressingSuffix,
    routingCode,
    platform,
    legalUnit,
    facility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
