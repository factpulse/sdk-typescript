# SignatureSuccessResult

Successful result from task_sign_pdf_from_bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to StatusEnum_Success]
**content_b64** | **string** |  | [default to undefined]
**filename** | **string** |  | [default to undefined]
**size_bytes** | **number** |  | [default to undefined]
**is_signed** | **boolean** |  | [default to undefined]
**signature_count** | **number** |  | [default to undefined]
**signer_cn** | **string** |  | [default to undefined]
**signing_date** | **string** |  | [default to undefined]
**validation_details** | **{ [key: string]: any; }** |  | [default to undefined]

## Example

```typescript
import { SignatureSuccessResult } from '@factpulse/sdk';

const instance: SignatureSuccessResult = {
    status,
    content_b64,
    filename,
    size_bytes,
    is_signed,
    signature_count,
    signer_cn,
    signing_date,
    validation_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
