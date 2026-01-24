# Flux10EReportingApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost**](#generateaggregatedereportingapiv1ereportinggenerateaggregatedpost) | **POST** /api/v1/ereporting/generate-aggregated | Generate aggregated e-reporting XML (PPF-compliant)|
|[**generateEreportingApiV1EreportingGeneratePost**](#generateereportingapiv1ereportinggeneratepost) | **POST** /api/v1/ereporting/generate | Generate e-reporting XML|
|[**generateEreportingDownloadApiV1EreportingGenerateDownloadPost**](#generateereportingdownloadapiv1ereportinggeneratedownloadpost) | **POST** /api/v1/ereporting/generate/download | Generate and download e-reporting XML|
|[**listCategoryCodesApiV1EreportingCategoryCodesGet**](#listcategorycodesapiv1ereportingcategorycodesget) | **GET** /api/v1/ereporting/category-codes | List PPF-compliant category codes|
|[**listFlowTypesApiV1EreportingFlowTypesGet**](#listflowtypesapiv1ereportingflowtypesget) | **GET** /api/v1/ereporting/flow-types | List available flow types|
|[**submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost**](#submitaggregatedereportingapiv1ereportingsubmitaggregatedpost) | **POST** /api/v1/ereporting/submit-aggregated | Submit aggregated e-reporting to PA/PDP|
|[**submitEreportingApiV1EreportingSubmitPost**](#submitereportingapiv1ereportingsubmitpost) | **POST** /api/v1/ereporting/submit | Submit e-reporting to PA/PDP|
|[**submitXmlEreportingApiV1EreportingSubmitXmlPost**](#submitxmlereportingapiv1ereportingsubmitxmlpost) | **POST** /api/v1/ereporting/submit-xml | Submit pre-generated e-reporting XML|
|[**validateAggregatedEreportingApiV1EreportingValidateAggregatedPost**](#validateaggregatedereportingapiv1ereportingvalidateaggregatedpost) | **POST** /api/v1/ereporting/validate-aggregated | Validate aggregated e-reporting data|
|[**validateEreportingApiV1EreportingValidatePost**](#validateereportingapiv1ereportingvalidatepost) | **POST** /api/v1/ereporting/validate | Validate e-reporting data|
|[**validateXmlEreportingApiV1EreportingValidateXmlPost**](#validatexmlereportingapiv1ereportingvalidatexmlpost) | **POST** /api/v1/ereporting/validate-xml | Validate e-reporting XML (PPF Annexe 6 v1.9 compliant)|

# **generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost**
> GenerateAggregatedReportResponse generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost(createAggregatedReportRequest)

Generate a PPF-compliant aggregated e-reporting XML containing multiple flux types in a single file.  This endpoint creates a Report XML that can contain: - **TransactionsReport**: Invoice (10.1) AND/OR Transactions (10.3) - **PaymentsReport**: Invoice payments (10.2) AND/OR Transaction payments (10.4)  The AFNOR FlowType is automatically determined based on content: - Single type → Specific FlowType (e.g., AggregatedCustomerTransactionReport) - Multiple types → MultiFlowReport  **CategoryCode (TT-81)** must use PPF-compliant values: - TLB1: Goods deliveries - TPS1: Service provisions - TNT1: Non-taxed transactions - TMA1: Mixed transactions

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration,
    CreateAggregatedReportRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let createAggregatedReportRequest: CreateAggregatedReportRequest; //

const { status, data } = await apiInstance.generateAggregatedEreportingApiV1EreportingGenerateAggregatedPost(
    createAggregatedReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAggregatedReportRequest** | **CreateAggregatedReportRequest**|  | |


### Return type

**GenerateAggregatedReportResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateEreportingApiV1EreportingGeneratePost**
> GenerateEReportingResponse generateEreportingApiV1EreportingGeneratePost(createEReportingRequest)

Generate e-reporting XML (FRR format) from structured data.  Supports all four flow types: - **10.1**: Unitary B2B international transactions (use `invoices` field) - **10.2**: Payments for B2B international invoices (use `invoicePayments` field) - **10.3**: Aggregated B2C transactions (use `transactions` field) - **10.4**: Aggregated B2C payments (use `aggregatedPayments` field)  The generated XML is compliant with DGFIP specifications and ready for submission to a PA (Plateforme Agréée).

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration,
    CreateEReportingRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let createEReportingRequest: CreateEReportingRequest; //

const { status, data } = await apiInstance.generateEreportingApiV1EreportingGeneratePost(
    createEReportingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEReportingRequest** | **CreateEReportingRequest**|  | |


### Return type

**GenerateEReportingResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateEreportingDownloadApiV1EreportingGenerateDownloadPost**
> generateEreportingDownloadApiV1EreportingGenerateDownloadPost(createEReportingRequest)

Generate e-reporting XML and return as downloadable file.

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration,
    CreateEReportingRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let createEReportingRequest: CreateEReportingRequest; //
let filename: string; //Output filename (default: ereporting_{reportId}.xml) (optional) (default to undefined)

const { status, data } = await apiInstance.generateEreportingDownloadApiV1EreportingGenerateDownloadPost(
    createEReportingRequest,
    filename
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEReportingRequest** | **CreateEReportingRequest**|  | |
| **filename** | [**string**] | Output filename (default: ereporting_{reportId}.xml) | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCategoryCodesApiV1EreportingCategoryCodesGet**
> { [key: string]: any; } listCategoryCodesApiV1EreportingCategoryCodesGet()

Returns the list of valid CategoryCode values (TT-81) for e-reporting transactions.  Source: Annexe 6 - Format sémantique FE e-reporting v1.9

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

const { status, data } = await apiInstance.listCategoryCodesApiV1EreportingCategoryCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listFlowTypesApiV1EreportingFlowTypesGet**
> { [key: string]: any; } listFlowTypesApiV1EreportingFlowTypesGet()

Returns the list of supported e-reporting flow types with descriptions.

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

const { status, data } = await apiInstance.listFlowTypesApiV1EreportingFlowTypesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost**
> SubmitEReportingResponse submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost(submitAggregatedReportRequest)

Generate and submit a PPF-compliant aggregated e-reporting to a PA/PDP.  Combines generation and submission in a single call. Automatically determines the AFNOR FlowType based on content.

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration,
    SubmitAggregatedReportRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let submitAggregatedReportRequest: SubmitAggregatedReportRequest; //

const { status, data } = await apiInstance.submitAggregatedEreportingApiV1EreportingSubmitAggregatedPost(
    submitAggregatedReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitAggregatedReportRequest** | **SubmitAggregatedReportRequest**|  | |


### Return type

**SubmitEReportingResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitEreportingApiV1EreportingSubmitPost**
> SubmitEReportingResponse submitEreportingApiV1EreportingSubmitPost(submitEReportingRequest)

Generate and submit e-reporting to a PA (Plateforme Agréée).  Authentication strategies (same as invoices): 1. **JWT with client_uid** (recommended): PDP credentials fetched from backend 2. **Zero-storage**: Provide pdpFlowServiceUrl, pdpClientId, pdpClientSecret in request  The e-reporting is submitted using the AFNOR Flow Service API with syntax=FRR (FRench Reporting).

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration,
    SubmitEReportingRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let submitEReportingRequest: SubmitEReportingRequest; //

const { status, data } = await apiInstance.submitEreportingApiV1EreportingSubmitPost(
    submitEReportingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitEReportingRequest** | **SubmitEReportingRequest**|  | |


### Return type

**SubmitEReportingResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitXmlEreportingApiV1EreportingSubmitXmlPost**
> SubmitEReportingResponse submitXmlEreportingApiV1EreportingSubmitXmlPost()

Submit a pre-generated e-reporting XML file directly to a PA/PDP.  This endpoint is designed for clients who generate their own PPF-compliant XML and only need FactPulse for the PDP submission.  **Process:** 1. Validates the XML against PPF XSD schemas 2. Determines the appropriate AFNOR FlowType 3. Submits to the configured PDP/PA 4. Returns the flowId for tracking  **Authentication:** Same strategies as /submit endpoint (JWT or zero-storage credentials).

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let xmlFile: File; //E-reporting XML file (default to undefined)
let trackingId: string; // (optional) (default to undefined)
let skipValidation: boolean; //Skip XSD validation (optional) (default to false)
let pdpFlowServiceUrl: string; // (optional) (default to undefined)
let pdpTokenUrl: string; // (optional) (default to undefined)
let pdpClientId: string; // (optional) (default to undefined)
let pdpClientSecret: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.submitXmlEreportingApiV1EreportingSubmitXmlPost(
    xmlFile,
    trackingId,
    skipValidation,
    pdpFlowServiceUrl,
    pdpTokenUrl,
    pdpClientId,
    pdpClientSecret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xmlFile** | [**File**] | E-reporting XML file | defaults to undefined|
| **trackingId** | [**string**] |  | (optional) defaults to undefined|
| **skipValidation** | [**boolean**] | Skip XSD validation | (optional) defaults to false|
| **pdpFlowServiceUrl** | [**string**] |  | (optional) defaults to undefined|
| **pdpTokenUrl** | [**string**] |  | (optional) defaults to undefined|
| **pdpClientId** | [**string**] |  | (optional) defaults to undefined|
| **pdpClientSecret** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SubmitEReportingResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateAggregatedEreportingApiV1EreportingValidateAggregatedPost**
> { [key: string]: any; } validateAggregatedEreportingApiV1EreportingValidateAggregatedPost(createAggregatedReportRequest)

Validates aggregated e-reporting data without generating XML.

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration,
    CreateAggregatedReportRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let createAggregatedReportRequest: CreateAggregatedReportRequest; //

const { status, data } = await apiInstance.validateAggregatedEreportingApiV1EreportingValidateAggregatedPost(
    createAggregatedReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAggregatedReportRequest** | **CreateAggregatedReportRequest**|  | |


### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateEreportingApiV1EreportingValidatePost**
> ValidateEReportingResponse validateEreportingApiV1EreportingValidatePost(validateEReportingRequest)

Validate e-reporting data without generating or submitting.  Performs: - Schema validation - Business rule validation (correct flux type vs data) - Data consistency checks (tax totals, dates, etc.)  Returns validation errors and warnings.

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration,
    ValidateEReportingRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let validateEReportingRequest: ValidateEReportingRequest; //

const { status, data } = await apiInstance.validateEreportingApiV1EreportingValidatePost(
    validateEReportingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateEReportingRequest** | **ValidateEReportingRequest**|  | |


### Return type

**ValidateEReportingResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateXmlEreportingApiV1EreportingValidateXmlPost**
> { [key: string]: any; } validateXmlEreportingApiV1EreportingValidateXmlPost()

Validates an e-reporting XML file against PPF specifications (Annexe 6 v1.9):  **Validation levels:** 1. **XSD (REJ_SEMAN)**: Structure, types, cardinality 2. **Semantic (REJ_SEMAN)**: Authorized values from codelists 3. **Coherence (REJ_COH)**: Data consistency (totals = sum of breakdowns) 4. **Period (REJ_PER)**: Transaction dates within declared period  **Validated codes:** - SchemeID (ISO 6523): 0002=SIREN, 0009=SIRET, 0224=RoutingCode, etc. - RoleCode (UNCL 3035): SE=Seller, BY=Buyer, WK=Working party - CategoryCode (TT-81): TLB1, TPS1, TNT1, TMA1 - TaxCategoryCode (UNTDID 5305): S, Z, E, AE, K, G, O - Currency (ISO 4217), Country (ISO 3166-1)  Returns structured validation errors with PPF rejection codes.

### Example

```typescript
import {
    Flux10EReportingApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux10EReportingApi(configuration);

let xmlFile: File; //E-reporting XML file to validate (default to undefined)
let validateCoherence: boolean; //Validate data coherence (REJ_COH) (optional) (default to true)
let validatePeriod: boolean; //Validate period coherence (REJ_PER) (optional) (default to true)

const { status, data } = await apiInstance.validateXmlEreportingApiV1EreportingValidateXmlPost(
    xmlFile,
    validateCoherence,
    validatePeriod
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xmlFile** | [**File**] | E-reporting XML file to validate | defaults to undefined|
| **validateCoherence** | [**boolean**] | Validate data coherence (REJ_COH) | (optional) defaults to true|
| **validatePeriod** | [**boolean**] | Validate period coherence (REJ_PER) | (optional) defaults to true|


### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request data |  -  |
|**422** | Validation error |  -  |
|**500** | Internal server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

