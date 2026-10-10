# AFNORDirectoryLinePayloadLegalUnitFacilityRoutingCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressingIdentifier** | **string** | Addressing identifier of the directory line. | [optional] [default to undefined]
**platformType** | [**AFNORRecipientPlatformType**](AFNORRecipientPlatformType.md) |  | [optional] [default to undefined]
**directoryLineStatus** | [**AFNORUniqueDirectoryLineStatus**](AFNORUniqueDirectoryLineStatus.md) |  | [optional] [default to undefined]
**siren** | **string** | SIREN number | [optional] [default to undefined]
**siret** | **string** | SIRET Number | [optional] [default to undefined]
**routingIdentifier** | **string** | Routing identifier od a routing code. | [optional] [default to undefined]
**addressingSuffix** | **string** | suffix of the directory line which defines an address mesh not attached to a facility | [optional] [default to undefined]
**routingCode** | [**AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode**](AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode.md) |  | [optional] [default to undefined]
**legalUnit** | [**AFNORLegalUnitPayloadIncluded**](AFNORLegalUnitPayloadIncluded.md) |  | [optional] [default to undefined]
**facility** | [**AFNORFacilityPayloadIncluded**](AFNORFacilityPayloadIncluded.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORDirectoryLinePayloadLegalUnitFacilityRoutingCode } from '@factpulse/sdk';

const instance: AFNORDirectoryLinePayloadLegalUnitFacilityRoutingCode = {
    addressingIdentifier,
    platformType,
    directoryLineStatus,
    siren,
    siret,
    routingIdentifier,
    addressingSuffix,
    routingCode,
    legalUnit,
    facility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
