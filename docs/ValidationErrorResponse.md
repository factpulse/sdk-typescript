# ValidationErrorResponse

Erreur de validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **string** | Champ concerné | [default to undefined]
**message** | **string** | Message d\&#39;erreur | [default to undefined]
**rule** | **string** |  | [optional] [default to undefined]
**severity** | **string** | Sévérité (error/warning) | [optional] [default to 'error']

## Example

```typescript
import { ValidationErrorResponse } from '@factpulse/sdk';

const instance: ValidationErrorResponse = {
    field,
    message,
    rule,
    severity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
