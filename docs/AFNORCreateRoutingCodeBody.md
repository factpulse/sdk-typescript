# AFNORCreateRoutingCodeBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facilityNature** | [**AFNORFacilityNature**](AFNORFacilityNature.md) |  | [default to undefined]
**routingIdentifier** | **string** | Routing identifier od a routing code. | [default to undefined]
**siret** | **string** | SIRET Number | [default to undefined]
**routingIdentifierType** | **string** | Routing Identifier type. | [optional] [default to undefined]
**routingCodeName** | **string** | Name of the directory line routing code. This attribute is only returned if the directory line is defined at the SIREN / SIRET / Routing code mesh. | [default to undefined]
**managesLegalCommitmentCode** | **boolean** | Indicates whether the public structure requires a legal commitment number. This attribute is only returned if the directory line is defined for a public structure at the SIREN / SIRET or SIREN / SIRET / Routing code level. | [optional] [default to undefined]
**administrativeStatus** | [**AFNORRoutingCodeAdministrativeStatus**](AFNORRoutingCodeAdministrativeStatus.md) |  | [default to undefined]
**address** | [**AFNORAddressEdit**](AFNORAddressEdit.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORCreateRoutingCodeBody } from '@factpulse/sdk';

const instance: AFNORCreateRoutingCodeBody = {
    facilityNature,
    routingIdentifier,
    siret,
    routingIdentifierType,
    routingCodeName,
    managesLegalCommitmentCode,
    administrativeStatus,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
