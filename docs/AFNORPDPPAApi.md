# AFNORPDPPAApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAfnorCredentialsApiV1AfnorCredentialsGet**](#getafnorcredentialsapiv1afnorcredentialsget) | **GET** /api/v1/afnor/credentials | Récupérer les credentials AFNOR stockés|
|[**getFluxEntrantApiV1AfnorFluxEntrantsFlowIdGet**](#getfluxentrantapiv1afnorfluxentrantsflowidget) | **GET** /api/v1/afnor/flux-entrants/{flow_id} | Récupérer et extraire une facture entrante|
|[**oauthTokenProxyApiV1AfnorOauthTokenPost**](#oauthtokenproxyapiv1afnoroauthtokenpost) | **POST** /api/v1/afnor/oauth/token | Endpoint OAuth2 pour authentification AFNOR|

# **getAfnorCredentialsApiV1AfnorCredentialsGet**
> any getAfnorCredentialsApiV1AfnorCredentialsGet()

Récupère les credentials AFNOR/PDP stockés pour le client_uid du JWT. Cet endpoint est utilisé par le SDK en mode \'stored\' pour récupérer les credentials avant de faire l\'OAuth AFNOR lui-même.

### Example

```typescript
import {
    AFNORPDPPAApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAApi(configuration);

const { status, data } = await apiInstance.getAfnorCredentialsApiV1AfnorCredentialsGet();
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
|**200** | Credentials AFNOR récupérés avec succès |  -  |
|**400** | Aucun client_uid dans le JWT |  -  |
|**401** | Non authentifié - Token JWT manquant ou invalide |  -  |
|**404** | Client non trouvé ou pas de credentials AFNOR configurés |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFluxEntrantApiV1AfnorFluxEntrantsFlowIdGet**
> FactureEntrante getFluxEntrantApiV1AfnorFluxEntrantsFlowIdGet()

Télécharge un flux entrant depuis la PDP AFNOR et extrait les métadonnées de la facture vers un format JSON unifié. Supporte les formats Factur-X, CII et UBL.

### Example

```typescript
import {
    AFNORPDPPAApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAApi(configuration);

let flowId: string; // (default to undefined)

const { status, data } = await apiInstance.getFluxEntrantApiV1AfnorFluxEntrantsFlowIdGet(
    flowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowId** | [**string**] |  | defaults to undefined|


### Return type

**FactureEntrante**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Facture extraite avec succès |  -  |
|**400** | Format de facture non supporté ou invalide |  -  |
|**401** | Non authentifié |  -  |
|**404** | Flux non trouvé |  -  |
|**503** | Service PDP indisponible |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthTokenProxyApiV1AfnorOauthTokenPost**
> any oauthTokenProxyApiV1AfnorOauthTokenPost()

Endpoint proxy OAuth2 pour obtenir un token d\'accès AFNOR. Fait proxy vers le mock AFNOR (sandbox) ou la vraie PDP selon MOCK_AFNOR_BASE_URL. Cet endpoint est public (pas d\'auth Django requise) car il est appelé par le SDK AFNOR.

### Example

```typescript
import {
    AFNORPDPPAApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAApi(configuration);

const { status, data } = await apiInstance.oauthTokenProxyApiV1AfnorOauthTokenPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Token OAuth2 acquis avec succès |  -  |
|**401** | Credentials invalides |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

