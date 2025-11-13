# SantApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**racineGet**](#racineget) | **GET** / | Vérifier l\&#39;état de l\&#39;API|

# **racineGet**
> any racineGet()

Endpoint de health check pour vérifier que l\'API répond.  Utile pour : - Monitoring de disponibilité - Tests d\'intégration - Load balancers

### Example

```typescript
import {
    SantApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new SantApi(configuration);

const { status, data } = await apiInstance.racineGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | L\&#39;API est opérationnelle |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

