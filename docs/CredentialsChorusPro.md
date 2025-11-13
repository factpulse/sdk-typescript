# CredentialsChorusPro

Credentials Chorus Pro optionnels.  **MODE 1 - Récupération via JWT (recommandé) :** Ne pas fournir ce champ `credentials` dans le payload. Les credentials seront récupérés automatiquement via client_uid du JWT (0-trust).  **MODE 2 - Credentials dans le payload :** Fournir tous les champs requis ci-dessous. Utile pour tests ou intégrations tierces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**piste_client_id** | **string** |  | [optional] [default to undefined]
**piste_client_secret** | **string** |  | [optional] [default to undefined]
**chorus_login** | **string** |  | [optional] [default to undefined]
**chorus_password** | **string** |  | [optional] [default to undefined]
**mode_sandbox** | **boolean** | [MODE 2] Utiliser le mode sandbox (défaut: True) | [optional] [default to true]

## Example

```typescript
import { CredentialsChorusPro } from '@factpulse/sdk';

const instance: CredentialsChorusPro = {
    piste_client_id,
    piste_client_secret,
    chorus_login,
    chorus_password,
    mode_sandbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
