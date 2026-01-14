# AFNORRoutingCodePayloadHistoryLegalUnitFacility


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingIdentifier** | **string** | Routing identifier od a routing code. | [optional] [default to undefined]
**siret** | **string** | SIRET Number | [optional] [default to undefined]
**routingIdentifierType** | **string** | Routing Identifier type. | [optional] [default to undefined]
**routingCodeName** | **string** | Name of the directory line routing code. This attribute is only returned if the directory line is defined at the SIREN / SIRET / Routing code mesh. | [optional] [default to undefined]
**managesLegalCommitmentCode** | **boolean** | Indicates whether the public structure requires a legal commitment number. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]
**administrativeStatus** | [**AFNORRoutingCodeAdministrativeStatus**](AFNORRoutingCodeAdministrativeStatus.md) |  | [optional] [default to undefined]
**address** | [**AFNORAddressRead**](AFNORAddressRead.md) |  | [optional] [default to undefined]
**legalUnit** | [**AFNORLegalUnitPayloadIncluded**](AFNORLegalUnitPayloadIncluded.md) |  | [optional] [default to undefined]
**facility** | [**AFNORFacilityPayloadIncluded**](AFNORFacilityPayloadIncluded.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORRoutingCodePayloadHistoryLegalUnitFacility } from '@factpulse/sdk';

const instance: AFNORRoutingCodePayloadHistoryLegalUnitFacility = {
    routingIdentifier,
    siret,
    routingIdentifierType,
    routingCodeName,
    managesLegalCommitmentCode,
    administrativeStatus,
    address,
    legalUnit,
    facility,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
