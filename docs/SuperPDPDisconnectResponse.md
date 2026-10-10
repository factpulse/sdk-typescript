# SuperPDPDisconnectResponse

Response after disconnecting SuperPDP for a client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **boolean** | Whether the disconnection completed successfully | [default to undefined]
**deleted** | **boolean** | Whether a SuperPDP connection existed and was removed | [default to undefined]

## Example

```typescript
import { SuperPDPDisconnectResponse } from '@factpulse/sdk';

const instance: SuperPDPDisconnectResponse = {
    success,
    deleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
