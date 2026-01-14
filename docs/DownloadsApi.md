# DownloadsApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkFileApiV1DownloadDownloadIdHead**](DownloadsApi.md#checkfileapiv1downloaddownloadidhead) | **HEAD** /api/v1/download/{download_id} | Check if a file exists |
| [**checkFileApiV1DownloadDownloadIdHead_0**](DownloadsApi.md#checkfileapiv1downloaddownloadidhead_0) | **HEAD** /api/v1/download/{download_id} | Check if a file exists |
| [**downloadFileApiV1DownloadDownloadIdGet**](DownloadsApi.md#downloadfileapiv1downloaddownloadidget) | **GET** /api/v1/download/{download_id} | Download a temporary file |
| [**downloadFileApiV1DownloadDownloadIdGet_0**](DownloadsApi.md#downloadfileapiv1downloaddownloadidget_0) | **GET** /api/v1/download/{download_id} | Download a temporary file |



## checkFileApiV1DownloadDownloadIdHead

> any checkFileApiV1DownloadDownloadIdHead(downloadId)

Check if a file exists

Check if a temporary file exists and get its metadata without downloading.  Useful for: - Verifying a download URL is still valid - Getting file size before downloading - Checking expiration time  **Security**: Requires authentication, only file owner can check.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '';
import type { CheckFileApiV1DownloadDownloadIdHeadRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DownloadsApi(config);

  const body = {
    // string
    downloadId: downloadId_example,
  } satisfies CheckFileApiV1DownloadDownloadIdHeadRequest;

  try {
    const data = await api.checkFileApiV1DownloadDownloadIdHead(body);
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
| **downloadId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | File exists |  -  |
| **401** | Authentication required |  -  |
| **403** | Access denied |  -  |
| **404** | File not found or expired |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## checkFileApiV1DownloadDownloadIdHead_0

> any checkFileApiV1DownloadDownloadIdHead_0(downloadId)

Check if a file exists

Check if a temporary file exists and get its metadata without downloading.  Useful for: - Verifying a download URL is still valid - Getting file size before downloading - Checking expiration time  **Security**: Requires authentication, only file owner can check.

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '';
import type { CheckFileApiV1DownloadDownloadIdHead0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DownloadsApi(config);

  const body = {
    // string
    downloadId: downloadId_example,
  } satisfies CheckFileApiV1DownloadDownloadIdHead0Request;

  try {
    const data = await api.checkFileApiV1DownloadDownloadIdHead_0(body);
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
| **downloadId** | `string` |  | [Defaults to `undefined`] |

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
| **200** | File exists |  -  |
| **401** | Authentication required |  -  |
| **403** | Access denied |  -  |
| **404** | File not found or expired |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadFileApiV1DownloadDownloadIdGet

> any downloadFileApiV1DownloadDownloadIdGet(downloadId, deleteAfter)

Download a temporary file

Download a file stored temporarily after asynchronous processing.  **Usage**: - This URL is provided in webhook notifications when using &#x60;webhook_mode: \&quot;download_url\&quot;&#x60; - Files are automatically deleted after 1 hour - Each file can only be downloaded until it expires  **Security**: - Requires a valid JWT token - Only the user who initiated the task can download the file

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '';
import type { DownloadFileApiV1DownloadDownloadIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DownloadsApi(config);

  const body = {
    // string
    downloadId: downloadId_example,
    // boolean | If true, delete the file after download (one-time download) (optional)
    deleteAfter: true,
  } satisfies DownloadFileApiV1DownloadDownloadIdGetRequest;

  try {
    const data = await api.downloadFileApiV1DownloadDownloadIdGet(body);
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
| **downloadId** | `string` |  | [Defaults to `undefined`] |
| **deleteAfter** | `boolean` | If true, delete the file after download (one-time download) | [Optional] [Defaults to `false`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/pdf`, `application/xml`, `application/octet-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | File content |  -  |
| **401** | Authentication required |  -  |
| **403** | Access denied - file belongs to another user |  -  |
| **404** | File not found or expired |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadFileApiV1DownloadDownloadIdGet_0

> any downloadFileApiV1DownloadDownloadIdGet_0(downloadId, deleteAfter)

Download a temporary file

Download a file stored temporarily after asynchronous processing.  **Usage**: - This URL is provided in webhook notifications when using &#x60;webhook_mode: \&quot;download_url\&quot;&#x60; - Files are automatically deleted after 1 hour - Each file can only be downloaded until it expires  **Security**: - Requires a valid JWT token - Only the user who initiated the task can download the file

### Example

```ts
import {
  Configuration,
  DownloadsApi,
} from '';
import type { DownloadFileApiV1DownloadDownloadIdGet0Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DownloadsApi(config);

  const body = {
    // string
    downloadId: downloadId_example,
    // boolean | If true, delete the file after download (one-time download) (optional)
    deleteAfter: true,
  } satisfies DownloadFileApiV1DownloadDownloadIdGet0Request;

  try {
    const data = await api.downloadFileApiV1DownloadDownloadIdGet_0(body);
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
| **downloadId** | `string` |  | [Defaults to `undefined`] |
| **deleteAfter** | `boolean` | If true, delete the file after download (one-time download) | [Optional] [Defaults to `false`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/pdf`, `application/xml`, `application/octet-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | File content |  -  |
| **401** | Authentication required |  -  |
| **403** | Access denied - file belongs to another user |  -  |
| **404** | File not found or expired |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

