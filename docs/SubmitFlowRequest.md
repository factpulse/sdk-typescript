# SubmitFlowRequest

Request to submit an invoice to a PDP/PA via AFNOR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowName** | **string** | Flow name (e.g., \&#39;Invoice 2025-001\&#39;) | [default to undefined]
**flowSyntax** | [**FlowSyntax**](FlowSyntax.md) | Flow syntax (CII for Factur-X) | [optional] [default to undefined]
**flowProfile** | [**FlowProfile**](FlowProfile.md) |  | [optional] [default to undefined]
**trackingId** | **string** |  | [optional] [default to undefined]
**requestId** | **string** |  | [optional] [default to undefined]
**pdpCredentials** | [**PDPCredentials**](PDPCredentials.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitFlowRequest } from '@factpulse/sdk';

const instance: SubmitFlowRequest = {
    flowName,
    flowSyntax,
    flowProfile,
    trackingId,
    requestId,
    pdpCredentials,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
