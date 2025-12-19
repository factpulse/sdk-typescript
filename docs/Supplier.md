# Supplier

Information about the supplier who issues the invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electronic_address** | [**ElectronicAddress**](ElectronicAddress.md) |  | [default to undefined]
**supplier_id** | **number** |  | [default to undefined]
**supplier_bank_account_code** | **number** |  | [optional] [default to undefined]
**supplier_service_id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**vat_number** | **string** |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**postal_address** | [**PostalAddress**](PostalAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Supplier } from '@factpulse/sdk';

const instance: Supplier = {
    electronic_address,
    supplier_id,
    supplier_bank_account_code,
    supplier_service_id,
    name,
    siren,
    siret,
    vat_number,
    iban,
    postal_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
