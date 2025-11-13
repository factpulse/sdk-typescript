# ChorusProCredentials

Credentials Chorus Pro pour mode Zero-Trust.  **Mode Zero-Trust** : Les credentials sont passés dans chaque requête et ne sont JAMAIS stockés.  **Sécurité** : - Les credentials ne sont jamais persistés dans la base de données - Ils sont utilisés uniquement pour la durée de la requête - Transmission sécurisée via HTTPS  **Cas d\'usage** : - Environnements à haute sécurité (banques, administrations) - Conformité RGPD stricte - Tests avec credentials temporaires - Utilisateurs ne voulant pas stocker leurs credentials

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**piste_client_id** | **string** | Client ID PISTE (portail API gouvernement) | [default to undefined]
**piste_client_secret** | **string** | Client Secret PISTE | [default to undefined]
**chorus_pro_login** | **string** | Login Chorus Pro | [default to undefined]
**chorus_pro_password** | **string** | Mot de passe Chorus Pro | [default to undefined]
**sandbox** | **boolean** | Utiliser l\&#39;environnement sandbox (true) ou production (false) | [optional] [default to true]

## Example

```typescript
import { ChorusProCredentials } from '@factpulse/sdk';

const instance: ChorusProCredentials = {
    piste_client_id,
    piste_client_secret,
    chorus_pro_login,
    chorus_pro_password,
    sandbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
