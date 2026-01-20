# ClientManagementApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateClientApiV1ClientsUidActiverPost**](#activateclientapiv1clientsuidactiverpost) | **POST** /api/v1/clients/{uid}/activer | Activate a client|
|[**createClientApiV1ClientsPost**](#createclientapiv1clientspost) | **POST** /api/v1/clients | Create a client|
|[**deactivateClientApiV1ClientsUidDesactiverPost**](#deactivateclientapiv1clientsuiddesactiverpost) | **POST** /api/v1/clients/{uid}/desactiver | Deactivate a client|
|[**getClientApiV1ClientsUidGet**](#getclientapiv1clientsuidget) | **GET** /api/v1/clients/{uid} | Get client details|
|[**getPdpConfigApiV1ClientsUidPdpConfigGet**](#getpdpconfigapiv1clientsuidpdpconfigget) | **GET** /api/v1/clients/{uid}/pdp-config | Get client PDP configuration|
|[**listClientsApiV1ClientsGet**](#listclientsapiv1clientsget) | **GET** /api/v1/clients | List clients|
|[**updateClientApiV1ClientsUidPatch**](#updateclientapiv1clientsuidpatch) | **PATCH** /api/v1/clients/{uid} | Update a client|
|[**updatePdpConfigApiV1ClientsUidPdpConfigPut**](#updatepdpconfigapiv1clientsuidpdpconfigput) | **PUT** /api/v1/clients/{uid}/pdp-config | Configure client PDP|

# **activateClientApiV1ClientsUidActiverPost**
> ClientActivateResponse activateClientApiV1ClientsUidActiverPost()

Activate a deactivated client.  **Scope**: Client level (JWT with client_uid that must match {uid})

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.activateClientApiV1ClientsUidActiverPost(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ClientActivateResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createClientApiV1ClientsPost**
> ClientDetail createClientApiV1ClientsPost(clientCreateRequest)

Create a new client for the account.  **Scope**: Account level (JWT without client_uid)  **Fields**: - `name`: Client name (required) - `description`: Optional description - `siret`: Optional SIRET (14 digits)

### Example

```typescript
import {
    ClientManagementApi,
    Configuration,
    ClientCreateRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let clientCreateRequest: ClientCreateRequest; //

const { status, data } = await apiInstance.createClientApiV1ClientsPost(
    clientCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientCreateRequest** | **ClientCreateRequest**|  | |


### Return type

**ClientDetail**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateClientApiV1ClientsUidDesactiverPost**
> ClientActivateResponse deactivateClientApiV1ClientsUidDesactiverPost()

Deactivate an active client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Note**: A deactivated client cannot be used for API calls (AFNOR, Chorus Pro, etc.).

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.deactivateClientApiV1ClientsUidDesactiverPost(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ClientActivateResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClientApiV1ClientsUidGet**
> ClientDetail getClientApiV1ClientsUidGet()

Get details of a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Security**: If the JWT contains a client_uid, it must match the {uid} in the URL, otherwise a 403 error is returned.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.getClientApiV1ClientsUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ClientDetail**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPdpConfigApiV1ClientsUidPdpConfigGet**
> PDPConfigResponse getPdpConfigApiV1ClientsUidPdpConfigGet()

Get the PDP (PA/PDP) configuration for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Security**: The client secret is never returned. Only a status (`secretStatus`) indicates whether a secret is configured.  **Response**: - If configured: all config details (URLs, client_id, secret status) - If not configured: `isConfigured: false` with a message

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; // (default to undefined)

const { status, data } = await apiInstance.getPdpConfigApiV1ClientsUidPdpConfigGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**PDPConfigResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listClientsApiV1ClientsGet**
> ClientListResponse listClientsApiV1ClientsGet()

Paginated list of clients for the account.  **Scope**: Account level (JWT without client_uid)  **Pagination**: - `page`: Page number (default: 1) - `pageSize`: Page size (default: 20, max: 100)

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let page: number; //Page number (optional) (default to 1)
let pageSize: number; //Page size (optional) (default to 20)

const { status, data } = await apiInstance.listClientsApiV1ClientsGet(
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **pageSize** | [**number**] | Page size | (optional) defaults to 20|


### Return type

**ClientListResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateClientApiV1ClientsUidPatch**
> ClientDetail updateClientApiV1ClientsUidPatch(clientUpdateRequest)

Update client information (partial update).  **Scope**: Client level (JWT with client_uid that must match {uid})  **Updatable fields**: - `name`: Client name - `description`: Description - `siret`: SIRET (14 digits)  Only provided fields are updated.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration,
    ClientUpdateRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; // (default to undefined)
let clientUpdateRequest: ClientUpdateRequest; //

const { status, data } = await apiInstance.updateClientApiV1ClientsUidPatch(
    uid,
    clientUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientUpdateRequest** | **ClientUpdateRequest**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**ClientDetail**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePdpConfigApiV1ClientsUidPdpConfigPut**
> PDPConfigResponse updatePdpConfigApiV1ClientsUidPdpConfigPut(pDPConfigUpdateRequest)

Configure or update the PDP (PA/PDP) configuration for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Required fields**: - `flowServiceUrl`: PDP Flow Service URL - `tokenUrl`: PDP OAuth token URL - `oauthClientId`: OAuth Client ID - `clientSecret`: OAuth Client Secret (sent but NEVER returned)  **Optional fields**: - `isActive`: Enable/disable the config (default: true) - `modeSandbox`: Sandbox mode (default: false)  **Security**: The `clientSecret` is stored encrypted on Django side and is never returned in API responses.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration,
    PDPConfigUpdateRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; // (default to undefined)
let pDPConfigUpdateRequest: PDPConfigUpdateRequest; //

const { status, data } = await apiInstance.updatePdpConfigApiV1ClientsUidPdpConfigPut(
    uid,
    pDPConfigUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pDPConfigUpdateRequest** | **PDPConfigUpdateRequest**|  | |
| **uid** | [**string**] |  | defaults to undefined|


### Return type

**PDPConfigResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**401** | Missing or invalid JWT token |  -  |
|**403** | Access denied |  -  |
|**404** | Client not found |  -  |
|**500** | Server error |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

