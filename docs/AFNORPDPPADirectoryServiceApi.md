# AFNORPDPPADirectoryServiceApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet**](#directoryhealthcheckproxyapiv1afnordirectoryv1healthcheckget) | **GET** /api/v1/afnor/directory/v1/healthcheck | Healthcheck Directory Service|
|[**getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet**](#getdirectorylinebycodeproxyapiv1afnordirectoryv1directorylinecodeaddressingidentifierget) | **GET** /api/v1/afnor/directory/v1/directory-line/code:{addressing_identifier} | Get a directory line.|
|[**getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet**](#getroutingcodebysiretandcodeproxyapiv1afnordirectoryv1routingcodesiretsiretcoderoutingidentifierget) | **GET** /api/v1/afnor/directory/v1/routing-code/siret:{siret}/code:{routing_identifier} | Get a routing code by SIRET and routing identifier|
|[**getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet**](#getsirenbycodeinseeproxyapiv1afnordirectoryv1sirencodeinseesirenget) | **GET** /api/v1/afnor/directory/v1/siren/code-insee:{siren} | Consult a siren (legal unit) by SIREN number|
|[**getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet**](#getsiretbycodeinseeproxyapiv1afnordirectoryv1siretcodeinseesiretget) | **GET** /api/v1/afnor/directory/v1/siret/code-insee:{siret} | Gets a siret (facility) by SIRET number|
|[**searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost**](#searchdirectorylineproxyapiv1afnordirectoryv1directorylinesearchpost) | **POST** /api/v1/afnor/directory/v1/directory-line/search | Search for a directory line|
|[**searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost**](#searchroutingcodeproxyapiv1afnordirectoryv1routingcodesearchpost) | **POST** /api/v1/afnor/directory/v1/routing-code/search | Search for a routing code|
|[**searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost**](#searchsirenproxyapiv1afnordirectoryv1sirensearchpost) | **POST** /api/v1/afnor/directory/v1/siren/search | SIREN search (or legal unit)|
|[**searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost**](#searchsiretproxyapiv1afnordirectoryv1siretsearchpost) | **POST** /api/v1/afnor/directory/v1/siret/search | Search for a SIRET (facility)|

# **directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet**
> object directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet()

Check Directory Service availability (AFNOR XP Z12-013 compliant)

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

const { status, data } = await apiInstance.directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK - Service is operational |  -  |
|**500** | Internal Server Error. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet**
> AFNORDirectoryLinePayloadLegalUnitFacilityRoutingCode getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet()

Retrieve the data from the directory line corresponding to the identifier passed in parameters.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

let addressingIdentifier: string; //Addressing identifier (SIREN, SIRET or routing code) (default to undefined)

const { status, data } = await apiInstance.getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(
    addressingIdentifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressingIdentifier** | [**string**] | Addressing identifier (SIREN, SIRET or routing code) | defaults to undefined|


### Return type

**AFNORDirectoryLinePayloadLegalUnitFacilityRoutingCode**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Retourns a directory line. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet**
> AFNORRoutingCodePayloadHistoryLegalUnitFacility getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet()

Retrieve the Routing Code data corresponding to the identifier passed in parameters.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

let siret: string; //14-digit SIRET number (INSEE establishment identifier) (default to undefined)
let routingIdentifier: string; //Routing code identifier (default to undefined)

const { status, data } = await apiInstance.getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(
    siret,
    routingIdentifier
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siret** | [**string**] | 14-digit SIRET number (INSEE establishment identifier) | defaults to undefined|
| **routingIdentifier** | [**string**] | Routing code identifier | defaults to undefined|


### Return type

**AFNORRoutingCodePayloadHistoryLegalUnitFacility**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a routing code. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet**
> AFNORLegalUnitPayloadHistory getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet()

Returns the details of a company (legal unit) identified by the SIREN number passed as a parameter.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

let siren: string; //9-digit SIREN number (INSEE company identifier) (default to undefined)

const { status, data } = await apiInstance.getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(
    siren
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siren** | [**string**] | 9-digit SIREN number (INSEE company identifier) | defaults to undefined|


### Return type

**AFNORLegalUnitPayloadHistory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a company. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet**
> AFNORFacilityPayloadHistory getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet()

Returns the details of a facility associated to a SIRET.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

let siret: string; //14-digit SIRET number (INSEE establishment identifier) (default to undefined)

const { status, data } = await apiInstance.getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(
    siret
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siret** | [**string**] | 14-digit SIRET number (INSEE establishment identifier) | defaults to undefined|


### Return type

**AFNORFacilityPayloadHistory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a facility. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost**
> AFNORDirectoryLineSearchPost200Response searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost()

Search for directory lines that meet all the criteria passed as parameters and return the results in the desired format.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

const { status, data } = await apiInstance.searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AFNORDirectoryLineSearchPost200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | returns the directory line(s) matching the search criteria. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost**
> AFNORRoutingCodeSearchPost200Response searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost()

Search for routing codes that meet all the criteria passed as parameters and return the routing codes in the desired format.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

const { status, data } = await apiInstance.searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AFNORRoutingCodeSearchPost200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the routing code(s) matching the search criteria. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost**
> AFNORSirenSearchPost200Response searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost()

Multi-criteria company search.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

const { status, data } = await apiInstance.searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AFNORSirenSearchPost200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns one or more companies. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost**
> AFNORSiretSearchPost200Response searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost()

Multi-criteria search for facilities.

### Example

```typescript
import {
    AFNORPDPPADirectoryServiceApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new AFNORPDPPADirectoryServiceApi(configuration);

const { status, data } = await apiInstance.searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AFNORSiretSearchPost200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an establishment as defined on a given observation date or as defined on the current date if the observation date is not specified. |  -  |
|**400** | Bad request. The request is invalid or cannot be completed. |  -  |
|**401** | Unauthorized. The request requires user authentication. |  -  |
|**403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
|**404** | Not found. There is no resource at the given URI. |  -  |
|**408** | Request timeout exceeded. |  -  |
|**422** | Data validation error. |  -  |
|**429** | The client has issued too many calls within a given time frame. |  -  |
|**500** | Internal Server Error. |  -  |
|**501** | Not implemented. |  -  |
|**503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

