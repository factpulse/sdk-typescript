# Supplier

Information about the supplier / seller (BG-4).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electronic_address** | [**ElectronicAddress**](ElectronicAddress.md) |  | [default to undefined]
**supplier_id** | **number** |  | [default to undefined]
**private_id** | **string** |  | [optional] [default to undefined]
**supplier_bank_account_code** | **number** |  | [optional] [default to undefined]
**supplier_service_id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**trading_business_name** | **string** |  | [optional] [default to undefined]
**legal_description** | **string** |  | [optional] [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**vat_number** | **string** |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**bic** | **string** |  | [optional] [default to undefined]
**bank_account_name** | **string** |  | [optional] [default to undefined]
**proprietaryId** | **string** |  | [optional] [default to undefined]
**postal_address** | [**PostalAddress**](PostalAddress.md) |  | [optional] [default to undefined]
**contact** | [**Contact**](Contact.md) |  | [optional] [default to undefined]
**global_ids** | [**Array&lt;ElectronicAddress&gt;**](ElectronicAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Supplier } from '@factpulse/sdk';

const instance: Supplier = {
    electronic_address,
    supplier_id,
    private_id,
    supplier_bank_account_code,
    supplier_service_id,
    name,
    trading_business_name,
    legal_description,
    siren,
    siret,
    vat_number,
    iban,
    bic,
    bank_account_name,
    proprietaryId,
    postal_address,
    contact,
    global_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
