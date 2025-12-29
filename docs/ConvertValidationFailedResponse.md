# ConvertValidationFailedResponse

Reponse echec de validation - inclut les donnees extraites pour correction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to 'validation_failed']
**conversion_id** | **string** |  | [default to undefined]
**message** | **string** |  | [optional] [default to 'Donnees extraites avec erreurs de validation. Completez le formulaire et appelez /resume.']
**extraction** | [**ExtractionInfo**](ExtractionInfo.md) |  | [default to undefined]
**extracted_data** | **{ [key: string]: any; }** | Donnees extraites par OCR au format FacturXInvoice (a completer/corriger) | [default to undefined]
**missing_fields** | [**Array&lt;MissingField&gt;**](MissingField.md) | Champs manquants pour conformite Factur-X | [optional] [default to undefined]
**validation** | [**ValidationInfo**](ValidationInfo.md) |  | [default to undefined]
**resume_url** | **string** | URL pour reprendre la conversion avec corrections | [default to undefined]
**expires_at** | **string** | Expiration de la conversion (1h) | [default to undefined]

## Example

```typescript
import { ConvertValidationFailedResponse } from '@factpulse/sdk';

const instance: ConvertValidationFailedResponse = {
    status,
    conversion_id,
    message,
    extraction,
    extracted_data,
    missing_fields,
    validation,
    resume_url,
    expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
