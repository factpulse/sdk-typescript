# AFNORPDPPAFlowServiceApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet**](AFNORPDPPAFlowServiceApi.md#downloadflowproxyapiv1afnorflowv1flowsflowidget) | **GET** /api/v1/afnor/flow/v1/flows/{flowId} | Download a flow |
| [**flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet**](AFNORPDPPAFlowServiceApi.md#flowhealthcheckproxyapiv1afnorflowv1healthcheckget) | **GET** /api/v1/afnor/flow/v1/healthcheck | Healthcheck Flow Service |
| [**searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost**](AFNORPDPPAFlowServiceApi.md#searchflowsproxyapiv1afnorflowv1flowssearchpost) | **POST** /api/v1/afnor/flow/v1/flows/search | Search flows |
| [**submitFlowProxyApiV1AfnorFlowV1FlowsPost**](AFNORPDPPAFlowServiceApi.md#submitflowproxyapiv1afnorflowv1flowspost) | **POST** /api/v1/afnor/flow/v1/flows | Submit an invoicing flow |



## downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet

> AFNORFlow downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet(flowId, docType)

Download a flow

Download a file related to a given flow (AFNOR XP Z12-013 compliant): - Metadata [Default]: provides the flow metadata as JSON - Original: the document initially sent by the emitter - Converted: the document optionally converted by the system - ReadableView: the document optionally generated as readable file

### Example

```ts
import {
  Configuration,
  AFNORPDPPAFlowServiceApi,
} from '';
import type { DownloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AFNORPDPPAFlowServiceApi();

  const body = {
    // string | AFNOR flow identifier (UUID)
    flowId: flowId_example,
    // DocType | Type of file to download: Metadata (default, JSON), Original, Converted, or ReadableView (optional)
    docType: ...,
  } satisfies DownloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGetRequest;

  try {
    const data = await api.downloadFlowProxyApiV1AfnorFlowV1FlowsFlowIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **flowId** | `string` | AFNOR flow identifier (UUID) | [Defaults to `undefined`] |
| **docType** | `DocType` | Type of file to download: Metadata (default, JSON), Original, Converted, or ReadableView | [Optional] [Defaults to `undefined`] [Enum: Metadata, Original, Converted, ReadableView] |

### Return type

[**AFNORFlow**](AFNORFlow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/pdf`, `application/xml`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK - Flow file or metadata returned |  -  |
| **400** | Bad request - Invalid input parameters |  -  |
| **401** | Authentication error - Missing or invalid token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Resource not found |  -  |
| **429** | Too many requests - Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |
| **503** | Service unavailable - PDP temporarily unavailable |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet

> object flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet()

Healthcheck Flow Service

Check Flow Service availability (AFNOR XP Z12-013 compliant)

### Example

```ts
import {
  Configuration,
  AFNORPDPPAFlowServiceApi,
} from '';
import type { FlowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AFNORPDPPAFlowServiceApi();

  try {
    const data = await api.flowHealthcheckProxyApiV1AfnorFlowV1HealthcheckGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK - Service is operational |  -  |
| **500** | Internal server error |  -  |
| **503** | Service unavailable - PDP temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost

> AFNORSearchFlowContent searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost(aFNORSearchFlowParams)

Search flows

Search invoicing flows by criteria (AFNOR XP Z12-013 compliant)

### Example

```ts
import {
  Configuration,
  AFNORPDPPAFlowServiceApi,
} from '';
import type { SearchFlowsProxyApiV1AfnorFlowV1FlowsSearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AFNORPDPPAFlowServiceApi();

  const body = {
    // AFNORSearchFlowParams
    aFNORSearchFlowParams: ...,
  } satisfies SearchFlowsProxyApiV1AfnorFlowV1FlowsSearchPostRequest;

  try {
    const data = await api.searchFlowsProxyApiV1AfnorFlowV1FlowsSearchPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **aFNORSearchFlowParams** | [AFNORSearchFlowParams](AFNORSearchFlowParams.md) |  | |

### Return type

[**AFNORSearchFlowContent**](AFNORSearchFlowContent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK - Search results returned |  -  |
| **400** | Bad request - Invalid input parameters |  -  |
| **401** | Authentication error - Missing or invalid token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **429** | Too many requests - Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |
| **503** | Service unavailable - PDP temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitFlowProxyApiV1AfnorFlowV1FlowsPost

> any submitFlowProxyApiV1AfnorFlowV1FlowsPost(flowInfo, file)

Submit an invoicing flow

Submits an electronic invoice to a Partner Dematerialization Platform (PDP) in compliance with the AFNOR XP Z12-013 standard

### Example

```ts
import {
  Configuration,
  AFNORPDPPAFlowServiceApi,
} from '';
import type { SubmitFlowProxyApiV1AfnorFlowV1FlowsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AFNORPDPPAFlowServiceApi();

  const body = {
    // AFNORFlowInfo
    flowInfo: ...,
    // Blob | Flow file (PDF/A-3 with embedded XML or XML)
    file: BINARY_DATA_HERE,
  } satisfies SubmitFlowProxyApiV1AfnorFlowV1FlowsPostRequest;

  try {
    const data = await api.submitFlowProxyApiV1AfnorFlowV1FlowsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **flowInfo** | [AFNORFlowInfo](AFNORFlowInfo.md) |  | [Defaults to `undefined`] |
| **file** | `Blob` | Flow file (PDF/A-3 with embedded XML or XML) | [Defaults to `undefined`] |

### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **202** | OK - Flow has been uploaded and accepted for processing |  -  |
| **400** | Bad request - Invalid input parameters |  -  |
| **401** | Authentication error - Missing or invalid token |  -  |
| **403** | Forbidden - Insufficient permissions |  -  |
| **404** | Resource not found |  -  |
| **413** | Payload too large - File exceeds maximum size |  -  |
| **422** | Unprocessable entity - Business rule validation failed |  -  |
| **429** | Too many requests - Rate limit exceeded |  -  |
| **500** | Internal server error |  -  |
| **503** | Service unavailable - PDP temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

