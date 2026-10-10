# PostalAddressInput

Represents a postal address (BG-5, BG-8, BG-12, BG-15).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postal_code** | **string** |  | [optional] [default to undefined]
**line_one** | **string** |  | [optional] [default to undefined]
**line_two** | **string** |  | [optional] [default to undefined]
**line_three** | **string** |  | [optional] [default to undefined]
**city** | **string** |  | [optional] [default to undefined]
**country_code** | **string** |  | [optional] [default to undefined]
**country_subdivision** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PostalAddressInput } from '@factpulse/sdk';

const instance: PostalAddressInput = {
    postal_code,
    line_one,
    line_two,
    line_three,
    city,
    country_code,
    country_subdivision,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
