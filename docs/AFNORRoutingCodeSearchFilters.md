# AFNORRoutingCodeSearchFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routingIdentifier** | [**AFNORRoutingCodeSearchFiltersRoutingIdentifier**](AFNORRoutingCodeSearchFiltersRoutingIdentifier.md) |  | [optional] [default to undefined]
**siret** | [**AFNORSearchSiretFiltersSiret**](AFNORSearchSiretFiltersSiret.md) |  | [optional] [default to undefined]
**routingCodeName** | [**AFNORRoutingCodeSearchFiltersRoutingCodeName**](AFNORRoutingCodeSearchFiltersRoutingCodeName.md) |  | [optional] [default to undefined]
**administrativeStatus** | [**AFNORRoutingCodeSearchFiltersAdministrativeStatus**](AFNORRoutingCodeSearchFiltersAdministrativeStatus.md) |  | [optional] [default to undefined]
**addressLines** | [**AFNORSearchSiretFiltersAddressLines**](AFNORSearchSiretFiltersAddressLines.md) |  | [optional] [default to undefined]
**postalCode** | [**AFNORSearchSiretFiltersPostalCode**](AFNORSearchSiretFiltersPostalCode.md) |  | [optional] [default to undefined]
**locality** | [**AFNORSearchSiretFiltersLocality**](AFNORSearchSiretFiltersLocality.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORRoutingCodeSearchFilters } from '@factpulse/sdk';

const instance: AFNORRoutingCodeSearchFilters = {
    routingIdentifier,
    siret,
    routingCodeName,
    administrativeStatus,
    addressLines,
    postalCode,
    locality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
