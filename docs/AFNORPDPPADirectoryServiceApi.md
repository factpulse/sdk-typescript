# AFNORPDPPADirectoryServiceApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost**](AFNORPDPPADirectoryServiceApi.md#createdirectorylineproxyapiv1afnordirectoryv1directorylinepost) | **POST** /api/v1/afnor/directory/v1/directory-line | Creating a directory line |
| [**createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost**](AFNORPDPPADirectoryServiceApi.md#createroutingcodeproxyapiv1afnordirectoryv1routingcodepost) | **POST** /api/v1/afnor/directory/v1/routing-code | Create a routing code |
| [**deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete**](AFNORPDPPADirectoryServiceApi.md#deletedirectorylineproxyapiv1afnordirectoryv1directorylineidinstanceidinstancedelete) | **DELETE** /api/v1/afnor/directory/v1/directory-line/id-instance:{id_instance} | Delete a directory line |
| [**directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet**](AFNORPDPPADirectoryServiceApi.md#directoryhealthcheckproxyapiv1afnordirectoryv1healthcheckget) | **GET** /api/v1/afnor/directory/v1/healthcheck | Healthcheck Directory Service |
| [**getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet**](AFNORPDPPADirectoryServiceApi.md#getdirectorylinebycodeproxyapiv1afnordirectoryv1directorylinecodeaddressingidentifierget) | **GET** /api/v1/afnor/directory/v1/directory-line/code:{addressing_identifier} | Get a directory line. |
| [**getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet**](AFNORPDPPADirectoryServiceApi.md#getdirectorylinebyidinstanceproxyapiv1afnordirectoryv1directorylineidinstanceidinstanceget) | **GET** /api/v1/afnor/directory/v1/directory-line/id-instance:{id_instance} | Get a directory line. |
| [**getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet**](AFNORPDPPADirectoryServiceApi.md#getroutingcodebyidinstanceproxyapiv1afnordirectoryv1routingcodeidinstanceidinstanceget) | **GET** /api/v1/afnor/directory/v1/routing-code/id-instance:{id_instance} | Get a routing code by instance-id. |
| [**getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet**](AFNORPDPPADirectoryServiceApi.md#getroutingcodebysiretandcodeproxyapiv1afnordirectoryv1routingcodesiretsiretcoderoutingidentifierget) | **GET** /api/v1/afnor/directory/v1/routing-code/siret:{siret}/code:{routing_identifier} | Get a routing code by SIRET and routing identifier |
| [**getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet**](AFNORPDPPADirectoryServiceApi.md#getsirenbycodeinseeproxyapiv1afnordirectoryv1sirencodeinseesirenget) | **GET** /api/v1/afnor/directory/v1/siren/code-insee:{siren} | Consult a siren (legal unit) by SIREN number |
| [**getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet**](AFNORPDPPADirectoryServiceApi.md#getsirenbyidinstanceproxyapiv1afnordirectoryv1sirenidinstanceidinstanceget) | **GET** /api/v1/afnor/directory/v1/siren/id-instance:{id_instance} | Gets a siren (legal unit) by instance ID |
| [**getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet**](AFNORPDPPADirectoryServiceApi.md#getsiretbycodeinseeproxyapiv1afnordirectoryv1siretcodeinseesiretget) | **GET** /api/v1/afnor/directory/v1/siret/code-insee:{siret} | Gets a siret (facility) by SIRET number |
| [**getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet**](AFNORPDPPADirectoryServiceApi.md#getsiretbyidinstanceproxyapiv1afnordirectoryv1siretidinstanceidinstanceget) | **GET** /api/v1/afnor/directory/v1/siret/id-instance:{id_instance} | Gets a siret (facility) by id-instance |
| [**patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch**](AFNORPDPPADirectoryServiceApi.md#patchdirectorylineproxyapiv1afnordirectoryv1directorylineidinstanceidinstancepatch) | **PATCH** /api/v1/afnor/directory/v1/directory-line/id-instance:{id_instance} | Partially updates a directory line.. |
| [**patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch**](AFNORPDPPADirectoryServiceApi.md#patchroutingcodeproxyapiv1afnordirectoryv1routingcodeidinstanceidinstancepatch) | **PATCH** /api/v1/afnor/directory/v1/routing-code/id-instance:{id_instance} | Partially update a private routing code. |
| [**putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut**](AFNORPDPPADirectoryServiceApi.md#putroutingcodeproxyapiv1afnordirectoryv1routingcodeidinstanceidinstanceput) | **PUT** /api/v1/afnor/directory/v1/routing-code/id-instance:{id_instance} | Completely update a private routing code. |
| [**searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost**](AFNORPDPPADirectoryServiceApi.md#searchdirectorylineproxyapiv1afnordirectoryv1directorylinesearchpost) | **POST** /api/v1/afnor/directory/v1/directory-line/search | Search for a directory line |
| [**searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost**](AFNORPDPPADirectoryServiceApi.md#searchroutingcodeproxyapiv1afnordirectoryv1routingcodesearchpost) | **POST** /api/v1/afnor/directory/v1/routing-code/search | Search for a routing code |
| [**searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost**](AFNORPDPPADirectoryServiceApi.md#searchsirenproxyapiv1afnordirectoryv1sirensearchpost) | **POST** /api/v1/afnor/directory/v1/siren/search | SIREN search (or legal unit) |
| [**searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost**](AFNORPDPPADirectoryServiceApi.md#searchsiretproxyapiv1afnordirectoryv1siretsearchpost) | **POST** /api/v1/afnor/directory/v1/siret/search | Search for a SIRET (facility) |



## createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost

> any createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(acceptLanguage)

Creating a directory line

Creation of a new directory line for a SIREN, a SIRET or a ROUTING CODE.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { CreateDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies CreateDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePostRequest;

  try {
    const data = await api.createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(body);
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
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

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
| **200** | Successful Response |  -  |
| **201** | A new resource has been created. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost

> any createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(acceptLanguage)

Create a routing code

Creating a routing code.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { CreateRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies CreateRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePostRequest;

  try {
    const data = await api.createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(body);
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
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

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
| **200** | Successful Response |  -  |
| **201** | A new resource has been created. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete

> any deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(idInstance, acceptLanguage)

Delete a directory line

Delete a directory line.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { DeleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies DeleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDeleteRequest;

  try {
    const data = await api.deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

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
| **200** | Successful Response |  -  |
| **204** | OK. The resource has been deleted. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet

> object directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet()

Healthcheck Directory Service

Check Directory Service availability (AFNOR XP Z12-013 compliant)

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { DirectoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AFNORPDPPADirectoryServiceApi();

  try {
    const data = await api.directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet();
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

**object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK - Service is operational |  -  |
| **500** | Internal Server Error. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet

> AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(addressingIdentifier, fields, include, acceptLanguage)

Get a directory line.

Retrieve the data from the directory line corresponding to the identifier passed in parameters.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | Addressing identifier (SIREN, SIRET or routing code)
    addressingIdentifier: addressingIdentifier_example,
    // Array<string> | Fields of the Directory Line resource. (optional)
    fields: ...,
    // Array<DirectoryLineInclude> | Relations to include in the response. (optional)
    include: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGetRequest;

  try {
    const data = await api.getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(body);
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
| **addressingIdentifier** | `string` | Addressing identifier (SIREN, SIRET or routing code) | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of the Directory Line resource. | [Optional] |
| **include** | `Array<DirectoryLineInclude>` | Relations to include in the response. | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode**](AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Retourns a directory line. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet

> AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(idInstance, fields, acceptLanguage)

Get a directory line.

Retrieve the data from the directory line corresponding to the identifier passed in parameters.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // Array<string> | Fields of the Directory Line resource. (optional)
    fields: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGetRequest;

  try {
    const data = await api.getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of the Directory Line resource. | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode**](AFNORDirectoryLinePayloadHistoryLegalUnitFacilityRoutingCode.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a directory line. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet

> AFNORRoutingCodePayloadHistoryLegalUnitFacility getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(idInstance, fields, acceptLanguage)

Get a routing code by instance-id.

Retrieve the Routing Code data corresponding to the Instance ID.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // Array<string> | Fields of the Routing Code resource (optional)
    fields: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGetRequest;

  try {
    const data = await api.getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of the Routing Code resource | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORRoutingCodePayloadHistoryLegalUnitFacility**](AFNORRoutingCodePayloadHistoryLegalUnitFacility.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a routing code. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet

> AFNORRoutingCodePayloadHistoryLegalUnitFacility getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(siret, routingIdentifier, fields, include, acceptLanguage)

Get a routing code by SIRET and routing identifier

Retrieve the Routing Code data corresponding to the identifier passed in parameters.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | 14-digit SIRET number (INSEE establishment identifier)
    siret: siret_example,
    // string | Routing code identifier
    routingIdentifier: routingIdentifier_example,
    // Array<string> | Fields of the Routing Code resource (optional)
    fields: ...,
    // Array<RoutingCodeInclude> | Relations to include in the response. (optional)
    include: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGetRequest;

  try {
    const data = await api.getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(body);
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
| **siret** | `string` | 14-digit SIRET number (INSEE establishment identifier) | [Defaults to `undefined`] |
| **routingIdentifier** | `string` | Routing code identifier | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of the Routing Code resource | [Optional] |
| **include** | `Array<RoutingCodeInclude>` | Relations to include in the response. | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORRoutingCodePayloadHistoryLegalUnitFacility**](AFNORRoutingCodePayloadHistoryLegalUnitFacility.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a routing code. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet

> AFNORLegalUnitPayloadHistory getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(siren, fields, acceptLanguage)

Consult a siren (legal unit) by SIREN number

Returns the details of a company (legal unit) identified by the SIREN number passed as a parameter.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | 9-digit SIREN number (INSEE company identifier)
    siren: siren_example,
    // Array<string> | Fields of the SIREN resource (optional)
    fields: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGetRequest;

  try {
    const data = await api.getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(body);
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
| **siren** | `string` | 9-digit SIREN number (INSEE company identifier) | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of the SIREN resource | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORLegalUnitPayloadHistory**](AFNORLegalUnitPayloadHistory.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a company. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet

> AFNORLegalUnitPayloadHistory getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(idInstance, fields, acceptLanguage)

Gets a siren (legal unit) by instance ID

Returns the details of a company (legal unit) identified by the id-instance passed as a parameter.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // Array<string> | Fields of the SIREN resource (optional)
    fields: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGetRequest;

  try {
    const data = await api.getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of the SIREN resource | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORLegalUnitPayloadHistory**](AFNORLegalUnitPayloadHistory.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a routing code. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet

> AFNORFacilityPayloadHistory getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(siret, fields, include, acceptLanguage)

Gets a siret (facility) by SIRET number

Returns the details of a facility associated to a SIRET.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | 14-digit SIRET number (INSEE establishment identifier)
    siret: siret_example,
    // Array<string> | Fields of a SIRET resource. (optional)
    fields: ...,
    // Array<SiretInclude> | Relations to include in the response. (optional)
    include: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGetRequest;

  try {
    const data = await api.getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(body);
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
| **siret** | `string` | 14-digit SIRET number (INSEE establishment identifier) | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of a SIRET resource. | [Optional] |
| **include** | `Array<SiretInclude>` | Relations to include in the response. | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORFacilityPayloadHistory**](AFNORFacilityPayloadHistory.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a facility. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet

> AFNORFacilityPayloadHistory getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(idInstance, fields, acceptLanguage)

Gets a siret (facility) by id-instance

Returns the details of a facility according to an instance-id.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { GetSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // Array<string> | Fields of a SIRET resource. (optional)
    fields: ...,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies GetSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGetRequest;

  try {
    const data = await api.getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **fields** | `Array<string>` | Fields of a SIRET resource. | [Optional] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORFacilityPayloadHistory**](AFNORFacilityPayloadHistory.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns a routing code. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch

> AFNORDirectoryLinePost201Response patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(idInstance, acceptLanguage)

Partially updates a directory line..

Partially updates a directory line.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { PatchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies PatchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatchRequest;

  try {
    const data = await api.patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORDirectoryLinePost201Response**](AFNORDirectoryLinePost201Response.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request successful. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch

> AFNORRoutingCodePost201Response patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(idInstance, acceptLanguage)

Partially update a private routing code.

Partially update a private routing code.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { PatchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies PatchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatchRequest;

  try {
    const data = await api.patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORRoutingCodePost201Response**](AFNORRoutingCodePost201Response.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request successful. |  -  |
| **206** | Request processed without error, but the volume of information returned has been reduced. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut

> AFNORRoutingCodePost201Response putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(idInstance, acceptLanguage)

Completely update a private routing code.

Completely update a private routing code.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { PutRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // string | AFNOR instance ID (UUID)
    idInstance: idInstance_example,
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies PutRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePutRequest;

  try {
    const data = await api.putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(body);
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
| **idInstance** | `string` | AFNOR instance ID (UUID) | [Defaults to `undefined`] |
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORRoutingCodePost201Response**](AFNORRoutingCodePost201Response.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request successful. |  -  |
| **206** | Request processed without error, but the volume of information returned has been reduced. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost

> AFNORDirectoryLineSearchPost200Response searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(acceptLanguage)

Search for a directory line

Search for directory lines that meet all the criteria passed as parameters and return the results in the desired format.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { SearchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies SearchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPostRequest;

  try {
    const data = await api.searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(body);
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
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORDirectoryLineSearchPost200Response**](AFNORDirectoryLineSearchPost200Response.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | returns the directory line(s) matching the search criteria. |  -  |
| **206** | Request processed without error, but the volume of information returned has been reduced. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost

> AFNORRoutingCodeSearchPost200Response searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(acceptLanguage)

Search for a routing code

Search for routing codes that meet all the criteria passed as parameters and return the routing codes in the desired format.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { SearchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies SearchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPostRequest;

  try {
    const data = await api.searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(body);
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
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORRoutingCodeSearchPost200Response**](AFNORRoutingCodeSearchPost200Response.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the routing code(s) matching the search criteria. |  -  |
| **206** | Request processed without error, but the volume of information returned has been reduced. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost

> AFNORSirenSearchPost200Response searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(acceptLanguage)

SIREN search (or legal unit)

Multi-criteria company search.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { SearchSirenProxyApiV1AfnorDirectoryV1SirenSearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies SearchSirenProxyApiV1AfnorDirectoryV1SirenSearchPostRequest;

  try {
    const data = await api.searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(body);
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
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORSirenSearchPost200Response**](AFNORSirenSearchPost200Response.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns one or more companies. |  -  |
| **206** | Request processed without error, but the volume of information returned has been reduced. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost

> AFNORSiretSearchPost200Response searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(acceptLanguage)

Search for a SIRET (facility)

Multi-criteria search for facilities.

### Example

```ts
import {
  Configuration,
  AFNORPDPPADirectoryServiceApi,
} from '';
import type { SearchSiretProxyApiV1AfnorDirectoryV1SiretSearchPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AFNORPDPPADirectoryServiceApi(config);

  const body = {
    // AcceptLanguage | Specifies the language in which the resource is requested. (optional)
    acceptLanguage: ...,
  } satisfies SearchSiretProxyApiV1AfnorDirectoryV1SiretSearchPostRequest;

  try {
    const data = await api.searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(body);
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
| **acceptLanguage** | `AcceptLanguage` | Specifies the language in which the resource is requested. | [Optional] [Defaults to `undefined`] [Enum: fr, en] |

### Return type

[**AFNORSiretSearchPost200Response**](AFNORSiretSearchPost200Response.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns an establishment as defined on a given observation date or as defined on the current date if the observation date is not specified. |  -  |
| **206** | Request processed without error, but the volume of information returned has been reduced. |  -  |
| **400** | Bad request. The request is invalid or cannot be completed. |  -  |
| **401** | Unauthorized. The request requires user authentication. |  -  |
| **403** | Forbidden. The server understood the request but denied access or access is not authorized. |  -  |
| **404** | Not found. There is no resource at the given URI. |  -  |
| **408** | Request timeout exceeded. |  -  |
| **422** | Data validation error. |  -  |
| **429** | The client has issued too many calls within a given time frame. |  -  |
| **500** | Internal Server Error. |  -  |
| **501** | Not implemented. |  -  |
| **503** | Service unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

