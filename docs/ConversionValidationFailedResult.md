# ConversionValidationFailedResult

Conversion extracted data failed Schematron validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_ValidationFailed]
**conversion_id** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**extracted_data** | **{ [key: string]: any; }** |  | [default to undefined]
**extraction** | [**ConversionExtractionInfo**](ConversionExtractionInfo.md) |  | [optional] [default to undefined]
**validation_errors** | **Array&lt;{ [key: string]: any; }&gt;** |  | [optional] [default to undefined]
**profile** | **string** |  | [default to undefined]
**processing_time_ms** | **number** |  | [default to undefined]
**correction_attempted** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { ConversionValidationFailedResult } from '@factpulse/sdk';

const instance: ConversionValidationFailedResult = {
    status,
    conversion_id,
    message,
    extracted_data,
    extraction,
    validation_errors,
    profile,
    processing_time_ms,
    correction_attempted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
