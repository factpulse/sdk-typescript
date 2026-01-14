# PDFXMLVerificationApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet**](PDFXMLVerificationApi.md#getverificationstatusapiv1verificationverifyasynctaskidstatusget) | **GET** /api/v1/verification/verify-async/{task_id}/status | Get status of an asynchronous verification |
| [**getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet_0**](PDFXMLVerificationApi.md#getverificationstatusapiv1verificationverifyasynctaskidstatusget_0) | **GET** /api/v1/verification/verify-async/{task_id}/status | Get status of an asynchronous verification |
| [**verifyPdfAsyncApiV1VerificationVerifyAsyncPost**](PDFXMLVerificationApi.md#verifypdfasyncapiv1verificationverifyasyncpost) | **POST** /api/v1/verification/verify-async | Verify PDF/XML Factur-X compliance (asynchronous) |
| [**verifyPdfAsyncApiV1VerificationVerifyAsyncPost_0**](PDFXMLVerificationApi.md#verifypdfasyncapiv1verificationverifyasyncpost_0) | **POST** /api/v1/verification/verify-async | Verify PDF/XML Factur-X compliance (asynchronous) |
| [**verifyPdfSyncApiV1VerificationVerifyPost**](PDFXMLVerificationApi.md#verifypdfsyncapiv1verificationverifypost) | **POST** /api/v1/verification/verify | Verify PDF/XML Factur-X compliance (synchronous) |
| [**verifyPdfSyncApiV1VerificationVerifyPost_0**](PDFXMLVerificationApi.md#verifypdfsyncapiv1verificationverifypost_0) | **POST** /api/v1/verification/verify | Verify PDF/XML Factur-X compliance (synchronous) |



## getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet

> AsyncTaskStatus getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet(taskId)

Get status of an asynchronous verification

Retrieves the status and result of an asynchronous verification task.  **Possible statuses:** - &#x60;PENDING&#x60;: Task waiting in queue - &#x60;STARTED&#x60;: Task currently running - &#x60;SUCCESS&#x60;: Task completed successfully (see &#x60;result&#x60;) - &#x60;FAILURE&#x60;: System error (unhandled exception)  **Note:** The &#x60;result.status&#x60; field can be \&quot;SUCCESS\&quot; or \&quot;ERROR\&quot; independently of Celery status (which will always be SUCCESS if the task ran).

### Example

```ts
import {
  Configuration,
  PDFXMLVerificationApi,
} from '';
import type { GetVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PDFXMLVerificationApi(config);

  const body = {
    // string | Celery task ID returned by /verify-async endpoint
    taskId: taskId_example,
  } satisfies GetVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGetRequest;

  try {
    const data = await api.getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet(body);
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
| **taskId** | `string` | Celery task ID returned by /verify-async endpoint | [Defaults to `undefined`] |

### Return type

[**AsyncTaskStatus**](AsyncTaskStatus.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet_0

> AsyncTaskStatus getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet_0(taskId)

Get status of an asynchronous verification

Retrieves the status and result of an asynchronous verification task.  **Possible statuses:** - &#x60;PENDING&#x60;: Task waiting in queue - &#x60;STARTED&#x60;: Task currently running - &#x60;SUCCESS&#x60;: Task completed successfully (see &#x60;result&#x60;) - &#x60;FAILURE&#x60;: System error (unhandled exception)  **Note:** The &#x60;result.status&#x60; field can be \&quot;SUCCESS\&quot; or \&quot;ERROR\&quot; independently of Celery status (which will always be SUCCESS if the task ran).

### Example

```ts
import {
  Configuration,
  PDFXMLVerificationApi,
} from '';
import type { GetVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PDFXMLVerificationApi(config);

  const body = {
    // string | Celery task ID returned by /verify-async endpoint
    taskId: taskId_example,
  } satisfies GetVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet0Request;

  try {
    const data = await api.getVerificationStatusApiV1VerificationVerifyAsyncTaskIdStatusGet_0(body);
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
| **taskId** | `string` | Celery task ID returned by /verify-async endpoint | [Defaults to `undefined`] |

### Return type

[**AsyncTaskStatus**](AsyncTaskStatus.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyPdfAsyncApiV1VerificationVerifyAsyncPost

> TaskResponse verifyPdfAsyncApiV1VerificationVerifyAsyncPost(pdfFile, forceOcr, callbackUrl, webhookMode)

Verify PDF/XML Factur-X compliance (asynchronous)

Verifies PDF/XML Factur-X compliance asynchronously.  **IMPORTANT**: Only Factur-X PDFs (with embedded XML) are accepted. PDFs without Factur-X XML will return a &#x60;NOT_FACTURX&#x60; error in the result.  This version uses a Celery task and can call the OCR service if the PDF is an image or if &#x60;force_ocr&#x3D;true&#x60;.  **Returns immediately** a task ID. Use &#x60;/verify-async/{task_id}/status&#x60; to retrieve the result.  **Verification principle (Factur-X 1.08):** - Principle #2: XML can only contain info present in the PDF - Principle #4: All XML info must be present and compliant in the PDF  **Verified fields:** - Identification: BT-1 (invoice #), BT-2 (date), BT-3 (type), BT-5 (currency), BT-23 (framework) - Seller: BT-27 (name), BT-29 (SIRET), BT-30 (SIREN), BT-31 (VAT) - Buyer: BT-44 (name), BT-46 (SIRET), BT-47 (SIREN), BT-48 (VAT) - Amounts: BT-109 (excl. tax), BT-110 (VAT), BT-112 (incl. tax), BT-115 (amount due) - VAT breakdown: BT-116, BT-117, BT-118, BT-119 - Invoice lines: BT-153, BT-129, BT-146, BT-131 - Mandatory notes: PMT, PMD, AAB - Rule BR-FR-09: SIRET/SIREN consistency  **Advantages over synchronous version:** - OCR support for image PDFs (via DocTR service) - Longer timeout for large documents - Doesn\&#39;t block the server  ## Webhook notification (recommended)  Instead of polling, you can receive a webhook notification when verification completes:  &#x60;&#x60;&#x60; callback_url&#x3D;https://your-server.com/webhook &#x60;&#x60;&#x60;  The webhook will POST a JSON payload with: - &#x60;event_type&#x60;: &#x60;verification.completed&#x60; or &#x60;verification.failed&#x60; - &#x60;data.is_compliant&#x60;: Whether the PDF/XML are consistent - &#x60;data.compliance_score&#x60;: Compliance score (0-1) - &#x60;X-Webhook-Signature&#x60; header for HMAC verification

### Example

```ts
import {
  Configuration,
  PDFXMLVerificationApi,
} from '';
import type { VerifyPdfAsyncApiV1VerificationVerifyAsyncPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PDFXMLVerificationApi(config);

  const body = {
    // Blob | Factur-X PDF file to verify
    pdfFile: BINARY_DATA_HERE,
    // boolean | Force OCR usage even if PDF contains native text (optional)
    forceOcr: true,
    // string (optional)
    callbackUrl: callbackUrl_example,
    // string | Webhook content delivery: \\\'inline\\\' (base64 in payload) or \\\'download_url\\\' (temporary URL, 1h TTL) (optional)
    webhookMode: webhookMode_example,
  } satisfies VerifyPdfAsyncApiV1VerificationVerifyAsyncPostRequest;

  try {
    const data = await api.verifyPdfAsyncApiV1VerificationVerifyAsyncPost(body);
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
| **pdfFile** | `Blob` | Factur-X PDF file to verify | [Defaults to `undefined`] |
| **forceOcr** | `boolean` | Force OCR usage even if PDF contains native text | [Optional] [Defaults to `false`] |
| **callbackUrl** | `string` |  | [Optional] [Defaults to `undefined`] |
| **webhookMode** | `string` | Webhook content delivery: \\\&#39;inline\\\&#39; (base64 in payload) or \\\&#39;download_url\\\&#39; (temporary URL, 1h TTL) | [Optional] [Defaults to `&#39;inline&#39;`] |

### Return type

[**TaskResponse**](TaskResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyPdfAsyncApiV1VerificationVerifyAsyncPost_0

> TaskResponse verifyPdfAsyncApiV1VerificationVerifyAsyncPost_0(pdfFile, forceOcr, callbackUrl, webhookMode)

Verify PDF/XML Factur-X compliance (asynchronous)

Verifies PDF/XML Factur-X compliance asynchronously.  **IMPORTANT**: Only Factur-X PDFs (with embedded XML) are accepted. PDFs without Factur-X XML will return a &#x60;NOT_FACTURX&#x60; error in the result.  This version uses a Celery task and can call the OCR service if the PDF is an image or if &#x60;force_ocr&#x3D;true&#x60;.  **Returns immediately** a task ID. Use &#x60;/verify-async/{task_id}/status&#x60; to retrieve the result.  **Verification principle (Factur-X 1.08):** - Principle #2: XML can only contain info present in the PDF - Principle #4: All XML info must be present and compliant in the PDF  **Verified fields:** - Identification: BT-1 (invoice #), BT-2 (date), BT-3 (type), BT-5 (currency), BT-23 (framework) - Seller: BT-27 (name), BT-29 (SIRET), BT-30 (SIREN), BT-31 (VAT) - Buyer: BT-44 (name), BT-46 (SIRET), BT-47 (SIREN), BT-48 (VAT) - Amounts: BT-109 (excl. tax), BT-110 (VAT), BT-112 (incl. tax), BT-115 (amount due) - VAT breakdown: BT-116, BT-117, BT-118, BT-119 - Invoice lines: BT-153, BT-129, BT-146, BT-131 - Mandatory notes: PMT, PMD, AAB - Rule BR-FR-09: SIRET/SIREN consistency  **Advantages over synchronous version:** - OCR support for image PDFs (via DocTR service) - Longer timeout for large documents - Doesn\&#39;t block the server  ## Webhook notification (recommended)  Instead of polling, you can receive a webhook notification when verification completes:  &#x60;&#x60;&#x60; callback_url&#x3D;https://your-server.com/webhook &#x60;&#x60;&#x60;  The webhook will POST a JSON payload with: - &#x60;event_type&#x60;: &#x60;verification.completed&#x60; or &#x60;verification.failed&#x60; - &#x60;data.is_compliant&#x60;: Whether the PDF/XML are consistent - &#x60;data.compliance_score&#x60;: Compliance score (0-1) - &#x60;X-Webhook-Signature&#x60; header for HMAC verification

### Example

```ts
import {
  Configuration,
  PDFXMLVerificationApi,
} from '';
import type { VerifyPdfAsyncApiV1VerificationVerifyAsyncPost0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PDFXMLVerificationApi(config);

  const body = {
    // Blob | Factur-X PDF file to verify
    pdfFile: BINARY_DATA_HERE,
    // boolean | Force OCR usage even if PDF contains native text (optional)
    forceOcr: true,
    // string (optional)
    callbackUrl: callbackUrl_example,
    // string | Webhook content delivery: \\\'inline\\\' (base64 in payload) or \\\'download_url\\\' (temporary URL, 1h TTL) (optional)
    webhookMode: webhookMode_example,
  } satisfies VerifyPdfAsyncApiV1VerificationVerifyAsyncPost0Request;

  try {
    const data = await api.verifyPdfAsyncApiV1VerificationVerifyAsyncPost_0(body);
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
| **pdfFile** | `Blob` | Factur-X PDF file to verify | [Defaults to `undefined`] |
| **forceOcr** | `boolean` | Force OCR usage even if PDF contains native text | [Optional] [Defaults to `false`] |
| **callbackUrl** | `string` |  | [Optional] [Defaults to `undefined`] |
| **webhookMode** | `string` | Webhook content delivery: \\\&#39;inline\\\&#39; (base64 in payload) or \\\&#39;download_url\\\&#39; (temporary URL, 1h TTL) | [Optional] [Defaults to `&#39;inline&#39;`] |

### Return type

[**TaskResponse**](TaskResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyPdfSyncApiV1VerificationVerifyPost

> VerificationSuccessResponse verifyPdfSyncApiV1VerificationVerifyPost(pdfFile)

Verify PDF/XML Factur-X compliance (synchronous)

Verifies compliance between the PDF and its embedded Factur-X XML.  **IMPORTANT**: Only Factur-X PDFs (with embedded XML) are accepted. PDFs without Factur-X XML will be rejected with a 400 error.  This synchronous version uses only native PDF extraction (pdfplumber). For image PDFs requiring OCR, use the &#x60;/verify-async&#x60; endpoint.  **Verification principle (Factur-X 1.08):** - Principle #2: XML can only contain info present in the PDF - Principle #4: All XML info must be present and compliant in the PDF  **Verified fields:** - Identification: BT-1 (invoice #), BT-2 (date), BT-3 (type), BT-5 (currency), BT-23 (framework) - Seller: BT-27 (name), BT-29 (SIRET), BT-30 (SIREN), BT-31 (VAT) - Buyer: BT-44 (name), BT-46 (SIRET), BT-47 (SIREN), BT-48 (VAT) - Amounts: BT-109 (excl. tax), BT-110 (VAT), BT-112 (incl. tax), BT-115 (amount due) - VAT breakdown: BT-116, BT-117, BT-118, BT-119 - Invoice lines: BT-153, BT-129, BT-146, BT-131 - Mandatory notes: PMT, PMD, AAB - Rule BR-FR-09: SIRET/SIREN consistency

### Example

```ts
import {
  Configuration,
  PDFXMLVerificationApi,
} from '';
import type { VerifyPdfSyncApiV1VerificationVerifyPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PDFXMLVerificationApi(config);

  const body = {
    // Blob | Factur-X PDF file to verify
    pdfFile: BINARY_DATA_HERE,
  } satisfies VerifyPdfSyncApiV1VerificationVerifyPostRequest;

  try {
    const data = await api.verifyPdfSyncApiV1VerificationVerifyPost(body);
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
| **pdfFile** | `Blob` | Factur-X PDF file to verify | [Defaults to `undefined`] |

### Return type

[**VerificationSuccessResponse**](VerificationSuccessResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification successful |  -  |
| **400** | Verification error (non Factur-X PDF, invalid, etc.) |  -  |
| **413** | PDF too large or too many pages |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## verifyPdfSyncApiV1VerificationVerifyPost_0

> VerificationSuccessResponse verifyPdfSyncApiV1VerificationVerifyPost_0(pdfFile)

Verify PDF/XML Factur-X compliance (synchronous)

Verifies compliance between the PDF and its embedded Factur-X XML.  **IMPORTANT**: Only Factur-X PDFs (with embedded XML) are accepted. PDFs without Factur-X XML will be rejected with a 400 error.  This synchronous version uses only native PDF extraction (pdfplumber). For image PDFs requiring OCR, use the &#x60;/verify-async&#x60; endpoint.  **Verification principle (Factur-X 1.08):** - Principle #2: XML can only contain info present in the PDF - Principle #4: All XML info must be present and compliant in the PDF  **Verified fields:** - Identification: BT-1 (invoice #), BT-2 (date), BT-3 (type), BT-5 (currency), BT-23 (framework) - Seller: BT-27 (name), BT-29 (SIRET), BT-30 (SIREN), BT-31 (VAT) - Buyer: BT-44 (name), BT-46 (SIRET), BT-47 (SIREN), BT-48 (VAT) - Amounts: BT-109 (excl. tax), BT-110 (VAT), BT-112 (incl. tax), BT-115 (amount due) - VAT breakdown: BT-116, BT-117, BT-118, BT-119 - Invoice lines: BT-153, BT-129, BT-146, BT-131 - Mandatory notes: PMT, PMD, AAB - Rule BR-FR-09: SIRET/SIREN consistency

### Example

```ts
import {
  Configuration,
  PDFXMLVerificationApi,
} from '';
import type { VerifyPdfSyncApiV1VerificationVerifyPost0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PDFXMLVerificationApi(config);

  const body = {
    // Blob | Factur-X PDF file to verify
    pdfFile: BINARY_DATA_HERE,
  } satisfies VerifyPdfSyncApiV1VerificationVerifyPost0Request;

  try {
    const data = await api.verifyPdfSyncApiV1VerificationVerifyPost_0(body);
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
| **pdfFile** | `Blob` | Factur-X PDF file to verify | [Defaults to `undefined`] |

### Return type

[**VerificationSuccessResponse**](VerificationSuccessResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Verification successful |  -  |
| **400** | Verification error (non Factur-X PDF, invalid, etc.) |  -  |
| **413** | PDF too large or too many pages |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

