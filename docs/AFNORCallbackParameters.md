# AFNORCallbackParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** |  | [default to undefined]
**headers** | [**Array&lt;AFNORCallbackHeader&gt;**](AFNORCallbackHeader.md) |  | [optional] [default to undefined]
**authentication** | [**AFNORCallbackAuthentication**](AFNORCallbackAuthentication.md) |  | [optional] [default to undefined]
**signature** | [**AFNORCallbackSignature**](AFNORCallbackSignature.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORCallbackParameters } from '@factpulse/sdk';

const instance: AFNORCallbackParameters = {
    url,
    headers,
    authentication,
    signature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
