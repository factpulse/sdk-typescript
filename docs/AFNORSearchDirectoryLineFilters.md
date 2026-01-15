# AFNORSearchDirectoryLineFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressingIdentifier** | [**AFNORSearchDirectoryLineFiltersAddressingIdentifier**](AFNORSearchDirectoryLineFiltersAddressingIdentifier.md) |  | [optional] [default to undefined]
**siren** | [**AFNORSearchSirenFiltersSiren**](AFNORSearchSirenFiltersSiren.md) |  | [optional] [default to undefined]
**siret** | [**AFNORSearchSiretFiltersSiret**](AFNORSearchSiretFiltersSiret.md) |  | [optional] [default to undefined]
**routingIdentifier** | [**AFNORRoutingCodeSearchFiltersRoutingIdentifier**](AFNORRoutingCodeSearchFiltersRoutingIdentifier.md) |  | [optional] [default to undefined]
**addressingSuffix** | [**AFNORSearchDirectoryLineFiltersAddressingSuffix**](AFNORSearchDirectoryLineFiltersAddressingSuffix.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORSearchDirectoryLineFilters } from '@factpulse/sdk';

const instance: AFNORSearchDirectoryLineFilters = {
    addressingIdentifier,
    siren,
    siret,
    routingIdentifier,
    addressingSuffix,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
