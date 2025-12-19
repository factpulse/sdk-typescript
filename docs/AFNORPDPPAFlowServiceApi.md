# AFNORPDPPAFlowServiceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet**](#downloadflowproxyapiv1afnorflowv1flowsflowidget) | **GET** /api/v1/afnor/flow/v1/flows/{flowId} | Download a flow|
|[**flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet**](#flowhealthcheckproxyapiv1afnorflowv1healthcheckget) | **GET** /api/v1/afnor/flow/v1/healthcheck | Healthcheck Flow Service|
|[**searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost**](#searchflowsproxyapiv1afnorflowv1flowssearchpost) | **POST** /api/v1/afnor/flow/v1/flows/search | Search flows|
|[**submitFlowProxyApiV1AfnorFlowV1FlowsPost**](#submitflowproxyapiv1afnorflowv1flowspost) | **POST** /api/v1/afnor/flow/v1/flows | Submit an invoicing flow|

# **downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet**
> any downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet()

Download the PDF/A-3 file of an invoicing flow (uses JWT client_uid)

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
|**200** | PDF/A-3 file |  -  |
|**400** | Missing PDP configuration |  -  |
|**401** | Not authenticated - Missing or invalid JWT token |  -  |
|**404** | Flow not found or invalid client_uid |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet**
> any flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet()

Check Flow Service availability

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
|**200** | Service operational |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost**
> any searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost()

Search invoicing flows by criteria (uses JWT client_uid)

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
|**200** | Search results |  -  |
|**400** | Missing PDP configuration |  -  |
|**401** | Not authenticated - Missing or invalid JWT token |  -  |
|**404** | PDP client not found (invalid client_uid) |  -  |
|**429** | Too many requests - Rate limit reached (60 searches/minute) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitFlowProxyApiV1AfnorFlowV1FlowsPost**
> any submitFlowProxyApiV1AfnorFlowV1FlowsPost()

Submits an electronic invoice to a Partner Dematerialization Platform (PDP) in compliance with the AFNOR XP Z12-013 standard

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
|**201** | Flow submitted successfully |  -  |
|**400** | Invalid request or missing PDP configuration |  -  |
|**401** | Not authenticated - Missing or invalid JWT token |  -  |
|**403** | Not authorized - Quota exceeded or insufficient permissions |  -  |
|**404** | PDP client not found (invalid client_uid) |  -  |
|**429** | Too many requests - Rate limit reached (30 submissions/minute) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

