# ConvertErrorResponse

Reponse erreur de conversion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to 'error']
**error** | **string** | Code erreur | [default to undefined]
**message** | **string** | Message d\&#39;erreur | [default to undefined]
**conversion_id** | **string** |  | [optional] [default to undefined]
**resume_url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConvertErrorResponse } from '@factpulse/sdk';

const instance: ConvertErrorResponse = {
    status,
    error,
    message,
    conversion_id,
    resume_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
