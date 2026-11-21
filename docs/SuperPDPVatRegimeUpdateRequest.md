# SuperPDPVatRegimeUpdateRequest

VAT regime to set on the client\'s company at SuperPDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vatRegime** | **string** | monthly (réel normal mensuel), quarterly (réel normal trimestriel), simplified (régime simplifié), vat_exemption (franchise en base) | [default to undefined]
**hasVatOnDebits** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SuperPDPVatRegimeUpdateRequest } from '@factpulse/sdk';

const instance: SuperPDPVatRegimeUpdateRequest = {
    vatRegime,
    hasVatOnDebits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
