# SecretStatus

Secret status (never exposes the secret itself).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Secret status: \&#39;active\&#39;, \&#39;missing\&#39;, etc. | [default to undefined]
**message** | **string** | Descriptive status message | [default to undefined]

## Example

```typescript
import { SecretStatus } from '@factpulse/sdk';

const instance: SecretStatus = {
    status,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
