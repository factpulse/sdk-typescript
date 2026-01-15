# AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingIdentifier** | **string** | Routing identifier od a routing code. | [optional] [default to undefined]
**routingIdentifierType** | **string** | Routing Identifier type. | [optional] [default to undefined]
**routingCodeName** | **string** | Name of the directory line routing code. This attribute is only returned if the directory line is defined at the SIREN / SIRET / Routing code mesh. | [optional] [default to undefined]
**managesLegalCommitment** | **boolean** | Indicates whether the public structure requires a legal commitment number. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]
**administrativeStatus** | [**AFNORRoutingCodeAdministrativeStatus**](AFNORRoutingCodeAdministrativeStatus.md) |  | [optional] [default to undefined]
**address** | [**AFNORAddressRead**](AFNORAddressRead.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode } from '@factpulse/sdk';

const instance: AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCodeRoutingCode = {
    routingIdentifier,
    routingIdentifierType,
    routingCodeName,
    managesLegalCommitment,
    administrativeStatus,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
