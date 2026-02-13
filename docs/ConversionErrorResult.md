# ConversionErrorResult

Error result specific to conversion tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Error]
**conversion_id** | **string** |  | [optional] [default to undefined]
**errorCode** | **string** |  | [default to undefined]
**errorMessage** | **string** |  | [default to undefined]
**details** | [**Array&lt;AFNORErrorDetail&gt;**](AFNORErrorDetail.md) |  | [optional] [default to undefined]
**traceback** | **string** |  | [optional] [default to undefined]
**processing_time_ms** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ConversionErrorResult } from '@factpulse/sdk';

const instance: ConversionErrorResult = {
    status,
    conversion_id,
    errorCode,
    errorMessage,
    details,
    traceback,
    processing_time_ms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
