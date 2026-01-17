# GenerateCDARResponse

Réponse de génération de message CDAR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** |  | [default to undefined]
**xml** | **string** | XML CDAR généré | [default to undefined]
**xmlSize** | **number** | Taille du XML en octets | [default to undefined]
**sha256** | **string** | Hash SHA256 du XML | [default to undefined]
**message** | **string** | Message de succès | [default to undefined]

## Example

```typescript
import { GenerateCDARResponse } from '@factpulse/sdk';

const instance: GenerateCDARResponse = {
    documentId,
    xml,
    xmlSize,
    sha256,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
