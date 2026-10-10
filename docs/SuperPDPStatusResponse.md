# SuperPDPStatusResponse

SuperPDP connection status for a client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected** | **boolean** | Whether this client has connected its SuperPDP account | [default to undefined]
**connectedAt** | **string** |  | [optional] [default to undefined]
**expiresAt** | **string** |  | [optional] [default to undefined]
**modeSandbox** | **boolean** |  | [optional] [default to undefined]
**lastError** | **string** | Last token refresh error, if any | [optional] [default to '']

## Example

```typescript
import { SuperPDPStatusResponse } from '@factpulse/sdk';

const instance: SuperPDPStatusResponse = {
    connected,
    connectedAt,
    expiresAt,
    modeSandbox,
    lastError,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
