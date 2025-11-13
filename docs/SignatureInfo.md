# SignatureInfo

Informations sur la signature électronique.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signe** | **boolean** | Le PDF a été signé | [default to undefined]
**cn** | **string** |  | [optional] [default to undefined]
**expiration** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SignatureInfo } from '@factpulse/sdk';

const instance: SignatureInfo = {
    signe,
    cn,
    expiration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
