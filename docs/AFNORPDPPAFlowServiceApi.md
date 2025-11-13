# AFNORPDPPAFlowServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet**](#downloadflowproxyapiv1afnorflowv1flowsflowidget) | **GET** /api/v1/afnor/flow/v1/flows/{flowId} | Télécharger un flux|
|[**flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet**](#flowhealthcheckproxyapiv1afnorflowv1healthcheckget) | **GET** /api/v1/afnor/flow/v1/healthcheck | Healthcheck Flow Service|
|[**searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost**](#searchflowsproxyapiv1afnorflowv1flowssearchpost) | **POST** /api/v1/afnor/flow/v1/flows/search | Rechercher des flux|
|[**submitFlowProxyApiV1AfnorFlowV1FlowsPost**](#submitflowproxyapiv1afnorflowv1flowspost) | **POST** /api/v1/afnor/flow/v1/flows | Soumettre un flux de facturation|

# **downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet**
> any downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet()

Télécharger le fichier PDF/A-3 d\'un flux de facturation (utilise le client_uid du JWT)

### Example

```typescript
import {
    AFNORPDPPAFlowServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAFlowServiceApi(configuration);

let flowId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet(
    flowId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fichier PDF/A-3 |  -  |
|**400** | Configuration PDP manquante |  -  |
|**401** | Non authentifié - Token JWT manquant ou invalide |  -  |
|**404** | Flux non trouvé ou client_uid invalide |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet**
> any flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet()

Vérifier la disponibilité du Flow Service

### Example

```typescript
import {
    AFNORPDPPAFlowServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAFlowServiceApi(configuration);

const { status, data } = await apiInstance.flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet();
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
|**200** | Service opérationnel |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost**
> any searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost()

Rechercher des flux de facturation selon des critères (utilise le client_uid du JWT)

### Example

```typescript
import {
    AFNORPDPPAFlowServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAFlowServiceApi(configuration);

const { status, data } = await apiInstance.searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost();
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
|**200** | Résultats de recherche |  -  |
|**400** | Configuration PDP manquante |  -  |
|**401** | Non authentifié - Token JWT manquant ou invalide |  -  |
|**404** | Client PDP non trouvé (client_uid invalide) |  -  |
|**429** | Trop de requêtes - Rate limit atteint (60 recherches/minute) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitFlowProxyApiV1AfnorFlowV1FlowsPost**
> any submitFlowProxyApiV1AfnorFlowV1FlowsPost()

Soumet une facture électronique à une Plateforme de Dématérialisation Partenaire (PDP) conformément à la norme AFNOR XP Z12-013

### Example

```typescript
import {
    AFNORPDPPAFlowServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAFlowServiceApi(configuration);

const { status, data } = await apiInstance.submitFlowProxyApiV1AfnorFlowV1FlowsPost();
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
|**200** | Successful Response |  -  |
|**201** | Flux soumis avec succès |  -  |
|**400** | Requête invalide ou configuration PDP manquante |  -  |
|**401** | Non authentifié - Token JWT manquant ou invalide |  -  |
|**403** | Non autorisé - Quota dépassé ou permissions insuffisantes |  -  |
|**404** | Client PDP non trouvé (client_uid invalide) |  -  |
|**429** | Trop de requêtes - Rate limit atteint (30 soumissions/minute) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

