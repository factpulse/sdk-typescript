# AFNORAddressPut

Wrapper for postal addresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ligneAdresse1** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [default to undefined]
**ligneAdresse2** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [default to undefined]
**ligneAdresse3** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [default to undefined]
**postalCode** | **string** | Service postal code | [default to undefined]
**countrySubdivision** | **string** | Subdivision of the country | [default to undefined]
**locality** | **string** | Corresponds to the municipality of the recipient structure having defined the directory line(s). | [default to undefined]
**codePays** | **string** | Corresponds to the country code of the recipient structure | [default to undefined]

## Example

```typescript
import { AFNORAddressPut } from '@factpulse/sdk';

const instance: AFNORAddressPut = {
    ligneAdresse1,
    ligneAdresse2,
    ligneAdresse3,
    postalCode,
    countrySubdivision,
    locality,
    codePays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
