# ConvertPendingInputResponse

Reponse donnees manquantes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to 'pending_input']
**conversion_id** | **string** |  | [default to undefined]
**message** | **string** |  | [optional] [default to 'Donnees manquantes requises pour la conformite']
**extraction** | [**ExtractionInfo**](ExtractionInfo.md) |  | [default to undefined]
**extracted_data** | **{ [key: string]: any; }** | Donnees extraites par OCR au format FacturXInvoice | [default to undefined]
**missing_fields** | [**Array&lt;MissingField&gt;**](MissingField.md) |  | [default to undefined]
**resume_url** | **string** |  | [default to undefined]
**expires_at** | **string** |  | [default to undefined]

## Example

```typescript
import { ConvertPendingInputResponse } from '@factpulse/sdk';

const instance: ConvertPendingInputResponse = {
    status,
    conversion_id,
    message,
    extraction,
    extracted_data,
    missing_fields,
    resume_url,
    expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
