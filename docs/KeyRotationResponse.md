# KeyRotationResponse

Response from key rotation operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether rotation was successful | [default to undefined]
**message** | **string** | Result message | [default to undefined]
**rotatedCount** | **number** | Number of secrets that were rotated | [default to undefined]
**partialErrors** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { KeyRotationResponse } from '@factpulse/sdk';

const instance: KeyRotationResponse = {
    success,
    message,
    rotatedCount,
    partialErrors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
