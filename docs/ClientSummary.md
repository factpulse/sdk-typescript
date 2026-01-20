# ClientSummary

Client list view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **string** | Unique client identifier | [default to undefined]
**name** | **string** | Client name | [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** | Whether the client is active | [default to undefined]
**hasConfigPdp** | **boolean** | Whether PDP config exists | [default to undefined]
**pdpIsActive** | **boolean** |  | [optional] [default to undefined]
**pdpIsMock** | **boolean** |  | [optional] [default to undefined]
**hasConfigChorus** | **boolean** | Whether Chorus Pro config exists | [default to undefined]
**createdAt** | **string** | Creation date | [default to undefined]
**updatedAt** | **string** | Last update date | [default to undefined]

## Example

```typescript
import { ClientSummary } from '@factpulse/sdk';

const instance: ClientSummary = {
    uid,
    name,
    siret,
    description,
    isActive,
    hasConfigPdp,
    pdpIsActive,
    pdpIsMock,
    hasConfigChorus,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
