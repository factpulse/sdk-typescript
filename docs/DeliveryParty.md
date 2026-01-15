# DeliveryParty

Delivery location information (BG-15 Deliver to).  Represents the party or location where goods/services are delivered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**global_id** | [**ElectronicAddress**](ElectronicAddress.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**postal_address** | [**PostalAddress**](PostalAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeliveryParty } from '@factpulse/sdk';

const instance: DeliveryParty = {
    id,
    global_id,
    name,
    postal_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
