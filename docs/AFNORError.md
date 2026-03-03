# AFNORError

Error code

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorCode** | **string** | Short numerical or alphanumerical code that identifies precisely a unique error. | [default to undefined]
**errorMessage** | **string** | Contains information on the error. Not intended to be displayed to an end user. For security reasons, a tradeoff between clarity &amp; security shall be found. | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to 'about:blank']
**details** | **string** |  | [optional] [default to undefined]
**instance** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORError } from '@factpulse/sdk';

const instance: AFNORError = {
    errorCode,
    errorMessage,
    type,
    details,
    instance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
