# TaxRepresentative

Seller tax representative (BG-11).  The tax representative is required when the seller is not established in the country where VAT is due.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Tax representative name (BT-62). | [default to undefined]
**vat_number** | **string** | Tax representative VAT identifier (BT-63). | [default to undefined]
**postal_address** | [**PostalAddress**](PostalAddress.md) | Tax representative postal address (BG-12). | [default to undefined]

## Example

```typescript
import { TaxRepresentative } from '@factpulse/sdk';

const instance: TaxRepresentative = {
    name,
    vat_number,
    postal_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
