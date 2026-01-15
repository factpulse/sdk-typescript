# AFNORAddressEdit

Wrapper for postal addresses without country name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ligneAdresse1** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**ligneAdresse2** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**ligneAdresse3** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**postalCode** | **string** | Service postal code | [optional] [default to undefined]
**countrySubdivision** | **string** | Subdivision of the country | [optional] [default to undefined]
**locality** | **string** | Municipality of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**codePays** | **string** | Corresponds to the country of the recipient structure. | [optional] [default to undefined]

## Example

```typescript
import { AFNORAddressEdit } from '@factpulse/sdk';

const instance: AFNORAddressEdit = {
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
