# AFNORResult

Result of submission to AFNOR PDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowId** | **string** | Submitted flow identifier | [default to undefined]
**trackingId** | **string** |  | [optional] [default to undefined]
**sha256** | **string** | SHA-256 hash of submitted file | [default to undefined]
**flowSyntax** | **string** | Flow syntax | [default to undefined]
**flowProfile** | **string** |  | [optional] [default to undefined]
**flowType** | **string** |  | [optional] [default to undefined]
**processingRule** | **string** |  | [optional] [default to undefined]
**processingRuleSource** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORResult } from '@factpulse/sdk';

const instance: AFNORResult = {
    flowId,
    trackingId,
    sha256,
    flowSyntax,
    flowProfile,
    flowType,
    processingRule,
    processingRuleSource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
