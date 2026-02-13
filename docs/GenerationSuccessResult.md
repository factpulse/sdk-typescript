# GenerationSuccessResult

Successful result from task_generate_invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Success]
**content_b64** | **string** |  | [optional] [default to undefined]
**xml_content** | **string** |  | [optional] [default to undefined]
**filename** | **string** |  | [default to undefined]

## Example

```typescript
import { GenerationSuccessResult } from '@factpulse/sdk';

const instance: GenerationSuccessResult = {
    status,
    content_b64,
    xml_content,
    filename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
