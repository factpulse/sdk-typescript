# AFNORUpdatePatchRoutingCodeBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingIdentifierType** | **string** | Routing Identifier type. | [optional] [default to undefined]
**routingCodeName** | **string** | Name of the directory line routing code. This attribute is only returned if the directory line is defined at the SIREN / SIRET / Routing code mesh. | [optional] [default to undefined]
**administrativeStatus** | [**AFNORRoutingCodeAdministrativeStatus**](AFNORRoutingCodeAdministrativeStatus.md) |  | [optional] [default to undefined]
**address** | [**AFNORAddressPatch**](AFNORAddressPatch.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORUpdatePatchRoutingCodeBody } from '@factpulse/sdk';

const instance: AFNORUpdatePatchRoutingCodeBody = {
    routingIdentifierType,
    routingCodeName,
    administrativeStatus,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
