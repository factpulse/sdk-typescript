# ConvertSuccessResponse

Reponse succes de conversion.  Le champ `invoice` contient les donnees de la facture au format FacturXInvoice (cf. facture_electronique.models.FacturXInvoice). Ce modele est le meme que celui utilise pour la generation Factur-X, garantissant une coherence totale.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Statut de la conversion | [optional] [default to 'success']
**conversion_id** | **string** | Identifiant unique de conversion | [default to undefined]
**document_type** | [**DocumentTypeInfo**](DocumentTypeInfo.md) |  | [default to undefined]
**invoice** | **{ [key: string]: any; }** | Donnees facture au format FacturXInvoice (cf. models.py) | [default to undefined]
**extraction** | [**ExtractionInfo**](ExtractionInfo.md) |  | [default to undefined]
**validation** | [**ValidationInfo**](ValidationInfo.md) |  | [default to undefined]
**files** | [**FilesInfo**](FilesInfo.md) |  | [default to undefined]
**processing_time_ms** | **number** | Temps de traitement en ms | [default to undefined]
**pdf_regenerated** | **boolean** | True si le PDF a ete regenere (source non exploitable) | [optional] [default to false]
**pdf_regenerated_reason** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConvertSuccessResponse } from '@factpulse/sdk';

const instance: ConvertSuccessResponse = {
    status,
    conversion_id,
    document_type,
    invoice,
    extraction,
    validation,
    files,
    processing_time_ms,
    pdf_regenerated,
    pdf_regenerated_reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
