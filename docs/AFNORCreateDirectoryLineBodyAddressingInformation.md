# AFNORCreateDirectoryLineBodyAddressingInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siren** | **string** | SIREN number | [default to undefined]
**siret** | **string** | SIRET Number | [optional] [default to undefined]
**routingIdentifier** | **string** | Routing identifier od a routing code. | [optional] [default to undefined]
**addressingSuffix** | **string** | suffix of the directory line which defines an address mesh not attached to a facility | [optional] [default to undefined]

## Example

```typescript
import { AFNORCreateDirectoryLineBodyAddressingInformation } from '@factpulse/sdk';

const instance: AFNORCreateDirectoryLineBodyAddressingInformation = {
    siren,
    siret,
    routingIdentifier,
    addressingSuffix,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
