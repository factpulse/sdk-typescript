# APIError

Standardized API error (aligned with AFNOR Error schema).  Unified format for all HTTP error responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorCode** | **string** | Alphanumeric code precisely identifying the error | [default to undefined]
**errorMessage** | **string** | Message describing the error (not intended for end user) | [default to undefined]
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
