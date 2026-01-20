# EncaisseeRequest

Requête simplifiée pour soumettre un statut ENCAISSÉE (212).  Statut obligatoire PPF - Le paiement a été effectué. Le montant encaissé est OBLIGATOIRE (BR-FR-CDV-14).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceId** | **string** | Identifiant de la facture (BT-1) | [default to undefined]
**invoiceIssueDate** | **string** | Date d\&#39;émission de la facture (YYYY-MM-DD) | [default to undefined]
**senderSiren** | **string** |  | [optional] [default to undefined]
**flowType** | **string** | Type de flux: SupplierInvoiceLC (acheteur) ou CustomerInvoiceLC (vendeur) | [optional] [default to 'SupplierInvoiceLC']
**pdpFlowServiceUrl** | **string** |  | [optional] [default to undefined]
**pdpTokenUrl** | **string** |  | [optional] [default to undefined]
**pdpClientId** | **string** |  | [optional] [default to undefined]
**pdpClientSecret** | **string** |  | [optional] [default to undefined]
**amount** | [**Amount**](Amount.md) |  | [default to undefined]
**currency** | **string** | Code devise ISO 4217 | [optional] [default to 'EUR']

## Example

```typescript
import { EncaisseeRequest } from '@factpulse/sdk';

const instance: EncaisseeRequest = {
    invoiceId,
    invoiceIssueDate,
    senderSiren,
    flowType,
    pdpFlowServiceUrl,
    pdpTokenUrl,
    pdpClientId,
    pdpClientSecret,
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
