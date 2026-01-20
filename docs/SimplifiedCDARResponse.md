# SimplifiedCDARResponse

Réponse pour les endpoints CDAR simplifiés.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowId** | **string** | Identifiant du flux AFNOR | [default to undefined]
**documentId** | **string** | Identifiant du message CDAR généré | [default to undefined]
**status** | **string** | Code statut soumis (210 ou 212) | [default to undefined]
**invoiceId** | **string** | Identifiant de la facture | [default to undefined]
**message** | **string** | Message de confirmation | [default to undefined]

## Example

```typescript
import { SimplifiedCDARResponse } from '@factpulse/sdk';

const instance: SimplifiedCDARResponse = {
    flowId,
    documentId,
    status,
    invoiceId,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
