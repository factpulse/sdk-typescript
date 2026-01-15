# DocumentTypeInfo

Informations sur le type de document detecte.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Code UNTDID 1001 | [default to undefined]
**label** | **string** | Libelle (Facture, Avoir, etc.) | [default to undefined]
**detected_as** | **string** | Classification interne | [default to undefined]

## Example

```typescript
import { DocumentTypeInfo } from '@factpulse/sdk';

const instance: DocumentTypeInfo = {
    code,
    label,
    detected_as,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
