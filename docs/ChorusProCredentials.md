# ChorusProCredentials

Optional Chorus Pro credentials.  **MODE 1 - JWT retrieval (recommended):** Do not provide this `credentials` field in the payload. Credentials will be automatically retrieved via client_uid from JWT (0-trust).  **MODE 2 - Credentials in payload:** Provide all required fields below. Useful for tests or third-party integrations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pisteClientId** | **string** |  | [optional] [default to undefined]
**pisteClientSecret** | **string** |  | [optional] [default to undefined]
**chorusLogin** | **string** |  | [optional] [default to undefined]
**chorusPassword** | **string** |  | [optional] [default to undefined]
**sandboxMode** | **boolean** | [MODE 2] Use sandbox mode (default: True) | [optional] [default to true]

## Example

```typescript
import { ChorusProCredentials } from '@factpulse/sdk';

const instance: ChorusProCredentials = {
    pisteClientId,
    pisteClientSecret,
    chorusLogin,
    chorusPassword,
    sandboxMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
