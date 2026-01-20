# PDPConfigResponse

PDP configuration (secrets masked).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isConfigured** | **boolean** | Whether PDP config exists | [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**modeSandbox** | **boolean** |  | [optional] [default to undefined]
**flowServiceUrl** | **string** |  | [optional] [default to undefined]
**tokenUrl** | **string** |  | [optional] [default to undefined]
**oauthClientId** | **string** |  | [optional] [default to undefined]
**secretStatus** | [**SecretStatus**](SecretStatus.md) |  | [optional] [default to undefined]
**lastTestAt** | **string** |  | [optional] [default to undefined]
**lastTestSuccess** | **boolean** |  | [optional] [default to undefined]
**lastTestError** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PDPConfigResponse } from '@factpulse/sdk';

const instance: PDPConfigResponse = {
    isConfigured,
    id,
    isActive,
    modeSandbox,
    flowServiceUrl,
    tokenUrl,
    oauthClientId,
    secretStatus,
    lastTestAt,
    lastTestSuccess,
    lastTestError,
    createdAt,
    updatedAt,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
