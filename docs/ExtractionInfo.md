# ExtractionInfo

Informations sur l\'extraction des donnees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_score** | **number** | Score de confiance global (0-1) | [default to undefined]
**fields_extracted** | **number** | Nombre de champs extraits | [default to undefined]
**fields_enriched** | **number** | Nombre de champs enrichis automatiquement | [optional] [default to 0]
**fields_missing** | **number** | Nombre de champs manquants | [optional] [default to 0]

## Example

```typescript
import { ExtractionInfo } from '@factpulse/sdk';

const instance: ExtractionInfo = {
    confidence_score,
    fields_extracted,
    fields_enriched,
    fields_missing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
