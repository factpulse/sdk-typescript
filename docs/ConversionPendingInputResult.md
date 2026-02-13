# ConversionPendingInputResult

Conversion needs user input (missing fields).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_PendingInput]
**conversion_id** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**missing_fields** | **Array&lt;string&gt;** |  | [default to undefined]
**extracted_data** | **{ [key: string]: any; }** |  | [default to undefined]
**confidence_score** | **number** |  | [default to undefined]
**processing_time_ms** | **number** |  | [default to undefined]

## Example

```typescript
import { ConversionPendingInputResult } from '@factpulse/sdk';

const instance: ConversionPendingInputResult = {
    status,
    conversion_id,
    message,
    missing_fields,
    extracted_data,
    confidence_score,
    processing_time_ms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
