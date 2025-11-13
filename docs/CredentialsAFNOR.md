# CredentialsAFNOR

Credentials AFNOR PDP optionnels.  **MODE 1 - Récupération via JWT (recommandé) :** Ne pas fournir ce champ `credentials` dans le payload. Les credentials PDP seront récupérées automatiquement via client_uid du JWT (0-trust).  **MODE 2 - Credentials dans le payload (zero-storage) :** Fournir tous les champs requis ci-dessous. Utile pour tests ou intégrations tierces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **string** |  | [optional] [default to undefined]
**client_secret** | **string** |  | [optional] [default to undefined]
**flow_service_url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CredentialsAFNOR } from '@factpulse/sdk';

const instance: CredentialsAFNOR = {
    client_id,
    client_secret,
    flow_service_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
