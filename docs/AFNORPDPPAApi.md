# AFNORPDPPAApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAfnorCredentialsApiV1AfnorCredentialsGet**](#getafnorcredentialsapiv1afnorcredentialsget) | **GET** /api/v1/afnor/credentials | Retrieve stored AFNOR credentials|
|[**getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet**](#getfluxentrantapiv1afnorincomingflowsflowidget) | **GET** /api/v1/afnor/incoming-flows/{flow_id} | Retrieve and extract an incoming invoice|
|[**oauthTokenProxyApiV1AfnorOauthTokenPost**](#oauthtokenproxyapiv1afnoroauthtokenpost) | **POST** /api/v1/afnor/oauth/token | OAuth2 endpoint for AFNOR authentication|

# **getAfnorCredentialsApiV1AfnorCredentialsGet**
> any getAfnorCredentialsApiV1AfnorCredentialsGet()

Retrieves stored AFNOR/PDP credentials for the JWT\'s client_uid. This endpoint is used by the SDK in \'stored\' mode to retrieve credentials before performing AFNOR OAuth itself.

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
|**200** | AFNOR credentials retrieved successfully |  -  |
|**400** | No client_uid in JWT |  -  |
|**401** | Not authenticated - Missing or invalid JWT token |  -  |
|**404** | Client not found or no AFNOR credentials configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet**
> IncomingInvoice getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet()

Downloads an incoming flow from the AFNOR PDP and extracts invoice metadata into a unified JSON format. Supports Factur-X, CII, and UBL formats.

### Example

```typescript
import {
    AFNORPDPPAApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAApi(configuration);

let flowId: string; // (default to undefined)
let includeDocument: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet(
    flowId,
    includeDocument
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowId** | [**string**] |  | defaults to undefined|
| **includeDocument** | [**boolean**] |  | (optional) defaults to false|


### Return type

**IncomingInvoice**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invoice extracted successfully |  -  |
|**400** | Unsupported or invalid invoice format |  -  |
|**401** | Not authenticated |  -  |
|**404** | Flow not found |  -  |
|**503** | PDP service unavailable |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauthTokenProxyApiV1AfnorOauthTokenPost**
> any oauthTokenProxyApiV1AfnorOauthTokenPost()

OAuth2 proxy endpoint to obtain an AFNOR access token. Proxies to AFNOR mock (sandbox) or real PDP depending on MOCK_AFNOR_BASE_URL. This endpoint is public (no Django auth required) as it is called by the AFNOR SDK.

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
|**200** | OAuth2 token acquired successfully |  -  |
|**401** | Invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

