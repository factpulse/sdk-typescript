# HealthApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthcheckHealthcheckGet**](HealthApi.md#healthcheckhealthcheckget) | **GET** /healthcheck | Docker healthcheck endpoint |
| [**rootGet**](HealthApi.md#rootget) | **GET** / | Check API status |



## healthcheckHealthcheckGet

> any healthcheckHealthcheckGet()

Docker healthcheck endpoint

Healthcheck endpoint for Docker and load balancers.  Useful for: - Docker healthcheck - Kubernetes liveness/readiness probes - Load balancers (Nginx, HAProxy) - Availability monitoring - Zero downtime deployment  Returns a 200 code if the API is operational.

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { HealthcheckHealthcheckGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.healthcheckHealthcheckGet();
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
| **200** | API is healthy |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rootGet

> any rootGet()

Check API status

Health check endpoint to verify the API is responding.  Useful for: - Availability monitoring - Integration tests - Load balancers

### Example

```ts
import {
  Configuration,
  HealthApi,
} from '';
import type { RootGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new HealthApi();

  try {
    const data = await api.rootGet();
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
| **200** | API is operational |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

