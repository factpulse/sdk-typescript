# SubmitFlowRequest

Request to submit an invoice to a PDP/PA via AFNOR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_name** | **string** | Flow name (e.g., \&#39;Invoice 2025-001\&#39;) | [default to undefined]
**flow_syntax** | [**FlowSyntax**](FlowSyntax.md) | Flow syntax (CII for Factur-X) | [optional] [default to undefined]
**flow_profile** | [**FlowProfile**](FlowProfile.md) |  | [optional] [default to undefined]
**tracking_id** | **string** |  | [optional] [default to undefined]
**request_id** | **string** |  | [optional] [default to undefined]
**pdp_credentials** | [**PDPCredentials**](PDPCredentials.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitFlowRequest } from '@factpulse/sdk';

const instance: SubmitFlowRequest = {
    flow_name,
    flow_syntax,
    flow_profile,
    tracking_id,
    request_id,
    pdp_credentials,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
