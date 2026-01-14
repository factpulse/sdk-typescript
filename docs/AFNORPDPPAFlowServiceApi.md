# AFNORPDPPAFlowServiceApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet**](#downloadflowproxyapiv1afnorflowv1flowsflowidget) | **GET** /api/v1/afnor/flow/v1/flows/{flowId} | Download a flow|
|[**flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet**](#flowhealthcheckproxyapiv1afnorflowv1healthcheckget) | **GET** /api/v1/afnor/flow/v1/healthcheck | Healthcheck Flow Service|
|[**searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost**](#searchflowsproxyapiv1afnorflowv1flowssearchpost) | **POST** /api/v1/afnor/flow/v1/flows/search | Search flows|
|[**submitFlowProxyApiV1AfnorFlowV1FlowsPost**](#submitflowproxyapiv1afnorflowv1flowspost) | **POST** /api/v1/afnor/flow/v1/flows | Submit an invoicing flow|

# **downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet**
> AFNORFlow downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet()

Download a file related to a given flow (AFNOR XP Z12-013 compliant): - Metadata [Default]: provides the flow metadata as JSON - Original: the document initially sent by the emitter - Converted: the document optionally converted by the system - ReadableView: the document optionally generated as readable file

### Example

```typescript
import {
    AFNORPDPPAFlowServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAFlowServiceApi(configuration);

let flowId: string; //AFNOR flow identifier (UUID) (default to undefined)
let docType: DocType; //Type of file to download: Metadata (default, JSON), Original, Converted, or ReadableView (optional) (default to undefined)

const { status, data } = await apiInstance.downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet(
    flowId,
    docType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowId** | [**string**] | AFNOR flow identifier (UUID) | defaults to undefined|
| **docType** | **DocType** | Type of file to download: Metadata (default, JSON), Original, Converted, or ReadableView | (optional) defaults to undefined|


### Return type

**AFNORFlow**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - Flow file or metadata returned |  -  |
|**400** | Bad request - Invalid input parameters |  -  |
|**401** | Authentication error - Missing or invalid token |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Resource not found |  -  |
|**429** | Too many requests - Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable - PDP temporarily unavailable |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet**
> object flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet()

Check Flow Service availability (AFNOR XP Z12-013 compliant)

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

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - Service is operational |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable - PDP temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost**
> AFNORSearchFlowContent searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost(aFNORSearchFlowParams)

Search invoicing flows by criteria (AFNOR XP Z12-013 compliant)

### Example

```typescript
import {
    AFNORPDPPAFlowServiceApi,
    Configuration,
    AFNORSearchFlowParams
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAFlowServiceApi(configuration);

let aFNORSearchFlowParams: AFNORSearchFlowParams; //

const { status, data } = await apiInstance.searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost(
    aFNORSearchFlowParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aFNORSearchFlowParams** | **AFNORSearchFlowParams**|  | |


### Return type

**AFNORSearchFlowContent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - Search results returned |  -  |
|**400** | Bad request - Invalid input parameters |  -  |
|**401** | Authentication error - Missing or invalid token |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**429** | Too many requests - Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable - PDP temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitFlowProxyApiV1AfnorFlowV1FlowsPost**
> any submitFlowProxyApiV1AfnorFlowV1FlowsPost()

Submits an electronic invoice to a Partner Dematerialization Platform (PDP) in compliance with the AFNOR XP Z12-013 standard

### Example

```typescript
import {
    AFNORPDPPAFlowServiceApi,
    Configuration,
    AFNORFlowInfo
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPAFlowServiceApi(configuration);

let flowInfo: AFNORFlowInfo; // (default to undefined)
let file: File; //Flow file (PDF/A-3 with embedded XML or XML) (default to undefined)

const { status, data } = await apiInstance.submitFlowProxyApiV1AfnorFlowV1FlowsPost(
    flowInfo,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **flowInfo** | **AFNORFlowInfo** |  | defaults to undefined|
| **file** | [**File**] | Flow file (PDF/A-3 with embedded XML or XML) | defaults to undefined|


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**202** | OK - Flow has been uploaded and accepted for processing |  -  |
|**400** | Bad request - Invalid input parameters |  -  |
|**401** | Authentication error - Missing or invalid token |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Resource not found |  -  |
|**413** | Payload too large - File exceeds maximum size |  -  |
|**422** | Unprocessable entity - Business rule validation failed |  -  |
|**429** | Too many requests - Rate limit exceeded |  -  |
|**500** | Internal server error |  -  |
|**503** | Service unavailable - PDP temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

