# AFNORDirectoryServiceMtierApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSirenMetierApiV1AfnorDirectorySirenSirenGet**](#getsirenmetierapiv1afnordirectorysirensirenget) | **GET** /api/v1/afnor/directory/siren/{siren} | Récupérer une entreprise par SIREN (multi-tenant)|
|[**getSiretMetierApiV1AfnorDirectorySiretSiretGet**](#getsiretmetierapiv1afnordirectorysiretsiretget) | **GET** /api/v1/afnor/directory/siret/{siret} | Récupérer un établissement par SIRET (multi-tenant)|
|[**searchSirenMetierApiV1AfnorDirectorySirenSearchPost**](#searchsirenmetierapiv1afnordirectorysirensearchpost) | **POST** /api/v1/afnor/directory/siren/search | Rechercher des entreprises (multi-tenant)|
|[**searchSiretMetierApiV1AfnorDirectorySiretSearchPost**](#searchsiretmetierapiv1afnordirectorysiretsearchpost) | **POST** /api/v1/afnor/directory/siret/search | Rechercher des établissements (multi-tenant)|

# **getSirenMetierApiV1AfnorDirectorySirenSirenGet**
> any getSirenMetierApiV1AfnorDirectorySirenSirenGet()

Récupère les informations d\'une entreprise dans le Directory Service AFNOR. Les credentials PDP sont récupérés automatiquement via le client_uid du JWT, ou peuvent être fournis directement dans le body (zero-storage).

### Example

```typescript
import {
    AFNORDirectoryServiceMtierApi,
    Configuration,
    PDPCredentials
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORDirectoryServiceMtierApi(configuration);

let siren: string; // (default to undefined)
let pDPCredentials: PDPCredentials; // (optional)

const { status, data } = await apiInstance.getSirenMetierApiV1AfnorDirectorySirenSirenGet(
    siren,
    pDPCredentials
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pDPCredentials** | **PDPCredentials**|  | |
| **siren** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Entreprise trouvée |  -  |
|**404** | Entreprise non trouvée |  -  |
|**400** | Aucune config PDP fournie |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSiretMetierApiV1AfnorDirectorySiretSiretGet**
> any getSiretMetierApiV1AfnorDirectorySiretSiretGet()

Récupère les informations d\'un établissement dans le Directory Service AFNOR. Les credentials PDP sont récupérés automatiquement via le client_uid du JWT, ou peuvent être fournis directement dans le body (zero-storage).

### Example

```typescript
import {
    AFNORDirectoryServiceMtierApi,
    Configuration,
    PDPCredentials
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORDirectoryServiceMtierApi(configuration);

let siret: string; // (default to undefined)
let pDPCredentials: PDPCredentials; // (optional)

const { status, data } = await apiInstance.getSiretMetierApiV1AfnorDirectorySiretSiretGet(
    siret,
    pDPCredentials
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pDPCredentials** | **PDPCredentials**|  | |
| **siret** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Établissement trouvé |  -  |
|**404** | Établissement non trouvé |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchSirenMetierApiV1AfnorDirectorySirenSearchPost**
> any searchSirenMetierApiV1AfnorDirectorySirenSearchPost(bodySearchSirenMetierApiV1AfnorDirectorySirenSearchPost)

Recherche multi-critères d\'entreprises dans le Directory Service AFNOR. Les credentials PDP sont récupérés automatiquement via le client_uid du JWT, ou peuvent être fournis directement dans le body (zero-storage).

### Example

```typescript
import {
    AFNORDirectoryServiceMtierApi,
    Configuration,
    BodySearchSirenMetierApiV1AfnorDirectorySirenSearchPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORDirectoryServiceMtierApi(configuration);

let bodySearchSirenMetierApiV1AfnorDirectorySirenSearchPost: BodySearchSirenMetierApiV1AfnorDirectorySirenSearchPost; //

const { status, data } = await apiInstance.searchSirenMetierApiV1AfnorDirectorySirenSearchPost(
    bodySearchSirenMetierApiV1AfnorDirectorySirenSearchPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodySearchSirenMetierApiV1AfnorDirectorySirenSearchPost** | **BodySearchSirenMetierApiV1AfnorDirectorySirenSearchPost**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Résultats de recherche |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchSiretMetierApiV1AfnorDirectorySiretSearchPost**
> any searchSiretMetierApiV1AfnorDirectorySiretSearchPost(bodySearchSiretMetierApiV1AfnorDirectorySiretSearchPost)

Recherche multi-critères d\'établissements dans le Directory Service AFNOR. Les credentials PDP sont récupérés automatiquement via le client_uid du JWT, ou peuvent être fournis directement dans le body (zero-storage).

### Example

```typescript
import {
    AFNORDirectoryServiceMtierApi,
    Configuration,
    BodySearchSiretMetierApiV1AfnorDirectorySiretSearchPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORDirectoryServiceMtierApi(configuration);

let bodySearchSiretMetierApiV1AfnorDirectorySiretSearchPost: BodySearchSiretMetierApiV1AfnorDirectorySiretSearchPost; //

const { status, data } = await apiInstance.searchSiretMetierApiV1AfnorDirectorySiretSearchPost(
    bodySearchSiretMetierApiV1AfnorDirectorySiretSearchPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodySearchSiretMetierApiV1AfnorDirectorySiretSearchPost** | **BodySearchSiretMetierApiV1AfnorDirectorySiretSearchPost**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Résultats de recherche |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

