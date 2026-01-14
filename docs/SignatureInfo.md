# SignatureInfo

Information about the electronic signature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signed** | **boolean** | PDF was signed | [default to undefined]
**cn** | **string** |  | [optional] [default to undefined]
**expiration** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SignatureInfo } from '@factpulse/sdk';

const instance: SignatureInfo = {
    signed,
    cn,
    expiration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
