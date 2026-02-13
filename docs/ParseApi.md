# ParseApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**parseFacturxAsyncApiV1ProcessingParseFacturxAsyncPost**](#parsefacturxasyncapiv1processingparsefacturxasyncpost) | **POST** /api/v1/processing/parse-facturx/async | Parse Factur-X XML or PDF (async)|
|[**parseFacturxSyncApiV1ProcessingParseFacturxPost**](#parsefacturxsyncapiv1processingparsefacturxpost) | **POST** /api/v1/processing/parse-facturx | Parse CII, UBL or Factur-X PDF (sync)|

# **parseFacturxAsyncApiV1ProcessingParseFacturxAsyncPost**
> TaskResponse parseFacturxAsyncApiV1ProcessingParseFacturxAsyncPost()

Parse a Factur-X file asynchronously using a Celery task.  **Use case:** For large files or when you want non-blocking processing.  **Workflow:** 1. Submit file with this endpoint -> receive `task_id` 2. Poll `/tasks/{task_id}/status` for result 3. Result contains `invoice` and `detected_profile`  **Optional:** Provide `callback_url` to receive a webhook when parsing completes.

### Example

```typescript
import {
    ParseApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ParseApi(configuration);

let file: File; //Factur-X PDF or XML file to parse (default to undefined)
let callbackUrl: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.parseFacturxAsyncApiV1ProcessingParseFacturxAsyncPost(
    file,
    callbackUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | Factur-X PDF or XML file to parse | defaults to undefined|
| **callbackUrl** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TaskResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Task created |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **parseFacturxSyncApiV1ProcessingParseFacturxPost**
> ParseFacturXResponse parseFacturxSyncApiV1ProcessingParseFacturxPost()

Parse a CII XML, UBL XML, or Factur-X PDF and extract the invoice data as a FacturXInvoice model.  **Use cases:** - Extract invoice data from received invoices (any format) - Round-trip: parse an existing invoice, modify it, and regenerate in another format - Convert between CII and UBL via the FacturXInvoice pivot model  **Supported formats:** - Factur-X PDF (PDF/A-3 with embedded CII XML) - CII XML (UN/CEFACT Cross-Industry Invoice) - UBL 2.1 XML (OASIS Invoice or CreditNote)  **Returns:** - `invoice`: Complete FacturXInvoice data (can be used with /generate-invoice) - `detected_profile`: Factur-X profile (MINIMUM, BASIC, EN16931, EXTENDED)

### Example

```typescript
import {
    ParseApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ParseApi(configuration);

let file: File; //Factur-X PDF or XML file to parse (default to undefined)

const { status, data } = await apiInstance.parseFacturxSyncApiV1ProcessingParseFacturxPost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | Factur-X PDF or XML file to parse | defaults to undefined|


### Return type

**ParseFacturXResponse**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invoice successfully parsed |  -  |
|**400** | Invalid file format or parsing error |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

