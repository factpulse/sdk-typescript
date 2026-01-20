# DownloadsApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkFileApiV1DownloadDownloadIdHead**](#checkfileapiv1downloaddownloadidhead) | **HEAD** /api/v1/download/{download_id} | Check if a file exists|
|[**downloadFileApiV1DownloadDownloadIdGet**](#downloadfileapiv1downloaddownloadidget) | **GET** /api/v1/download/{download_id} | Download a temporary file|

# **checkFileApiV1DownloadDownloadIdHead**
> any checkFileApiV1DownloadDownloadIdHead()

Check if a temporary file exists and get its metadata without downloading.  Useful for: - Verifying a download URL is still valid - Getting file size before downloading - Checking expiration time  **Security**: Requires authentication, only file owner can check.

### Example

```typescript
import {
    DownloadsApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new DownloadsApi(configuration);

let downloadId: string; // (default to undefined)

const { status, data } = await apiInstance.checkFileApiV1DownloadDownloadIdHead(
    downloadId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **downloadId** | [**string**] |  | defaults to undefined|


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
|**200** | File exists |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied |  -  |
|**404** | File not found or expired |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFileApiV1DownloadDownloadIdGet**
> any downloadFileApiV1DownloadDownloadIdGet()

Download a file stored temporarily after asynchronous processing.  **Usage**: - This URL is provided in webhook notifications when using `webhook_mode: \"download_url\"` - Files are automatically deleted after 1 hour - Each file can only be downloaded until it expires  **Security**: - Requires a valid JWT token - Only the user who initiated the task can download the file

### Example

```typescript
import {
    DownloadsApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new DownloadsApi(configuration);

let downloadId: string; // (default to undefined)
let deleteAfter: boolean; //If true, delete the file after download (one-time download) (optional) (default to false)

const { status, data } = await apiInstance.downloadFileApiV1DownloadDownloadIdGet(
    downloadId,
    deleteAfter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **downloadId** | [**string**] |  | defaults to undefined|
| **deleteAfter** | [**boolean**] | If true, delete the file after download (one-time download) | (optional) defaults to false|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, application/xml, application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | File content |  -  |
|**401** | Authentication required |  -  |
|**403** | Access denied - file belongs to another user |  -  |
|**404** | File not found or expired |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

