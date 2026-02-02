# PDPConfigUpdateRequest

PDP configuration update request.  For encryption_mode=\'double\', the X-Encryption-Key header must also be provided containing a base64-encoded AES-256 key (32 bytes).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isActive** | **boolean** | Whether config is active | [optional] [default to true]
**modeSandbox** | **boolean** | Sandbox mode | [optional] [default to false]
**flowServiceUrl** | **string** | PDP Flow Service URL | [default to undefined]
**tokenUrl** | **string** | PDP OAuth token URL | [default to undefined]
**oauthClientId** | **string** | OAuth Client ID | [default to undefined]
**clientSecret** | **string** | OAuth Client Secret (sent but never returned) | [default to undefined]
**encryptionMode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PDPConfigUpdateRequest } from '@factpulse/sdk';

const instance: PDPConfigUpdateRequest = {
    isActive,
    modeSandbox,
    flowServiceUrl,
    tokenUrl,
    oauthClientId,
    clientSecret,
    encryptionMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
