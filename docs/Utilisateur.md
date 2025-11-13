# Utilisateur

Modèle Pydantic représentant les données de l\'utilisateur authentifié.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**username** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**is_active** | **boolean** |  | [default to undefined]
**is_superuser** | **boolean** |  | [optional] [default to false]
**is_staff** | **boolean** |  | [optional] [default to false]
**bypass_quota** | **boolean** |  | [optional] [default to false]
**team_id** | **number** |  | [optional] [default to undefined]
**has_quota** | **boolean** |  | [optional] [default to true]
**quota_info** | [**QuotaInfo**](QuotaInfo.md) |  | [optional] [default to undefined]
**is_trial** | **boolean** |  | [optional] [default to false]
**client_uid** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Utilisateur } from '@factpulse/sdk';

const instance: Utilisateur = {
    id,
    username,
    email,
    is_active,
    is_superuser,
    is_staff,
    bypass_quota,
    team_id,
    has_quota,
    quota_info,
    is_trial,
    client_uid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
