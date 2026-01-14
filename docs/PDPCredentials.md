# PDPCredentials

PDP credentials for zero-storage strategy (Strategy B).  Allows providing PDP credentials directly in the request instead of storing them in Django.  Useful for: - Ad-hoc tests without persisting credentials - Temporary integrations - Development environments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowServiceUrl** | **string** | Base URL of the AFNOR Flow Service | [default to undefined]
**directoryServiceUrl** | **string** |  | [optional] [default to undefined]
**tokenUrl** | **string** | OAuth2 server URL | [default to undefined]
**clientId** | **string** | OAuth2 Client ID | [default to undefined]
**clientSecret** | **string** | OAuth2 Client Secret (sensitive) | [default to undefined]

## Example

```typescript
import { PDPCredentials } from '@factpulse/sdk';

const instance: PDPCredentials = {
    flowServiceUrl,
    directoryServiceUrl,
    tokenUrl,
    clientId,
    clientSecret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
