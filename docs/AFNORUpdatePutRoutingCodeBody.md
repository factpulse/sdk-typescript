# AFNORUpdatePutRoutingCodeBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingIdentifierType** | **string** | Routing Identifier type. | [default to undefined]
**routingCodeName** | **string** | Name of the directory line routing code. This attribute is only returned if the directory line is defined at the SIREN / SIRET / Routing code mesh. | [default to undefined]
**administrativeStatus** | [**AFNORRoutingCodeAdministrativeStatus**](AFNORRoutingCodeAdministrativeStatus.md) |  | [default to undefined]
**address** | [**AFNORAddressPut**](AFNORAddressPut.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORUpdatePutRoutingCodeBody } from '@factpulse/sdk';

const instance: AFNORUpdatePutRoutingCodeBody = {
    routingIdentifierType,
    routingCodeName,
    administrativeStatus,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
