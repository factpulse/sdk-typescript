# WebhookSecretGenerateResponse

Response after generating a webhook secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the secret was generated successfully | [default to undefined]
**webhookSecret** | **string** | The generated webhook secret (save it, it will never be shown again) | [default to undefined]
**message** | **string** | Result message | [default to undefined]
**createdAt** | **string** | When the secret was created | [default to undefined]

## Example

```typescript
import { WebhookSecretGenerateResponse } from '@factpulse/sdk';

const instance: WebhookSecretGenerateResponse = {
    success,
    webhookSecret,
    message,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
