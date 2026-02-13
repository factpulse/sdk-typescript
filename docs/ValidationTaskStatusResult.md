# ValidationTaskStatusResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Error]
**validation_result** | [**PDFValidationResultAPI**](PDFValidationResultAPI.md) |  | [default to undefined]
**errorCode** | **string** |  | [default to undefined]
**errorMessage** | **string** |  | [default to undefined]
**details** | [**Array&lt;AFNORErrorDetail&gt;**](AFNORErrorDetail.md) |  | [optional] [default to undefined]
**traceback** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationTaskStatusResult } from '@factpulse/sdk';

const instance: ValidationTaskStatusResult = {
    status,
    validation_result,
    errorCode,
    errorMessage,
    details,
    traceback,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
