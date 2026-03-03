# AFNORFullFlowInfoExtension

Extension schema to build FFullFlowInfo, Flow schemas

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowId** | **string** | Unique identifier supporting UUID but not only, for flexibility purpose | [default to undefined]
**submittedAt** | **string** | The flow submission date and time (the date and time when the flow was created on the system) This property should be used by the API consumer as a time reference to avoid clock synchronization issues  | [default to undefined]

## Example

```typescript
import { AFNORFullFlowInfoExtension } from '@factpulse/sdk';

const instance: AFNORFullFlowInfoExtension = {
    flowId,
    submittedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
