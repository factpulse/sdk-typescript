# CreateCDARRequest

Requête de création d\'un message CDAR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Identifiant unique du message CDAR | [default to undefined]
**businessProcess** | **string** | Code processus métier (REGULATED, B2C, B2BINT, etc.) | [optional] [default to 'REGULATED']
**typeCode** | **string** | Type de message (23&#x3D;Traitement, 305&#x3D;Transmission) | [optional] [default to '23']
**senderSiren** | **string** | SIREN de l\&#39;émetteur (9 chiffres) | [default to undefined]
**senderRole** | **string** | Rôle de l\&#39;émetteur (WK, SE, BY, etc.) | [optional] [default to 'WK']
**senderName** | **string** |  | [optional] [default to undefined]
**senderEmail** | **string** |  | [optional] [default to undefined]
**recipients** | [**Array&lt;RecipientInput&gt;**](RecipientInput.md) | Liste des destinataires | [optional] [default to undefined]
**invoiceId** | **string** | Identifiant de la facture (BT-1) | [default to undefined]
**invoiceIssueDate** | **string** | Date d\&#39;émission de la facture (YYYY-MM-DD) | [default to undefined]
**invoiceTypeCode** | **string** | Type de document (380&#x3D;Facture, 381&#x3D;Avoir) | [optional] [default to '380']
**invoiceSellerSiren** | **string** |  | [optional] [default to undefined]
**invoiceBuyerSiren** | **string** |  | [optional] [default to undefined]
**status** | **string** | Code statut de la facture (200-601) | [default to undefined]
**reasonCode** | **string** |  | [optional] [default to undefined]
**reasonText** | **string** |  | [optional] [default to undefined]
**actionCode** | **string** |  | [optional] [default to undefined]
**encaisseAmount** | [**Encaisseamount**](Encaisseamount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCDARRequest } from '@factpulse/sdk';

const instance: CreateCDARRequest = {
    documentId,
    businessProcess,
    typeCode,
    senderSiren,
    senderRole,
    senderName,
    senderEmail,
    recipients,
    invoiceId,
    invoiceIssueDate,
    invoiceTypeCode,
    invoiceSellerSiren,
    invoiceBuyerSiren,
    status,
    reasonCode,
    reasonText,
    actionCode,
    encaisseAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
