# ValidateCDARResponse

Réponse de validation CDAR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **boolean** | Résultat de validation | [default to undefined]
**errors** | [**Array&lt;ValidationErrorResponse&gt;**](ValidationErrorResponse.md) | Liste des erreurs | [optional] [default to undefined]
**warnings** | [**Array&lt;ValidationErrorResponse&gt;**](ValidationErrorResponse.md) | Liste des avertissements | [optional] [default to undefined]

## Example

```typescript
import { ValidateCDARResponse } from '@factpulse/sdk';

const instance: ValidateCDARResponse = {
    valid,
    errors,
    warnings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
