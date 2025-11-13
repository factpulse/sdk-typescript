# UtilisateurApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**obtenirInfosUtilisateurApiV1MoiGet**](#obtenirinfosutilisateurapiv1moiget) | **GET** /api/v1/moi | Obtenir les informations de l\&#39;utilisateur connecté|

# **obtenirInfosUtilisateurApiV1MoiGet**
> any obtenirInfosUtilisateurApiV1MoiGet()

Retourne les informations de l\'utilisateur authentifié.  Cet endpoint permet de : - Vérifier que l\'authentification fonctionne - Obtenir les détails du compte connecté - Tester la validité du token JWT - Consulter son quota de consommation  **Nécessite une authentification valide.**

### Example

```typescript
import {
    UtilisateurApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new UtilisateurApi(configuration);

const { status, data } = await apiInstance.obtenirInfosUtilisateurApiV1MoiGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Informations de l\&#39;utilisateur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

