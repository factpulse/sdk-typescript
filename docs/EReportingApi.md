# EReportingApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost**](EReportingApi.md#generateaggregatedereportingapiv1ereportinggenerateaggregatedpost) | **POST** /api/v1/ereporting/generate-aggregated | Generate aggregated e-reporting XML (PPF-compliant) |
| [**generateEreportingApiV1EreportingGeneratePost**](EReportingApi.md#generateereportingapiv1ereportinggeneratepost) | **POST** /api/v1/ereporting/generate | Generate e-reporting XML |
| [**generateEreportingDownloadApiV1EreportingGenerateDownloadPost**](EReportingApi.md#generateereportingdownloadapiv1ereportinggeneratedownloadpost) | **POST** /api/v1/ereporting/generate/download | Generate and download e-reporting XML |
| [**listCategoryCodesApiV1EreportingCategoryCodesGet**](EReportingApi.md#listcategorycodesapiv1ereportingcategorycodesget) | **GET** /api/v1/ereporting/category-codes | List PPF-compliant category codes |
| [**listFlowTypesApiV1EreportingFlowTypesGet**](EReportingApi.md#listflowtypesapiv1ereportingflowtypesget) | **GET** /api/v1/ereporting/flow-types | List available flow types |
| [**submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost**](EReportingApi.md#submitaggregatedereportingapiv1ereportingsubmitaggregatedpost) | **POST** /api/v1/ereporting/submit-aggregated | Submit aggregated e-reporting to PA/PDP |
| [**submitEreportingApiV1EreportingSubmitPost**](EReportingApi.md#submitereportingapiv1ereportingsubmitpost) | **POST** /api/v1/ereporting/submit | Submit e-reporting to PA/PDP |
| [**submitXmlEreportingApiV1EreportingSubmitXmlPost**](EReportingApi.md#submitxmlereportingapiv1ereportingsubmitxmlpost) | **POST** /api/v1/ereporting/submit-xml | Submit pre-generated e-reporting XML |
| [**validateAggregatedEreportingApiV1EreportingValidateAggregatedPost**](EReportingApi.md#validateaggregatedereportingapiv1ereportingvalidateaggregatedpost) | **POST** /api/v1/ereporting/validate-aggregated | Validate aggregated e-reporting data |
| [**validateEreportingApiV1EreportingValidatePost**](EReportingApi.md#validateereportingapiv1ereportingvalidatepost) | **POST** /api/v1/ereporting/validate | Validate e-reporting data |
| [**validateXmlEreportingApiV1EreportingValidateXmlPost**](EReportingApi.md#validatexmlereportingapiv1ereportingvalidatexmlpost) | **POST** /api/v1/ereporting/validate-xml | Validate e-reporting XML against PPF XSD schemas and business rules |



## generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost

> GenerateAggregatedReportResponse generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost(createAggregatedReportRequest)

Generate aggregated e-reporting XML (PPF-compliant)

Generate a PPF-compliant aggregated e-reporting XML containing multiple flux types in a single file.  This endpoint creates a Report XML that can contain: - **TransactionsReport**: Invoice (10.1) AND/OR Transactions (10.3) - **PaymentsReport**: Invoice payments (10.2) AND/OR Transaction payments (10.4)  The AFNOR FlowType is automatically determined based on content: - Single type → Specific FlowType (e.g., AggregatedCustomerTransactionReport) - Multiple types → MultiFlowReport  **CategoryCode (TT-81)** must use PPF-compliant values: - TLB1: Goods deliveries - TPS1: Service provisions - TNT1: Non-taxed transactions - TMA1: Mixed transactions

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { GenerateAggregatedEreportingApiV1EreportingGenerateAggregatedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // CreateAggregatedReportRequest
    createAggregatedReportRequest: ...,
  } satisfies GenerateAggregatedEreportingApiV1EreportingGenerateAggregatedPostRequest;

  try {
    const data = await api.generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost(body);
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
| **createAggregatedReportRequest** | [CreateAggregatedReportRequest](CreateAggregatedReportRequest.md) |  | |

### Return type

[**GenerateAggregatedReportResponse**](GenerateAggregatedReportResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateEreportingApiV1EreportingGeneratePost

> GenerateEReportingResponse generateEreportingApiV1EreportingGeneratePost(createEReportingRequest)

Generate e-reporting XML

Generate e-reporting XML (FRR format) from structured data.  Supports all four flow types: - **10.1**: Unitary B2B international transactions (use &#x60;invoices&#x60; field) - **10.2**: Payments for B2B international invoices (use &#x60;invoicePayments&#x60; field) - **10.3**: Aggregated B2C transactions (use &#x60;transactions&#x60; field) - **10.4**: Aggregated B2C payments (use &#x60;aggregatedPayments&#x60; field)  The generated XML is compliant with DGFIP specifications and ready for submission to a PA (Plateforme Agréée).

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { GenerateEreportingApiV1EreportingGeneratePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // CreateEReportingRequest
    createEReportingRequest: ...,
  } satisfies GenerateEreportingApiV1EreportingGeneratePostRequest;

  try {
    const data = await api.generateEreportingApiV1EreportingGeneratePost(body);
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
| **createEReportingRequest** | [CreateEReportingRequest](CreateEReportingRequest.md) |  | |

### Return type

[**GenerateEReportingResponse**](GenerateEReportingResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateEreportingDownloadApiV1EreportingGenerateDownloadPost

> generateEreportingDownloadApiV1EreportingGenerateDownloadPost(createEReportingRequest, filename)

Generate and download e-reporting XML

Generate e-reporting XML and return as downloadable file.

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { GenerateEreportingDownloadApiV1EreportingGenerateDownloadPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // CreateEReportingRequest
    createEReportingRequest: ...,
    // string | Output filename (default: ereporting_{reportId}.xml) (optional)
    filename: filename_example,
  } satisfies GenerateEreportingDownloadApiV1EreportingGenerateDownloadPostRequest;

  try {
    const data = await api.generateEreportingDownloadApiV1EreportingGenerateDownloadPost(body);
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
| **createEReportingRequest** | [CreateEReportingRequest](CreateEReportingRequest.md) |  | |
| **filename** | `string` | Output filename (default: ereporting_{reportId}.xml) | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCategoryCodesApiV1EreportingCategoryCodesGet

> { [key: string]: any; } listCategoryCodesApiV1EreportingCategoryCodesGet()

List PPF-compliant category codes

Returns the list of valid CategoryCode values (TT-81) for e-reporting transactions.  Source: Annexe 6 - Format sémantique FE e-reporting v1.9

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { ListCategoryCodesApiV1EreportingCategoryCodesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EReportingApi();

  try {
    const data = await api.listCategoryCodesApiV1EreportingCategoryCodesGet();
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

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listFlowTypesApiV1EreportingFlowTypesGet

> { [key: string]: any; } listFlowTypesApiV1EreportingFlowTypesGet()

List available flow types

Returns the list of supported e-reporting flow types with descriptions.

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { ListFlowTypesApiV1EreportingFlowTypesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EReportingApi();

  try {
    const data = await api.listFlowTypesApiV1EreportingFlowTypesGet();
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

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost

> SubmitEReportingResponse submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost(submitAggregatedReportRequest)

Submit aggregated e-reporting to PA/PDP

Generate and submit a PPF-compliant aggregated e-reporting to a PA/PDP.  Combines generation and submission in a single call. Automatically determines the AFNOR FlowType based on content.

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { SubmitAggregatedEreportingApiV1EreportingSubmitAggregatedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // SubmitAggregatedReportRequest
    submitAggregatedReportRequest: ...,
  } satisfies SubmitAggregatedEreportingApiV1EreportingSubmitAggregatedPostRequest;

  try {
    const data = await api.submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost(body);
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
| **submitAggregatedReportRequest** | [SubmitAggregatedReportRequest](SubmitAggregatedReportRequest.md) |  | |

### Return type

[**SubmitEReportingResponse**](SubmitEReportingResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitEreportingApiV1EreportingSubmitPost

> SubmitEReportingResponse submitEreportingApiV1EreportingSubmitPost(submitEReportingRequest)

Submit e-reporting to PA/PDP

Generate and submit e-reporting to a PA (Plateforme Agréée).  Authentication strategies (same as invoices): 1. **JWT with client_uid** (recommended): PDP credentials fetched from backend 2. **Zero-storage**: Provide pdpFlowServiceUrl, pdpClientId, pdpClientSecret in request  The e-reporting is submitted using the AFNOR Flow Service API with syntax&#x3D;FRR (FRench Reporting).

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { SubmitEreportingApiV1EreportingSubmitPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // SubmitEReportingRequest
    submitEReportingRequest: ...,
  } satisfies SubmitEreportingApiV1EreportingSubmitPostRequest;

  try {
    const data = await api.submitEreportingApiV1EreportingSubmitPost(body);
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
| **submitEReportingRequest** | [SubmitEReportingRequest](SubmitEReportingRequest.md) |  | |

### Return type

[**SubmitEReportingResponse**](SubmitEReportingResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## submitXmlEreportingApiV1EreportingSubmitXmlPost

> SubmitEReportingResponse submitXmlEreportingApiV1EreportingSubmitXmlPost(xmlFile, trackingId, skipValidation, pdpFlowServiceUrl, pdpTokenUrl, pdpClientId, pdpClientSecret)

Submit pre-generated e-reporting XML

Submit a pre-generated e-reporting XML file directly to a PA/PDP.  This endpoint is designed for clients who generate their own PPF-compliant XML and only need FactPulse for the PDP submission.  **Process:** 1. Validates the XML against PPF XSD schemas 2. Determines the appropriate AFNOR FlowType 3. Submits to the configured PDP/PA 4. Returns the flowId for tracking  **Authentication:** Same strategies as /submit endpoint (JWT or zero-storage credentials).

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { SubmitXmlEreportingApiV1EreportingSubmitXmlPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // Blob | E-reporting XML file
    xmlFile: BINARY_DATA_HERE,
    // string (optional)
    trackingId: trackingId_example,
    // boolean | Skip XSD validation (optional)
    skipValidation: true,
    // string (optional)
    pdpFlowServiceUrl: pdpFlowServiceUrl_example,
    // string (optional)
    pdpTokenUrl: pdpTokenUrl_example,
    // string (optional)
    pdpClientId: pdpClientId_example,
    // string (optional)
    pdpClientSecret: pdpClientSecret_example,
  } satisfies SubmitXmlEreportingApiV1EreportingSubmitXmlPostRequest;

  try {
    const data = await api.submitXmlEreportingApiV1EreportingSubmitXmlPost(body);
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
| **xmlFile** | `Blob` | E-reporting XML file | [Defaults to `undefined`] |
| **trackingId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **skipValidation** | `boolean` | Skip XSD validation | [Optional] [Defaults to `false`] |
| **pdpFlowServiceUrl** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pdpTokenUrl** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pdpClientId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **pdpClientSecret** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SubmitEReportingResponse**](SubmitEReportingResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateAggregatedEreportingApiV1EreportingValidateAggregatedPost

> { [key: string]: any; } validateAggregatedEreportingApiV1EreportingValidateAggregatedPost(createAggregatedReportRequest)

Validate aggregated e-reporting data

Validates aggregated e-reporting data without generating XML.

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { ValidateAggregatedEreportingApiV1EreportingValidateAggregatedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // CreateAggregatedReportRequest
    createAggregatedReportRequest: ...,
  } satisfies ValidateAggregatedEreportingApiV1EreportingValidateAggregatedPostRequest;

  try {
    const data = await api.validateAggregatedEreportingApiV1EreportingValidateAggregatedPost(body);
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
| **createAggregatedReportRequest** | [CreateAggregatedReportRequest](CreateAggregatedReportRequest.md) |  | |

### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateEreportingApiV1EreportingValidatePost

> ValidateEReportingResponse validateEreportingApiV1EreportingValidatePost(validateEReportingRequest)

Validate e-reporting data

Validate e-reporting data without generating or submitting.  Performs: - Schema validation - Business rule validation (correct flux type vs data) - Data consistency checks (tax totals, dates, etc.)  Returns validation errors and warnings.

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { ValidateEreportingApiV1EreportingValidatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // ValidateEReportingRequest
    validateEReportingRequest: ...,
  } satisfies ValidateEreportingApiV1EreportingValidatePostRequest;

  try {
    const data = await api.validateEreportingApiV1EreportingValidatePost(body);
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
| **validateEReportingRequest** | [ValidateEReportingRequest](ValidateEReportingRequest.md) |  | |

### Return type

[**ValidateEReportingResponse**](ValidateEReportingResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateXmlEreportingApiV1EreportingValidateXmlPost

> { [key: string]: any; } validateXmlEreportingApiV1EreportingValidateXmlPost(xmlFile, validateBusinessRules)

Validate e-reporting XML against PPF XSD schemas and business rules

Validates an e-reporting XML file against:  1. **XSD schemas**: Official PPF e-reporting XSD (structure, types, cardinality) 2. **Business rules**: ISO codes and enum validation    - Currency codes (ISO 4217: EUR, USD, GBP, etc.)    - Country codes (ISO 3166-1 alpha-2: FR, DE, US, etc.)    - Scheme IDs (0009&#x3D;SIRET, 0002&#x3D;SIREN, etc.)    - Role codes (UNCL 3035: SE&#x3D;Seller, BY&#x3D;Buyer, WK&#x3D;Working party, etc.)  Returns validation status and detailed error messages if invalid.

### Example

```ts
import {
  Configuration,
  EReportingApi,
} from '';
import type { ValidateXmlEreportingApiV1EreportingValidateXmlPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new EReportingApi(config);

  const body = {
    // Blob | E-reporting XML file to validate
    xmlFile: BINARY_DATA_HERE,
    // boolean | Also validate business rules (ISO codes, enums) (optional)
    validateBusinessRules: true,
  } satisfies ValidateXmlEreportingApiV1EreportingValidateXmlPostRequest;

  try {
    const data = await api.validateXmlEreportingApiV1EreportingValidateXmlPost(body);
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
| **xmlFile** | `Blob` | E-reporting XML file to validate | [Defaults to `undefined`] |
| **validateBusinessRules** | `boolean` | Also validate business rules (ISO codes, enums) | [Optional] [Defaults to `true`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **400** | Invalid request data |  -  |
| **422** | Validation error |  -  |
| **500** | Internal server error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

