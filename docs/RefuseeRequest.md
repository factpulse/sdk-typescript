# RefuseeRequest

Requête simplifiée pour soumettre un statut REFUSÉE (210).  Statut obligatoire PPF - Le destinataire refuse la facture. Un code motif est OBLIGATOIRE (BR-FR-CDV-15).  Codes motif autorisés (BR-FR-CDV-CL-09_MDT-113_210): - TX_TVA_ERR: Taux de TVA erroné - MONTANTTOTAL_ERR: Montant total erroné - CALCUL_ERR: Erreur de calcul - NON_CONFORME: Non conforme - DOUBLON: Doublon - DEST_ERR: Destinataire erroné - TRANSAC_INC: Transaction incomplète - EMMET_INC: Émetteur inconnu - CONTRAT_TERM: Contrat terminé - DOUBLE_FACT: Double facturation - CMD_ERR: Commande erronée - ADR_ERR: Adresse erronée - REF_CT_ABSENT: Référence contrat absente

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
**reasonCode** | **string** | Code motif du refus (obligatoire). Valeurs autorisées: TX_TVA_ERR, MONTANTTOTAL_ERR, CALCUL_ERR, NON_CONFORME, DOUBLON, DEST_ERR, TRANSAC_INC, EMMET_INC, CONTRAT_TERM, DOUBLE_FACT, CMD_ERR, ADR_ERR, REF_CT_ABSENT | [default to undefined]
**reasonText** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RefuseeRequest } from '@factpulse/sdk';

const instance: RefuseeRequest = {
    invoiceId,
    invoiceIssueDate,
    senderSiren,
    flowType,
    pdpFlowServiceUrl,
    pdpTokenUrl,
    pdpClientId,
    pdpClientSecret,
    reasonCode,
    reasonText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
