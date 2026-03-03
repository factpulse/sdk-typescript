# AFNORWebhookPatchPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**Array&lt;AFNORCallbackHeader&gt;**](AFNORCallbackHeader.md) |  | [optional] [default to undefined]
**authentication** | [**AFNORCallbackAuthentication**](AFNORCallbackAuthentication.md) |  | [optional] [default to undefined]
**signature** | [**AFNORCallbackSignature**](AFNORCallbackSignature.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORWebhookPatchPayload } from '@factpulse/sdk';

const instance: AFNORWebhookPatchPayload = {
    headers,
    authentication,
    signature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
