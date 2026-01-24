# FacturXConversionApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**convertDocumentAsyncApiV1ConvertAsyncPost**](#convertdocumentasyncapiv1convertasyncpost) | **POST** /api/v1/convert/async | Convert a document to Factur-X (async mode)|
|[**downloadFileApiV1ConvertConversionIdDownloadFilenameGet**](#downloadfileapiv1convertconversioniddownloadfilenameget) | **GET** /api/v1/convert/{conversion_id}/download/{filename} | Download a generated file|
|[**getConversionStatusApiV1ConvertConversionIdStatusGet**](#getconversionstatusapiv1convertconversionidstatusget) | **GET** /api/v1/convert/{conversion_id}/status | Check conversion status|
|[**resumeConversionApiV1ConvertConversionIdResumePost**](#resumeconversionapiv1convertconversionidresumepost) | **POST** /api/v1/convert/{conversion_id}/resume | Resume a conversion with corrections|

# **convertDocumentAsyncApiV1ConvertAsyncPost**
> any convertDocumentAsyncApiV1ConvertAsyncPost()

Launch an asynchronous conversion via Celery.  ## Workflow  1. **Upload**: Document is sent as multipart/form-data 2. **Celery Task**: Task is queued for processing 3. **Callback**: Webhook notification on completion  ## Possible responses  - **202**: Task accepted, processing - **400**: Invalid file

### Example

```typescript
import {
    FacturXConversionApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new FacturXConversionApi(configuration);

let file: File; //Document to convert (PDF, DOCX, XLSX, JPG, PNG) (default to undefined)
let output: string; //Output format: pdf, xml, both (optional) (default to 'pdf')
let callbackUrl: string; // (optional) (default to undefined)
let webhookMode: string; //Content delivery mode: \\\'inline\\\' (base64 in webhook) or \\\'download_url\\\' (temporary URL, 1h TTL) (optional) (default to 'inline')

const { status, data } = await apiInstance.convertDocumentAsyncApiV1ConvertAsyncPost(
    file,
    output,
    callbackUrl,
    webhookMode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | Document to convert (PDF, DOCX, XLSX, JPG, PNG) | defaults to undefined|
| **output** | [**string**] | Output format: pdf, xml, both | (optional) defaults to 'pdf'|
| **callbackUrl** | [**string**] |  | (optional) defaults to undefined|
| **webhookMode** | [**string**] | Content delivery mode: \\\&#39;inline\\\&#39; (base64 in webhook) or \\\&#39;download_url\\\&#39; (temporary URL, 1h TTL) | (optional) defaults to 'inline'|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**202** | Task accepted |  -  |
|**400** | Invalid file |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFileApiV1ConvertConversionIdDownloadFilenameGet**
> any downloadFileApiV1ConvertConversionIdDownloadFilenameGet()

Download the generated Factur-X PDF or XML file.  ## Available files  - `facturx.pdf`: PDF/A-3 with embedded XML - `facturx.xml`: XML CII only (Cross Industry Invoice)  Files are available for 24 hours after generation.

### Example

```typescript
import {
    FacturXConversionApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new FacturXConversionApi(configuration);

let conversionId: string; //Conversion ID returned by POST /convert (UUID format) (default to undefined)
let filename: string; //File to download: \'facturx.pdf\' or \'facturx.xml\' (default to undefined)

const { status, data } = await apiInstance.downloadFileApiV1ConvertConversionIdDownloadFilenameGet(
    conversionId,
    filename
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionId** | [**string**] | Conversion ID returned by POST /convert (UUID format) | defaults to undefined|
| **filename** | [**string**] | File to download: \&#39;facturx.pdf\&#39; or \&#39;facturx.xml\&#39; | defaults to undefined|


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
|**200** | File downloaded |  -  |
|**404** | File not found or expired |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConversionStatusApiV1ConvertConversionIdStatusGet**
> { [key: string]: any; } getConversionStatusApiV1ConvertConversionIdStatusGet()

Returns the current status of an asynchronous conversion.

### Example

```typescript
import {
    FacturXConversionApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new FacturXConversionApi(configuration);

let conversionId: string; //Conversion ID returned by POST /convert (UUID format) (default to undefined)

const { status, data } = await apiInstance.getConversionStatusApiV1ConvertConversionIdStatusGet(
    conversionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionId** | [**string**] | Conversion ID returned by POST /convert (UUID format) | defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeConversionApiV1ConvertConversionIdResumePost**
> ConvertSuccessResponse resumeConversionApiV1ConvertConversionIdResumePost(convertResumeRequest)

Resume a conversion after completing missing data or correcting errors.  The OCR extraction is preserved, data is updated with corrections, then a new Schematron validation is performed.

### Example

```typescript
import {
    FacturXConversionApi,
    Configuration,
    ConvertResumeRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new FacturXConversionApi(configuration);

let conversionId: string; //Conversion ID returned by POST /convert (UUID format) (default to undefined)
let convertResumeRequest: ConvertResumeRequest; //

const { status, data } = await apiInstance.resumeConversionApiV1ConvertConversionIdResumePost(
    conversionId,
    convertResumeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **convertResumeRequest** | **ConvertResumeRequest**|  | |
| **conversionId** | [**string**] | Conversion ID returned by POST /convert (UUID format) | defaults to undefined|


### Return type

**ConvertSuccessResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Conversion not found or expired |  -  |
|**422** | Validation still failing |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

