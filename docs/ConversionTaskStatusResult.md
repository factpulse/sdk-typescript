# ConversionTaskStatusResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Error]
**conversion_id** | **string** |  | [default to undefined]
**document_type_code** | **number** |  | [default to undefined]
**profile** | **string** |  | [default to undefined]
**extraction** | [**ConversionExtractionInfo**](ConversionExtractionInfo.md) |  | [default to undefined]
**processing_time_ms** | **number** |  | [default to undefined]
**pdf_regenerated** | **boolean** |  | [optional] [default to false]
**pdf_regenerated_reason** | **string** |  | [optional] [default to undefined]
**content_b64** | **string** |  | [optional] [default to undefined]
**xml_content** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [default to undefined]
**missing_fields** | **Array&lt;string&gt;** |  | [default to undefined]
**extracted_data** | **{ [key: string]: any; }** |  | [default to undefined]
**confidence_score** | **number** |  | [default to undefined]
**validation_errors** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**correction_attempted** | **boolean** |  | [optional] [default to false]
**errorCode** | **string** |  | [default to undefined]
**errorMessage** | **string** |  | [default to undefined]
**details** | [**Array&lt;AFNORErrorDetail&gt;**](AFNORErrorDetail.md) |  | [optional] [default to undefined]
**traceback** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConversionTaskStatusResult } from '@factpulse/sdk';

const instance: ConversionTaskStatusResult = {
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
    message,
    missing_fields,
    extracted_data,
    confidence_score,
    validation_errors,
    correction_attempted,
    errorCode,
    errorMessage,
    details,
    traceback,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
