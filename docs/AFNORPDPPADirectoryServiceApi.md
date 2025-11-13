# AFNORPDPPADirectoryServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet**](#directoryhealthcheckproxyapiv1afnordirectoryv1healthcheckget) | **GET** /api/v1/afnor/directory/v1/healthcheck | Healthcheck Directory Service|
|[**getCompanyProxyApiV1AfnorDirectoryV1CompaniesSirenGet**](#getcompanyproxyapiv1afnordirectoryv1companiessirenget) | **GET** /api/v1/afnor/directory/v1/companies/{siren} | Récupérer une entreprise|
|[**searchCompaniesProxyApiV1AfnorDirectoryV1CompaniesSearchPost**](#searchcompaniesproxyapiv1afnordirectoryv1companiessearchpost) | **POST** /api/v1/afnor/directory/v1/companies/search | Rechercher des entreprises|

# **directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet**
> any directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet()

Vérifier la disponibilité du Directory Service

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

const { status, data } = await apiInstance.directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet();
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

# **getCompanyProxyApiV1AfnorDirectoryV1CompaniesSirenGet**
> any getCompanyProxyApiV1AfnorDirectoryV1CompaniesSirenGet()

Récupérer les informations d\'une entreprise par son SIREN

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

let siren: string; // (default to undefined)

const { status, data } = await apiInstance.getCompanyProxyApiV1AfnorDirectoryV1CompaniesSirenGet(
    siren
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siren** | [**string**] |  | defaults to undefined|


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
|**200** | Informations de l\&#39;entreprise |  -  |
|**404** | Entreprise non trouvée |  -  |
|**401** | Non authentifié |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchCompaniesProxyApiV1AfnorDirectoryV1CompaniesSearchPost**
> any searchCompaniesProxyApiV1AfnorDirectoryV1CompaniesSearchPost()

Rechercher des entreprises dans l\'annuaire AFNOR

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

const { status, data } = await apiInstance.searchCompaniesProxyApiV1AfnorDirectoryV1CompaniesSearchPost();
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
|**401** | Non authentifié |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

