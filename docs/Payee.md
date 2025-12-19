# Payee

Information about the payment beneficiary (BG-10 / PayeeTradeParty).  The payee is the party receiving payment. This block is used only if the payee is different from the seller (supplier).  **Main use case**: Factoring When an invoice is factored, the factor (factoring company) becomes the payment beneficiary instead of the supplier.  **Business Terms (EN16931)**: - BT-59: Payee name (mandatory) - BT-60: Payee identifier (SIRET with schemeID 0009) - BT-61: Payee legal identifier (SIREN with schemeID 0002)  **Reference**: docs/guide_affacturage.md

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nom** | **string** | Payee name (BT-59). Mandatory. | [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**electronicAddress** | [**ElectronicAddress**](ElectronicAddress.md) |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**bic** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Payee } from '@factpulse/sdk';

const instance: Payee = {
    nom,
    siret,
    siren,
    electronicAddress,
    iban,
    bic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
