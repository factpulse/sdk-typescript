# AFNORPDPPAApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet**](#getfluxentrantapiv1afnorincomingflowsflowidget) | **GET** /api/v1/afnor/incoming-flows/{flow_id} | Retrieve and extract an incoming invoice|
|[**oauthTokenProxyApiV1AfnorOauthTokenPost**](#oauthtokenproxyapiv1afnoroauthtokenpost) | **POST** /api/v1/afnor/oauth/token | Test PDP OAuth2 credentials|

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

let flowId: string; //AFNOR flow ID (UUID format) (default to undefined)
let includeDocument: boolean; //Include base64-encoded document in response (optional) (default to false)

const { status, data } = await apiInstance.getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet(
    flowId,
    includeDocument
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowId** | [**string**] | AFNOR flow ID (UUID format) | defaults to undefined|
| **includeDocument** | [**boolean**] | Include base64-encoded document in response | (optional) defaults to false|


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

OAuth2 proxy to validate PDP credentials. Use this endpoint to verify that OAuth credentials (client_id, client_secret) are valid before saving a PDP configuration. This endpoint is public (no authentication required).

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
|**200** | OAuth2 token acquired successfully - credentials are valid |  -  |
|**401** | Invalid credentials - client_id or client_secret is wrong |  -  |
|**503** | PDP OAuth server unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

