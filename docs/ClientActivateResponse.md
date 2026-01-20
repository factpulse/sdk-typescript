# ClientActivateResponse

Client activation/deactivation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **string** | Unique client identifier | [default to undefined]
**isActive** | **boolean** | New status | [default to undefined]
**message** | **string** | Confirmation message | [default to undefined]

## Example

```typescript
import { ClientActivateResponse } from '@factpulse/sdk';

const instance: ClientActivateResponse = {
    uid,
    isActive,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
