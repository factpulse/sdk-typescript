# RefuseeRequest

Requête simplifiée pour soumettre un statut REFUSÉE (210).  **Usage** : Pour une facture REÇUE (vous êtes acheteur). L\'acheteur refuse la facture et envoie le statut au vendeur.  Statut obligatoire PPF - Un code motif est OBLIGATOIRE (BR-FR-CDV-15).  Codes motif autorisés (BR-FR-CDV-CL-09_MDT-113_210): - TX_TVA_ERR, MONTANTTOTAL_ERR, CALCUL_ERR, NON_CONFORME, DOUBLON, - DEST_ERR, TRANSAC_INC, EMMET_INC, CONTRAT_TERM, DOUBLE_FACT, - CMD_ERR, ADR_ERR, REF_CT_ABSENT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceId** | **string** | Identifiant de la facture (BT-1) | [default to undefined]
**invoiceIssueDate** | **string** | Date d\&#39;émission de la facture (YYYY-MM-DD) | [default to undefined]
**invoiceSellerSiren** | **string** | SIREN du vendeur (destinataire du statut, MDT-129) | [default to undefined]
**invoiceSellerElectronicAddress** | **string** | Adresse électronique du vendeur (MDT-73) | [default to undefined]
**reasonCode** | **string** | Code motif du refus (obligatoire). Valeurs: TX_TVA_ERR, MONTANTTOTAL_ERR, CALCUL_ERR, NON_CONFORME, DOUBLON, DEST_ERR, TRANSAC_INC, EMMET_INC, CONTRAT_TERM, DOUBLE_FACT, CMD_ERR, ADR_ERR, REF_CT_ABSENT | [default to undefined]
**reasonText** | **string** |  | [optional] [default to undefined]
**senderSiren** | **string** |  | [optional] [default to undefined]
**flowType** | **string** | Type de flux (SupplierInvoiceLC pour facture reçue) | [optional] [default to 'SupplierInvoiceLC']
**pdpFlowServiceUrl** | **string** |  | [optional] [default to undefined]
**pdpTokenUrl** | **string** |  | [optional] [default to undefined]
**pdpClientId** | **string** |  | [optional] [default to undefined]
**pdpClientSecret** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RefuseeRequest } from '@factpulse/sdk';

const instance: RefuseeRequest = {
    invoiceId,
    invoiceIssueDate,
    invoiceSellerSiren,
    invoiceSellerElectronicAddress,
    reasonCode,
    reasonText,
    senderSiren,
    flowType,
    pdpFlowServiceUrl,
    pdpTokenUrl,
    pdpClientId,
    pdpClientSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
