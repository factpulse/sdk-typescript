# IncomingSupplier

Supplier extracted from an incoming invoice.  Unlike the Supplier model in models.py, this model does not have a supplier_id field as this information is not available in Factur-X/CII/UBL XML files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Supplier business name (BT-27) | [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**vatNumber** | **string** |  | [optional] [default to undefined]
**postalAddress** | [**PostalAddress**](PostalAddress.md) |  | [optional] [default to undefined]
**electronicAddress** | [**ElectronicAddress**](ElectronicAddress.md) |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IncomingSupplier } from '@factpulse/sdk';

const instance: IncomingSupplier = {
    name,
    siren,
    siret,
    vatNumber,
    postalAddress,
    electronicAddress,
    email,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
