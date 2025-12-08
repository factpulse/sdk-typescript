# NoteObligatoireSchema

Note obligatoire détectée avec localisation et comparaison XML/PDF.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_sujet** | **string** | Code sujet (PMT, PMD, AAB) | [default to undefined]
**label** | **string** | Libellé (ex: Indemnité recouvrement) | [default to undefined]
**valeur_pdf** | **string** |  | [optional] [default to undefined]
**valeur_xml** | **string** |  | [optional] [default to undefined]
**statut** | [**StatutChampAPI**](StatutChampAPI.md) | Statut de conformité (CONFORME si XML trouvé dans PDF) | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**bbox** | [**BoundingBoxSchema**](BoundingBoxSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NoteObligatoireSchema } from '@factpulse/sdk';

const instance: NoteObligatoireSchema = {
    code_sujet,
    label,
    valeur_pdf,
    valeur_xml,
    statut,
    message,
    bbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
