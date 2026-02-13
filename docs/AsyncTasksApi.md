# AsyncTasksApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGenerationTaskStatusApiV1ProcessingTasksTaskIdGenerationStatusGet**](#getgenerationtaskstatusapiv1processingtaskstaskidgenerationstatusget) | **GET** /api/v1/processing/tasks/{task_id}/generation-status | Get typed generation task status|
|[**getSignatureTaskStatusApiV1ProcessingTasksTaskIdSignatureStatusGet**](#getsignaturetaskstatusapiv1processingtaskstaskidsignaturestatusget) | **GET** /api/v1/processing/tasks/{task_id}/signature-status | Get typed signature task status|
|[**getTaskStatusApiV1ProcessingTasksTaskIdStatusGet**](#gettaskstatusapiv1processingtaskstaskidstatusget) | **GET** /api/v1/processing/tasks/{task_id}/status | Get task generation status|
|[**getValidationTaskStatusApiV1ProcessingTasksTaskIdValidationStatusGet**](#getvalidationtaskstatusapiv1processingtaskstaskidvalidationstatusget) | **GET** /api/v1/processing/tasks/{task_id}/validation-status | Get typed validation task status|

# **getGenerationTaskStatusApiV1ProcessingTasksTaskIdGenerationStatusGet**
> GenerationTaskStatus getGenerationTaskStatusApiV1ProcessingTasksTaskIdGenerationStatusGet()

Typed status endpoint for invoice generation tasks.  Returns a strongly-typed `result` (discriminated on `result.status`): - **SUCCESS**: `GenerationSuccessResult` with `content_b64` / `xml_content` - **ERROR**: `TaskErrorResult` in AFNOR format

### Example

```typescript
import {
    AsyncTasksApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AsyncTasksApi(configuration);

let taskId: string; //Celery task ID returned by /generate-invoice (default to undefined)

const { status, data } = await apiInstance.getGenerationTaskStatusApiV1ProcessingTasksTaskIdGenerationStatusGet(
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskId** | [**string**] | Celery task ID returned by /generate-invoice | defaults to undefined|


### Return type

**GenerationTaskStatus**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **getSignatureTaskStatusApiV1ProcessingTasksTaskIdSignatureStatusGet**
> SignatureTaskStatus getSignatureTaskStatusApiV1ProcessingTasksTaskIdSignatureStatusGet()

Typed status endpoint for PDF signing tasks.  Returns a strongly-typed `result` (discriminated on `result.status`): - **SUCCESS**: `SignatureSuccessResult` with `content_b64`, `signer_cn`, etc. - **ERROR**: `TaskErrorResult` in AFNOR format

### Example

```typescript
import {
    AsyncTasksApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AsyncTasksApi(configuration);

let taskId: string; //Celery task ID returned by /sign-pdf-async (default to undefined)

const { status, data } = await apiInstance.getSignatureTaskStatusApiV1ProcessingTasksTaskIdSignatureStatusGet(
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskId** | [**string**] | Celery task ID returned by /sign-pdf-async | defaults to undefined|


### Return type

**SignatureTaskStatus**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

# **getTaskStatusApiV1ProcessingTasksTaskIdStatusGet**
> AsyncTaskStatus getTaskStatusApiV1ProcessingTasksTaskIdStatusGet()

Retrieves the progress status of an invoice generation task.  ## Possible states  The `status` field uses the `CeleryStatus` enum with values: - **PENDING, STARTED, SUCCESS, FAILURE, RETRY**  See the `CeleryStatus` schema documentation for details.  ## Business result  When `status=\"SUCCESS\"`, the `result` field contains: - `status`: \"SUCCESS\" or \"ERROR\" (business result) - `content_b64`: Base64 encoded content (if success) - `errorCode`, `errorMessage`, `details`: AFNOR format (if business error)  ## Usage  Poll this endpoint every 2-3 seconds until `status` is `SUCCESS` or `FAILURE`.

### Example

```typescript
import {
    AsyncTasksApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AsyncTasksApi(configuration);

let taskId: string; //Celery task ID returned by async endpoints (UUID format) (default to undefined)

const { status, data } = await apiInstance.getTaskStatusApiV1ProcessingTasksTaskIdStatusGet(
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskId** | [**string**] | Celery task ID returned by async endpoints (UUID format) | defaults to undefined|


### Return type

**AsyncTaskStatus**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Current task state |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getValidationTaskStatusApiV1ProcessingTasksTaskIdValidationStatusGet**
> ValidationTaskStatus getValidationTaskStatusApiV1ProcessingTasksTaskIdValidationStatusGet()

Typed status endpoint for Factur-X PDF validation tasks.  Returns a strongly-typed `result` (discriminated on `result.status`): - **SUCCESS**: `ValidationSuccessTaskResult` with `validation_result` - **ERROR**: `TaskErrorResult` in AFNOR format

### Example

```typescript
import {
    AsyncTasksApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AsyncTasksApi(configuration);

let taskId: string; //Celery task ID returned by /validate-pdf (default to undefined)

const { status, data } = await apiInstance.getValidationTaskStatusApiV1ProcessingTasksTaskIdValidationStatusGet(
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskId** | [**string**] | Celery task ID returned by /validate-pdf | defaults to undefined|


### Return type

**ValidationTaskStatus**

### Authorization

[APIKeyHeader](../README.md#APIKeyHeader), [HTTPBearer](../README.md#HTTPBearer)

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

