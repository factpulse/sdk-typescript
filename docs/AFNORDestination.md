# AFNORDestination

Specific configuration for AFNOR PDP destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to TypeEnum_Afnor]
**credentials** | [**AFNORCredentials**](AFNORCredentials.md) |  | [optional] [default to undefined]
**flowSyntax** | **string** | Flow syntax to send | [optional] [default to FlowSyntaxEnum_FacturX]
**trackingId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AFNORDestination } from '@factpulse/sdk';

const instance: AFNORDestination = {
    type,
    credentials,
    flowSyntax,
    trackingId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
