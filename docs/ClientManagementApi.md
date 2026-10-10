# ClientManagementApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateClientApiV1ClientsUidActiverPost**](#activateclientapiv1clientsuidactiverpost) | **POST** /api/v1/clients/{uid}/activer | Activate a client|
|[**createClientApiV1ClientsPost**](#createclientapiv1clientspost) | **POST** /api/v1/clients | Create a client|
|[**deactivateClientApiV1ClientsUidDesactiverPost**](#deactivateclientapiv1clientsuiddesactiverpost) | **POST** /api/v1/clients/{uid}/desactiver | Deactivate a client|
|[**deleteWebhookSecretApiV1ClientsUidWebhookSecretDelete**](#deletewebhooksecretapiv1clientsuidwebhooksecretdelete) | **DELETE** /api/v1/clients/{uid}/webhook-secret | Delete webhook secret|
|[**disconnectSuperpdpApiV1ClientsUidSuperpdpDelete**](#disconnectsuperpdpapiv1clientsuidsuperpdpdelete) | **DELETE** /api/v1/clients/{uid}/superpdp | Disconnect SuperPDP|
|[**generateWebhookSecretApiV1ClientsUidWebhookSecretGeneratePost**](#generatewebhooksecretapiv1clientsuidwebhooksecretgeneratepost) | **POST** /api/v1/clients/{uid}/webhook-secret/generate | Generate webhook secret|
|[**getClientApiV1ClientsUidGet**](#getclientapiv1clientsuidget) | **GET** /api/v1/clients/{uid} | Get client details|
|[**getPdpConfigApiV1ClientsUidPdpConfigGet**](#getpdpconfigapiv1clientsuidpdpconfigget) | **GET** /api/v1/clients/{uid}/pdp-config | Get client PDP configuration|
|[**getSuperpdpConnectUrlApiV1ClientsUidSuperpdpConnectUrlPost**](#getsuperpdpconnecturlapiv1clientsuidsuperpdpconnecturlpost) | **POST** /api/v1/clients/{uid}/superpdp/connect-url | Get SuperPDP connection URL|
|[**getSuperpdpStatusApiV1ClientsUidSuperpdpStatusGet**](#getsuperpdpstatusapiv1clientsuidsuperpdpstatusget) | **GET** /api/v1/clients/{uid}/superpdp/status | Get SuperPDP connection status|
|[**getWebhookSecretStatusApiV1ClientsUidWebhookSecretStatusGet**](#getwebhooksecretstatusapiv1clientsuidwebhooksecretstatusget) | **GET** /api/v1/clients/{uid}/webhook-secret/status | Get webhook secret status|
|[**listClientsApiV1ClientsGet**](#listclientsapiv1clientsget) | **GET** /api/v1/clients | List clients|
|[**rotateEncryptionKeyApiV1ClientsUidRotateEncryptionKeyPost**](#rotateencryptionkeyapiv1clientsuidrotateencryptionkeypost) | **POST** /api/v1/clients/{uid}/rotate-encryption-key | Rotate client encryption key|
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

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.activateClientApiV1ClientsUidActiverPost(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**ClientActivateResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.deactivateClientApiV1ClientsUidDesactiverPost(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**ClientActivateResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **deleteWebhookSecretApiV1ClientsUidWebhookSecretDelete**
> WebhookSecretDeleteResponse deleteWebhookSecretApiV1ClientsUidWebhookSecretDelete()

Delete the webhook secret for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **After deletion**: Webhooks for this client will use the global server key for HMAC signature instead of a client-specific key.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.deleteWebhookSecretApiV1ClientsUidWebhookSecretDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**WebhookSecretDeleteResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **disconnectSuperpdpApiV1ClientsUidSuperpdpDelete**
> SuperPDPDisconnectResponse disconnectSuperpdpApiV1ClientsUidSuperpdpDelete()

Disconnect SuperPDP for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  Revokes the stored refresh token with SuperPDP (RFC 7009) and deletes the stored tokens. The client can reconnect later via the connect-url endpoint.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.disconnectSuperpdpApiV1ClientsUidSuperpdpDelete(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**SuperPDPDisconnectResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **generateWebhookSecretApiV1ClientsUidWebhookSecretGeneratePost**
> WebhookSecretGenerateResponse generateWebhookSecretApiV1ClientsUidWebhookSecretGeneratePost()

Generate or regenerate the webhook secret for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Important**: Save the returned secret immediately - it will never be shown again. The secret is used to sign webhooks sent by the server (HMAC-SHA256).  **If a secret already exists**: It will be replaced by the new one.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.generateWebhookSecretApiV1ClientsUidWebhookSecretGeneratePost(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**WebhookSecretGenerateResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.getClientApiV1ClientsUidGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**ClientDetail**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.getPdpConfigApiV1ClientsUidPdpConfigGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**PDPConfigResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **getSuperpdpConnectUrlApiV1ClientsUidSuperpdpConnectUrlPost**
> SuperPDPConnectURLResponse getSuperpdpConnectUrlApiV1ClientsUidSuperpdpConnectUrlPost()

Generate the SuperPDP OAuth2 authorization URL for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  Redirect the end user to the returned `authorizeUrl` so they can connect their own SuperPDP account to FactPulse (OAuth2 Authorization Code).  **Query parameters**: - `modeSandbox` (default `true`): connect via the SuperPDP sandbox app   (fictitious data) or the production app. - `returnUrl` (optional): absolute http(s) URL of your own portal. Once the   SuperPDP authorization flow is over, the end user is redirected there with   `superpdp_connected=true|false` (and `superpdp_error=<code>` on failure)   appended to the query string. Without it, FactPulse displays its own   confirmation page. Returns `400 invalid_return_url` if the URL is not an   absolute http(s) URL.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)
let modeSandbox: boolean; //True for the SuperPDP sandbox app (default), False for production (optional) (default to true)
let returnUrl: string; //Absolute http(s) URL to redirect the end user to once the SuperPDP connection is done. Defaults to the FactPulse confirmation page. (optional) (default to undefined)

const { status, data } = await apiInstance.getSuperpdpConnectUrlApiV1ClientsUidSuperpdpConnectUrlPost(
    uid,
    modeSandbox,
    returnUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|
| **modeSandbox** | [**boolean**] | True for the SuperPDP sandbox app (default), False for production | (optional) defaults to true|
| **returnUrl** | [**string**] | Absolute http(s) URL to redirect the end user to once the SuperPDP connection is done. Defaults to the FactPulse confirmation page. | (optional) defaults to undefined|


### Return type

**SuperPDPConnectURLResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **getSuperpdpStatusApiV1ClientsUidSuperpdpStatusGet**
> SuperPDPStatusResponse getSuperpdpStatusApiV1ClientsUidSuperpdpStatusGet()

Check whether a client has connected its SuperPDP account.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Response**: - `connected`: Whether the client has an active SuperPDP connection - `connectedAt`: When the connection was established (if any) - `expiresAt`: When the current access token expires (if any) - `modeSandbox`: True if connected via the sandbox app, False for production, null if not connected - `lastError`: Last token refresh error, if any

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.getSuperpdpStatusApiV1ClientsUidSuperpdpStatusGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**SuperPDPStatusResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **getWebhookSecretStatusApiV1ClientsUidWebhookSecretStatusGet**
> WebhookSecretStatusResponse getWebhookSecretStatusApiV1ClientsUidWebhookSecretStatusGet()

Check if a webhook secret is configured for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Response**: - `hasSecret`: Whether a webhook secret is configured - `createdAt`: When the secret was created (if exists)  **Note**: The secret value is never returned, only its status.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)

const { status, data } = await apiInstance.getWebhookSecretStatusApiV1ClientsUidWebhookSecretStatusGet(
    uid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**WebhookSecretStatusResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **rotateEncryptionKeyApiV1ClientsUidRotateEncryptionKeyPost**
> KeyRotationResponse rotateEncryptionKeyApiV1ClientsUidRotateEncryptionKeyPost(keyRotationRequest)

Rotate the client encryption key for all secrets in double encryption mode.  **Scope**: Client level (JWT with client_uid that must match {uid})  **What this does**: 1. Decrypts all secrets (PDP, Chorus Pro) using the old key 2. Re-encrypts them using the new key 3. Saves to database  **Important notes**: - Both keys must be base64-encoded AES-256 keys (32 bytes each) - The old key becomes invalid immediately after rotation - Only secrets encrypted with `encryptionMode: \"double\"` are affected - If the client has no double-encrypted secrets, returns 404  **Security**: - The old key must be valid (decryption is verified) - If decryption fails, rotation is aborted (atomic operation) - Neither key is logged or stored by the server

### Example

```typescript
import {
    ClientManagementApi,
    Configuration,
    KeyRotationRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)
let keyRotationRequest: KeyRotationRequest; //

const { status, data } = await apiInstance.rotateEncryptionKeyApiV1ClientsUidRotateEncryptionKeyPost(
    uid,
    keyRotationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyRotationRequest** | **KeyRotationRequest**|  | |
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**KeyRotationResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

let uid: string; //Client unique identifier (UUID) (default to undefined)
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
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|


### Return type

**ClientDetail**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

Configure or update the PDP (PA/PDP) configuration for a client.  **Scope**: Client level (JWT with client_uid that must match {uid})  **Required fields**: - `flowServiceUrl`: PDP Flow Service URL - `tokenUrl`: PDP OAuth token URL - `oauthClientId`: OAuth Client ID - `clientSecret`: OAuth Client Secret (sent but NEVER returned)  **Optional fields**: - `isActive`: Enable/disable the config (default: true) - `modeSandbox`: Sandbox mode (default: false) - `encryptionMode`: Encryption mode (default: \"fernet\")   - \"fernet\": Server-side encryption only   - \"double\": Client AES-256-GCM + Server Fernet (requires X-Encryption-Key header)  **Double Encryption Mode**: When `encryptionMode` is set to \"double\", you MUST also provide the `X-Encryption-Key` header containing a base64-encoded AES-256 key (32 bytes). This key is used to encrypt the `clientSecret` on the client side before the server encrypts it again with Fernet. The server cannot decrypt the secret without the client key.  **Security**: The `clientSecret` is stored encrypted on Django side and is never returned in API responses.

### Example

```typescript
import {
    ClientManagementApi,
    Configuration,
    PDPConfigUpdateRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ClientManagementApi(configuration);

let uid: string; //Client unique identifier (UUID) (default to undefined)
let pDPConfigUpdateRequest: PDPConfigUpdateRequest; //
let xEncryptionKey: string; //Client encryption key for double encryption mode. Must be a base64-encoded AES-256 key (32 bytes). Required only when accessing resources encrypted with encryption_mode=\'double\'. (optional) (default to undefined)

const { status, data } = await apiInstance.updatePdpConfigApiV1ClientsUidPdpConfigPut(
    uid,
    pDPConfigUpdateRequest,
    xEncryptionKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pDPConfigUpdateRequest** | **PDPConfigUpdateRequest**|  | |
| **uid** | [**string**] | Client unique identifier (UUID) | defaults to undefined|
| **xEncryptionKey** | [**string**] | Client encryption key for double encryption mode. Must be a base64-encoded AES-256 key (32 bytes). Required only when accessing resources encrypted with encryption_mode&#x3D;\&#39;double\&#39;. | (optional) defaults to undefined|


### Return type

**PDPConfigResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

