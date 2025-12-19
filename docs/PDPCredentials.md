# PDPCredentials

PDP credentials for zero-storage strategy (Strategy B).  Allows providing PDP credentials directly in the request instead of storing them in Django.  Useful for: - Ad-hoc tests without persisting credentials - Temporary integrations - Development environments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_service_url** | **string** | Base URL of the AFNOR Flow Service | [default to undefined]
**directory_service_url** | **string** |  | [optional] [default to undefined]
**token_url** | **string** | OAuth2 server URL | [default to undefined]
**client_id** | **string** | OAuth2 Client ID | [default to undefined]
**client_secret** | **string** | OAuth2 Client Secret (sensitive) | [default to undefined]

## Example

```typescript
import { PDPCredentials } from '@factpulse/sdk';

const instance: PDPCredentials = {
    flow_service_url,
    directory_service_url,
    token_url,
    client_id,
    client_secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
