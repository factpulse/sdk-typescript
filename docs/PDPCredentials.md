# PDPCredentials

Credentials PDP pour la stratégie zero-storage (Strategy B).  Permet de fournir directement les credentials PDP dans la requête au lieu de les stocker dans Django.  Utile pour : - Tests ponctuels sans persister les credentials - Intégrations temporaires - Environnements de développement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_service_url** | **string** | URL de base du Flow Service AFNOR | [default to undefined]
**directory_service_url** | **string** |  | [optional] [default to undefined]
**token_url** | **string** | URL du serveur OAuth2 | [default to undefined]
**client_id** | **string** | Client ID OAuth2 | [default to undefined]
**client_secret** | **string** | Client Secret OAuth2 (sensible) | [default to undefined]

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
