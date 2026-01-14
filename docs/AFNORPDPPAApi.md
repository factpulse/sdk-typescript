# AFNORPDPPAApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAfnorCredentialsApiV1AfnorCredentialsGet**](AFNORPDPPAApi.md#getafnorcredentialsapiv1afnorcredentialsget) | **GET** /api/v1/afnor/credentials | Retrieve stored AFNOR credentials |
| [**getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet**](AFNORPDPPAApi.md#getfluxentrantapiv1afnorincomingflowsflowidget) | **GET** /api/v1/afnor/incoming-flows/{flow_id} | Retrieve and extract an incoming invoice |
| [**oauthTokenProxyApiV1AfnorOauthTokenPost**](AFNORPDPPAApi.md#oauthtokenproxyapiv1afnoroauthtokenpost) | **POST** /api/v1/afnor/oauth/token | OAuth2 endpoint for AFNOR authentication |



## getAfnorCredentialsApiV1AfnorCredentialsGet

> any getAfnorCredentialsApiV1AfnorCredentialsGet()

Retrieve stored AFNOR credentials

Retrieves stored AFNOR/PDP credentials for the JWT\&#39;s client_uid. This endpoint is used by the SDK in \&#39;stored\&#39; mode to retrieve credentials before performing AFNOR OAuth itself.

### Example

```ts
import {
  Configuration,
  AFNORPDPPAApi,
} from '';
import type { GetAfnorCredentialsApiV1AfnorCredentialsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPAApi(config);

  try {
    const data = await api.getAfnorCredentialsApiV1AfnorCredentialsGet();
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

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | AFNOR credentials retrieved successfully |  -  |
| **400** | No client_uid in JWT |  -  |
| **401** | Not authenticated - Missing or invalid JWT token |  -  |
| **404** | Client not found or no AFNOR credentials configured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet

> IncomingInvoice getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet(flowId, includeDocument)

Retrieve and extract an incoming invoice

Downloads an incoming flow from the AFNOR PDP and extracts invoice metadata into a unified JSON format. Supports Factur-X, CII, and UBL formats.

### Example

```ts
import {
  Configuration,
  AFNORPDPPAApi,
} from '';
import type { GetFluxEntrantApiV1AfnorIncomingFlowsFlowIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPAApi(config);

  const body = {
    // string | AFNOR flow ID (UUID format)
    flowId: flowId_example,
    // boolean | Include base64-encoded document in response (optional)
    includeDocument: true,
  } satisfies GetFluxEntrantApiV1AfnorIncomingFlowsFlowIdGetRequest;

  try {
    const data = await api.getFluxEntrantApiV1AfnorIncomingFlowsFlowIdGet(body);
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
| **flowId** | `string` | AFNOR flow ID (UUID format) | [Defaults to `undefined`] |
| **includeDocument** | `boolean` | Include base64-encoded document in response | [Optional] [Defaults to `false`] |

### Return type

[**IncomingInvoice**](IncomingInvoice.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invoice extracted successfully |  -  |
| **400** | Unsupported or invalid invoice format |  -  |
| **401** | Not authenticated |  -  |
| **404** | Flow not found |  -  |
| **503** | PDP service unavailable |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oauthTokenProxyApiV1AfnorOauthTokenPost

> any oauthTokenProxyApiV1AfnorOauthTokenPost()

OAuth2 endpoint for AFNOR authentication

OAuth2 proxy endpoint to obtain an AFNOR access token. Proxies to AFNOR mock (sandbox) or real PDP depending on MOCK_AFNOR_BASE_URL. This endpoint is public (no Django auth required) as it is called by the AFNOR SDK.

### Example

```ts
import {
  Configuration,
  AFNORPDPPAApi,
} from '';
import type { OauthTokenProxyApiV1AfnorOauthTokenPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AFNORPDPPAApi();

  try {
    const data = await api.oauthTokenProxyApiV1AfnorOauthTokenPost();
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

**any**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OAuth2 token acquired successfully |  -  |
| **401** | Invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

