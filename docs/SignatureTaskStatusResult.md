# SignatureTaskStatusResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Error]
**content_b64** | **string** |  | [default to undefined]
**filename** | **string** |  | [default to undefined]
**size_bytes** | **number** |  | [default to undefined]
**is_signed** | **boolean** |  | [default to undefined]
**signature_count** | **number** |  | [default to undefined]
**signer_cn** | **string** |  | [default to undefined]
**signing_date** | **string** |  | [default to undefined]
**validation_details** | **{ [key: string]: any; }** |  | [default to undefined]
**errorCode** | **string** |  | [default to undefined]
**errorMessage** | **string** |  | [default to undefined]
**details** | [**Array&lt;AFNORErrorDetail&gt;**](AFNORErrorDetail.md) |  | [optional] [default to undefined]
**traceback** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SignatureTaskStatusResult } from '@factpulse/sdk';

const instance: SignatureTaskStatusResult = {
    status,
    content_b64,
    filename,
    size_bytes,
    is_signed,
    signature_count,
    signer_cn,
    signing_date,
    validation_details,
    errorCode,
    errorMessage,
    details,
    traceback,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
