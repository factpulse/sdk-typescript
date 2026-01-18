# FactureElectroniqueRestApiSchemasChorusProChorusProCredentials

Chorus Pro credentials for Zero-Trust mode.  **Zero-Trust Mode**: Credentials are passed in each request and are NEVER stored.  **Security**: - Credentials are never persisted in the database - They are used only for the duration of the request - Secure transmission via HTTPS  **Use cases**: - High-security environments (banks, administrations) - Strict GDPR compliance - Tests with temporary credentials - Users who don\'t want to store their credentials

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pisteClientId** | **string** | PISTE Client ID (government API portal) | [default to undefined]
**pisteClientSecret** | **string** | PISTE Client Secret | [default to undefined]
**chorusProLogin** | **string** | Chorus Pro login | [default to undefined]
**chorusProPassword** | **string** | Chorus Pro password | [default to undefined]
**sandbox** | **boolean** | Use sandbox environment (true) or production (false) | [optional] [default to true]

## Example

```typescript
import { FactureElectroniqueRestApiSchemasChorusProChorusProCredentials } from '@factpulse/sdk';

const instance: FactureElectroniqueRestApiSchemasChorusProChorusProCredentials = {
    pisteClientId,
    pisteClientSecret,
    chorusProLogin,
    chorusProPassword,
    sandbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
