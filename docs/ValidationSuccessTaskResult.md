# ValidationSuccessTaskResult

Successful result from task_validate_facturx_pdf.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Success]
**validation_result** | [**PDFValidationResultAPI**](PDFValidationResultAPI.md) |  | [default to undefined]

## Example

```typescript
import { ValidationSuccessTaskResult } from '@factpulse/sdk';

const instance: ValidationSuccessTaskResult = {
    status,
    validation_result,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
