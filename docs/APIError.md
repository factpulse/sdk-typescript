# APIError

Erreur API standardisée (alignée sur AFNOR Error schema).  Format unifié pour toutes les réponses d\'erreur HTTP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorCode** | **string** | Code alphanumérique identifiant précisément l\&#39;erreur | [default to undefined]
**errorMessage** | **string** | Message décrivant l\&#39;erreur (non destiné à l\&#39;utilisateur final) | [default to undefined]
**details** | [**Array&lt;ValidationErrorDetail&gt;**](ValidationErrorDetail.md) |  | [optional] [default to undefined]

## Example

```typescript
import { APIError } from '@factpulse/sdk';

const instance: APIError = {
    errorCode,
    errorMessage,
    details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
