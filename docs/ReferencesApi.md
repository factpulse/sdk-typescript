# ReferencesApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getVatexCodesApiV1ReferencesVatexCodesGet**](#getvatexcodesapiv1referencesvatexcodesget) | **GET** /api/v1/references/vatex-codes | VATEX exemption reason codes|

# **getVatexCodesApiV1ReferencesVatexCodesGet**
> VATEXCodesResponse getVatexCodesApiV1ReferencesVatexCodesGet()

Returns the list of VATEX (VAT exemption reason) codes from the Peppol BIS Billing 3.0 code list. Source: https://docs.peppol.eu/poacc/billing/3.0/codelist/vatex/

### Example

```typescript
import {
    ReferencesApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ReferencesApi(configuration);

let category: string; //Filter by VAT category code (E, AE, K, G, O). (optional) (default to undefined)

const { status, data } = await apiInstance.getVatexCodesApiV1ReferencesVatexCodesGet(
    category
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **category** | [**string**] | Filter by VAT category code (E, AE, K, G, O). | (optional) defaults to undefined|


### Return type

**VATEXCodesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of VATEX codes with their descriptions and associated VAT categories. |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

