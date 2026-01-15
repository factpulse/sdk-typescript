# SignatureInfoAPI

Information about an electronic signature in a PDF.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldName** | **string** | Signature field name in the PDF | [default to undefined]
**signer** | **string** |  | [optional] [default to undefined]
**signingDate** | **string** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**location** | **string** |  | [optional] [default to undefined]
**isValid** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SignatureInfoAPI } from '@factpulse/sdk';

const instance: SignatureInfoAPI = {
    fieldName,
    signer,
    signingDate,
    reason,
    location,
    isValid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
