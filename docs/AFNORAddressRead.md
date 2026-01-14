# AFNORAddressRead

Wrapper for postal addresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**addressLine2** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**addressLine3** | **string** | Corresponds to the address of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**postalCode** | **string** | Service postal code | [optional] [default to undefined]
**countrySubdivision** | **string** | Subdivision of the country | [optional] [default to undefined]
**locality** | **string** | Municipality of the recipient structure having defined the directory line(s). | [optional] [default to undefined]
**countryCode** | **string** | Corresponds to the country of the recipient structure. | [optional] [default to undefined]
**countryName** | **string** | Corresponds to the country of the recipient structure having defined the directory line(s). | [optional] [default to undefined]

## Example

```typescript
import { AFNORAddressRead } from '@factpulse/sdk';

const instance: AFNORAddressRead = {
    addressLine1,
    addressLine2,
    addressLine3,
    postalCode,
    countrySubdivision,
    locality,
    countryCode,
    countryName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
