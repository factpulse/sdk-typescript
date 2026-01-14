# InvoiceStatus

Chorus Pro invoice status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Status code (SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.) | [default to undefined]
**label** | **string** | Status label | [default to undefined]
**date** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceStatus } from '@factpulse/sdk';

const instance: InvoiceStatus = {
    code,
    label,
    date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
