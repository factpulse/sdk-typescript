# Flux6InvoiceLifecycleCDARApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateCdarApiV1CdarGeneratePost**](#generatecdarapiv1cdargeneratepost) | **POST** /api/v1/cdar/generate | Generate a CDAR message|
|[**getActionCodesApiV1CdarActionCodesGet**](#getactioncodesapiv1cdaractioncodesget) | **GET** /api/v1/cdar/action-codes | List of CDAR action codes|
|[**getReasonCodesApiV1CdarReasonCodesGet**](#getreasoncodesapiv1cdarreasoncodesget) | **GET** /api/v1/cdar/reason-codes | List of CDAR reason codes|
|[**getStatusCodesApiV1CdarStatusCodesGet**](#getstatuscodesapiv1cdarstatuscodesget) | **GET** /api/v1/cdar/status-codes | List of CDAR status codes|
|[**submitCdarApiV1CdarSubmitPost**](#submitcdarapiv1cdarsubmitpost) | **POST** /api/v1/cdar/submit | Generate and submit a CDAR message|
|[**submitCdarXmlApiV1CdarSubmitXmlPost**](#submitcdarxmlapiv1cdarsubmitxmlpost) | **POST** /api/v1/cdar/submit-xml | Submit a pre-generated CDAR XML|
|[**submitEncaisseeApiV1CdarEncaisseePost**](#submitencaisseeapiv1cdarencaisseepost) | **POST** /api/v1/cdar/encaissee | [Simplified] Submit PAID status (212) - Issued invoice|
|[**submitRefuseeApiV1CdarRefuseePost**](#submitrefuseeapiv1cdarrefuseepost) | **POST** /api/v1/cdar/refusee | [Simplified] Submit REFUSED status (210) - Received invoice|
|[**validateCdarApiV1CdarValidatePost**](#validatecdarapiv1cdarvalidatepost) | **POST** /api/v1/cdar/validate | Validate CDAR structured data|
|[**validateXmlCdarApiV1CdarValidateXmlPost**](#validatexmlcdarapiv1cdarvalidatexmlpost) | **POST** /api/v1/cdar/validate-xml | Validate CDAR XML against XSD and Schematron BR-FR-CDV|

# **generateCdarApiV1CdarGeneratePost**
> GenerateCDARResponse generateCdarApiV1CdarGeneratePost(createCDARRequest)

Generate a CDAR XML message (Cross Domain Acknowledgement and Response) to communicate the status of an invoice.  **Message types:** - **23** (Processing): Standard lifecycle message - **305** (Transmission): Inter-platform transmission message  **Business rules:** - BR-FR-CDV-14: Status 212 (PAID) requires a paid amount - BR-FR-CDV-15: Statuses 206/207/208/210/213/501 require a reason code

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration,
    CreateCDARRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

let createCDARRequest: CreateCDARRequest; //

const { status, data } = await apiInstance.generateCdarApiV1CdarGeneratePost(
    createCDARRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCDARRequest** | **CreateCDARRequest**|  | |


### Return type

**GenerateCDARResponse**

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
|**422** | Validation error |  -  |
|**500** | Server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActionCodesApiV1CdarActionCodesGet**
> ActionCodesResponse getActionCodesApiV1CdarActionCodesGet()

Returns the complete list of action codes (BR-FR-CDV-CL-10).  These codes indicate the requested action on the invoice.

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

const { status, data } = await apiInstance.getActionCodesApiV1CdarActionCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ActionCodesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**422** | Validation error |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReasonCodesApiV1CdarReasonCodesGet**
> ReasonCodesResponse getReasonCodesApiV1CdarReasonCodesGet()

Returns the complete list of status reason codes (BR-FR-CDV-CL-09).  These codes explain the reason for a particular status.

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

const { status, data } = await apiInstance.getReasonCodesApiV1CdarReasonCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ReasonCodesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**422** | Validation error |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusCodesApiV1CdarStatusCodesGet**
> StatusCodesResponse getStatusCodesApiV1CdarStatusCodesGet()

Returns the complete list of invoice status codes (BR-FR-CDV-CL-06).  These codes indicate the lifecycle state of an invoice.

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

const { status, data } = await apiInstance.getStatusCodesApiV1CdarStatusCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StatusCodesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Invalid request |  -  |
|**422** | Validation error |  -  |
|**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitCdarApiV1CdarSubmitPost**
> SubmitCDARResponse submitCdarApiV1CdarSubmitPost(submitCDARRequest)

Generate a CDAR message and submit it to the PA/PDP platform.  **Authentication strategies:** 1. **JWT with client_uid** (recommended): PDP credentials retrieved from backend 2. **Zero-storage**: Provide pdpFlowServiceUrl, pdpClientId, pdpClientSecret in the request  **Flow types (flowType):** - `CustomerInvoiceLC`: Client-side lifecycle (buyer) - `SupplierInvoiceLC`: Supplier-side lifecycle (seller)

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration,
    SubmitCDARRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

let submitCDARRequest: SubmitCDARRequest; //

const { status, data } = await apiInstance.submitCdarApiV1CdarSubmitPost(
    submitCDARRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitCDARRequest** | **SubmitCDARRequest**|  | |


### Return type

**SubmitCDARResponse**

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
|**422** | Validation error |  -  |
|**500** | Server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitCdarXmlApiV1CdarSubmitXmlPost**
> SubmitCDARResponse submitCdarXmlApiV1CdarSubmitXmlPost(submitCDARXMLRequest)

Submit a pre-generated CDAR XML message to the PA/PDP platform.  Useful for submitting XML generated by other systems.  **Validation:** The XML is validated against XSD and Schematron BR-FR-CDV rules BEFORE submission. Invalid XML will be rejected with detailed error messages.  **Authentication strategies:** 1. **JWT with client_uid** (recommended): PDP credentials retrieved from backend 2. **Zero-storage**: Provide pdpFlowServiceUrl, pdpClientId, pdpClientSecret in the request

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration,
    SubmitCDARXMLRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

let submitCDARXMLRequest: SubmitCDARXMLRequest; //

const { status, data } = await apiInstance.submitCdarXmlApiV1CdarSubmitXmlPost(
    submitCDARXMLRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitCDARXMLRequest** | **SubmitCDARXMLRequest**|  | |


### Return type

**SubmitCDARResponse**

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
|**422** | Validation error |  -  |
|**500** | Server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitEncaisseeApiV1CdarEncaisseePost**
> SimplifiedCDARResponse submitEncaisseeApiV1CdarEncaisseePost(encaisseeRequest)

**Simplified endpoint for OD** - Submit a PAID status (212) for an **ISSUED** invoice.  This status is **mandatory for PPF** (BR-FR-CDV-14 requires the paid amount).  **Use case:** The **seller** confirms payment receipt for an invoice they issued.  **Who issues this status?** - **Issuer (IssuerTradeParty):** The seller (SE = Seller) who received payment - **Recipient (RecipientTradeParty):** The buyer (BY = Buyer) who paid  **Reference:** XP Z12-014 Annex B, example UC1_F202500003_07-CDV-212_Encaissee.xml  **Authentication:** JWT Bearer (recommended) or PDP credentials in request.

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration,
    EncaisseeRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

let encaisseeRequest: EncaisseeRequest; //

const { status, data } = await apiInstance.submitEncaisseeApiV1CdarEncaisseePost(
    encaisseeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **encaisseeRequest** | **EncaisseeRequest**|  | |


### Return type

**SimplifiedCDARResponse**

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
|**422** | Validation error |  -  |
|**500** | Server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitRefuseeApiV1CdarRefuseePost**
> SimplifiedCDARResponse submitRefuseeApiV1CdarRefuseePost(refuseeRequest)

**Simplified endpoint for OD** - Submit a REFUSED status (210) for a **RECEIVED** invoice.  This status is **mandatory for PPF** (BR-FR-CDV-15 requires a reason code).  **Use case:** The **buyer** refuses an invoice they received.  **Who issues this status?** - **Issuer (IssuerTradeParty):** The buyer (BY = Buyer) refusing the invoice - **Recipient (RecipientTradeParty):** The seller (SE = Seller) who issued the invoice  **Reference:** XP Z12-014 Annex B, example UC3_F202500005_04-CDV-210_Refusee.xml  **Allowed reason codes (BR-FR-CDV-CL-09):** - `TX_TVA_ERR`: Incorrect VAT rate - `MONTANTTOTAL_ERR`: Incorrect total amount - `CALCUL_ERR`: Calculation error - `NON_CONFORME`: Non-compliant - `DOUBLON`: Duplicate - `DEST_ERR`: Wrong recipient - `TRANSAC_INC`: Incomplete transaction - `EMMET_INC`: Unknown issuer - `CONTRAT_TERM`: Contract terminated - `DOUBLE_FACT`: Double billing - `CMD_ERR`: Order error - `ADR_ERR`: Address error - `REF_CT_ABSENT`: Missing contract reference  **Authentication:** JWT Bearer (recommended) or PDP credentials in request.

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration,
    RefuseeRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

let refuseeRequest: RefuseeRequest; //

const { status, data } = await apiInstance.submitRefuseeApiV1CdarRefuseePost(
    refuseeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refuseeRequest** | **RefuseeRequest**|  | |


### Return type

**SimplifiedCDARResponse**

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
|**422** | Validation error |  -  |
|**500** | Server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateCdarApiV1CdarValidatePost**
> ValidateCDARResponse validateCdarApiV1CdarValidatePost(validateCDARRequest)

Validate CDAR structured data without generating XML.  **Note:** This endpoint validates structured data fields only. Use `/validate-xml` to validate a pre-generated CDAR XML file against XSD and Schematron.  Checks: - Field formats (SIREN, dates, etc.) - Enum codes (status, reason, action) - Business rules BR-FR-CDV-*

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration,
    ValidateCDARRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

let validateCDARRequest: ValidateCDARRequest; //

const { status, data } = await apiInstance.validateCdarApiV1CdarValidatePost(
    validateCDARRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateCDARRequest** | **ValidateCDARRequest**|  | |


### Return type

**ValidateCDARResponse**

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
|**422** | Validation error |  -  |
|**500** | Server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateXmlCdarApiV1CdarValidateXmlPost**
> { [key: string]: any; } validateXmlCdarApiV1CdarValidateXmlPost()

Validates a CDAR XML file against:  1. **XSD schema**: UN/CEFACT D22B CrossDomainAcknowledgementAndResponse 2. **Schematron BR-FR-CDV**: French business rules for invoice lifecycle  Returns validation status and detailed error messages if invalid.  **Note:** Use `/validate` to validate structured data fields (JSON).

### Example

```typescript
import {
    Flux6InvoiceLifecycleCDARApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new Flux6InvoiceLifecycleCDARApi(configuration);

let xmlFile: File; //CDAR XML file to validate (default to undefined)

const { status, data } = await apiInstance.validateXmlCdarApiV1CdarValidateXmlPost(
    xmlFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xmlFile** | [**File**] | CDAR XML file to validate | defaults to undefined|


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
|**400** | Invalid request |  -  |
|**422** | Validation error |  -  |
|**500** | Server error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

