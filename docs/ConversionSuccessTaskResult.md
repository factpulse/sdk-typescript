# ConversionSuccessTaskResult

Successful result from task_convert_document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Success]
**conversion_id** | **string** |  | [default to undefined]
**document_type_code** | **number** |  | [default to undefined]
**profile** | **string** |  | [default to undefined]
**extraction** | [**ConversionExtractionInfo**](ConversionExtractionInfo.md) |  | [default to undefined]
**processing_time_ms** | **number** |  | [default to undefined]
**pdf_regenerated** | **boolean** |  | [optional] [default to false]
**pdf_regenerated_reason** | **string** |  | [optional] [default to undefined]
**content_b64** | **string** |  | [optional] [default to undefined]
**xml_content** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConversionSuccessTaskResult } from '@factpulse/sdk';

const instance: ConversionSuccessTaskResult = {
    status,
    conversion_id,
    document_type_code,
    profile,
    extraction,
    processing_time_ms,
    pdf_regenerated,
    pdf_regenerated_reason,
    content_b64,
    xml_content,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
