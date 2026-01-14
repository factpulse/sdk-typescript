# AFNORFlowInfo

Signaling of the flow: - The tracking id is an external identifier and is used to track the flow by the sender - The sha256 is the fingerprint of the attached file:   - if provided in the request: it should be checked once received   - if not provided in the request: it should be computed and returned in the response 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [optional] [default to undefined]
**name** | **string** | Name of the file | [optional] [default to undefined]
**processingRule** | [**AFNORProcessingRule**](AFNORProcessingRule.md) |  | [optional] [default to undefined]
**flowSyntax** | [**AFNORFlowSyntax**](AFNORFlowSyntax.md) |  | [default to undefined]
**flowProfile** | [**AFNORFlowProfile**](AFNORFlowProfile.md) |  | [optional] [default to undefined]
**sha256** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORFlowInfo } from '@factpulse/sdk';

const instance: AFNORFlowInfo = {
    trackingId,
    name,
    processingRule,
    flowSyntax,
    flowProfile,
    sha256,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
