# UserApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserInfoApiV1MeGet**](UserApi.md#getuserinfoapiv1meget) | **GET** /api/v1/me | Get current user information |



## getUserInfoApiV1MeGet

> any getUserInfoApiV1MeGet()

Get current user information

Returns information about the authenticated user.  This endpoint allows you to: - Verify that authentication works - Get connected account details - Test JWT token validity - Check your consumption quota  **Requires valid authentication.**

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { GetUserInfoApiV1MeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.getUserInfoApiV1MeGet();
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

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User information |  -  |
| **401** | Missing or invalid JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

