# FactureElectroniqueRestApiSchemasChorusProChorusProCredentials

Chorus Pro credentials for Zero-Trust mode.  **Zero-Trust Mode**: Credentials are passed in each request and are NEVER stored.  **Security**: - Credentials are never persisted in the database - They are used only for the duration of the request - Secure transmission via HTTPS  **Use cases**: - High-security environments (banks, administrations) - Strict GDPR compliance - Tests with temporary credentials - Users who don\'t want to store their credentials

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**piste_client_id** | **string** | PISTE Client ID (government API portal) | [default to undefined]
**piste_client_secret** | **string** | PISTE Client Secret | [default to undefined]
**chorus_pro_login** | **string** | Chorus Pro login | [default to undefined]
**chorus_pro_password** | **string** | Chorus Pro password | [default to undefined]
**sandbox** | **boolean** | Use sandbox environment (true) or production (false) | [optional] [default to true]

## Example

```typescript
import { FactureElectroniqueRestApiSchemasChorusProChorusProCredentials } from '@factpulse/sdk';

const instance: FactureElectroniqueRestApiSchemasChorusProChorusProCredentials = {
    piste_client_id,
    piste_client_secret,
    chorus_pro_login,
    chorus_pro_password,
    sandbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
