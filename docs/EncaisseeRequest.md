# EncaisseeRequest

Requête simplifiée pour soumettre un statut ENCAISSÉE (212).  **Usage** : Pour une facture ÉMISE (vous êtes vendeur). Le vendeur confirme l\'encaissement et envoie le statut à l\'acheteur.  Statut obligatoire PPF - Le montant encaissé est OBLIGATOIRE (BR-FR-CDV-14).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceId** | **string** | Identifiant de la facture (BT-1) | [default to undefined]
**invoiceIssueDate** | **string** | Date d\&#39;émission de la facture (YYYY-MM-DD) | [default to undefined]
**invoiceBuyerSiren** | **string** | SIREN de l\&#39;acheteur (destinataire du statut) | [default to undefined]
**invoiceBuyerElectronicAddress** | **string** | Adresse électronique de l\&#39;acheteur (MDT-73) | [default to undefined]
**amount** | [**Amount**](Amount.md) |  | [default to undefined]
**currency** | **string** | Code devise ISO 4217 | [optional] [default to 'EUR']
**senderSiren** | **string** |  | [optional] [default to undefined]
**flowType** | **string** | Type de flux (CustomerInvoiceLC pour facture émise) | [optional] [default to 'CustomerInvoiceLC']
**pdpFlowServiceUrl** | **string** |  | [optional] [default to undefined]
**pdpTokenUrl** | **string** |  | [optional] [default to undefined]
**pdpClientId** | **string** |  | [optional] [default to undefined]
**pdpClientSecret** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EncaisseeRequest } from '@factpulse/sdk';

const instance: EncaisseeRequest = {
    invoiceId,
    invoiceIssueDate,
    invoiceBuyerSiren,
    invoiceBuyerElectronicAddress,
    amount,
    currency,
    senderSiren,
    flowType,
    pdpFlowServiceUrl,
    pdpTokenUrl,
    pdpClientId,
    pdpClientSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
