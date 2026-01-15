# Recipient

Information about the invoice recipient / buyer (BG-7).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electronic_address** | [**ElectronicAddress**](ElectronicAddress.md) |  | [default to undefined]
**executing_service_code** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**vat_number** | **string** |  | [optional] [default to undefined]
**postal_address** | [**PostalAddress**](PostalAddress.md) |  | [optional] [default to undefined]
**contact** | [**Contact**](Contact.md) |  | [optional] [default to undefined]
**global_ids** | [**Array&lt;ElectronicAddress&gt;**](ElectronicAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Recipient } from '@factpulse/sdk';

const instance: Recipient = {
    electronic_address,
    executing_service_code,
    name,
    siren,
    siret,
    vat_number,
    postal_address,
    contact,
    global_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
