# CDARCycleDeVieApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateCdarApiV1CdarGeneratePost**](#generatecdarapiv1cdargeneratepost) | **POST** /api/v1/cdar/generate | Générer un message CDAR|
|[**getActionCodesApiV1CdarActionCodesGet**](#getactioncodesapiv1cdaractioncodesget) | **GET** /api/v1/cdar/action-codes | Liste des codes action CDAR|
|[**getReasonCodesApiV1CdarReasonCodesGet**](#getreasoncodesapiv1cdarreasoncodesget) | **GET** /api/v1/cdar/reason-codes | Liste des codes motif CDAR|
|[**getStatusCodesApiV1CdarStatusCodesGet**](#getstatuscodesapiv1cdarstatuscodesget) | **GET** /api/v1/cdar/status-codes | Liste des codes statut CDAR|
|[**submitCdarApiV1CdarSubmitPost**](#submitcdarapiv1cdarsubmitpost) | **POST** /api/v1/cdar/submit | Générer et soumettre un message CDAR|
|[**submitCdarXmlApiV1CdarSubmitXmlPost**](#submitcdarxmlapiv1cdarsubmitxmlpost) | **POST** /api/v1/cdar/submit-xml | Soumettre un XML CDAR pré-généré|
|[**validateCdarApiV1CdarValidatePost**](#validatecdarapiv1cdarvalidatepost) | **POST** /api/v1/cdar/validate | Valider des données CDAR|

# **generateCdarApiV1CdarGeneratePost**
> GenerateCDARResponse generateCdarApiV1CdarGeneratePost(createCDARRequest)

Génère un message XML CDAR (Cross Domain Acknowledgement and Response) pour communiquer le statut d\'une facture.  **Types de messages:** - **23** (Traitement): Message de cycle de vie standard - **305** (Transmission): Message de transmission entre plateformes  **Règles métier:** - BR-FR-CDV-14: Le statut 212 (ENCAISSEE) requiert un montant encaissé - BR-FR-CDV-15: Les statuts 206/207/208/210/213/501 requièrent un code motif

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    CreateCDARRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let createCDARRequest: CreateCDARRequest; //

const { status, data } = await apiInstance.generateCdarApiV1CdarGeneratePost(
    createCDARRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCDARRequest** | **CreateCDARRequest**|  | |


### Return type

**GenerateCDARResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Requête invalide |  -  |
|**422** | Erreur de validation |  -  |
|**500** | Erreur serveur |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActionCodesApiV1CdarActionCodesGet**
> ActionCodesResponse getActionCodesApiV1CdarActionCodesGet()

Retourne la liste complète des codes action (BR-FR-CDV-CL-10).  Ces codes indiquent l\'action demandée sur la facture.

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

const { status, data } = await apiInstance.getActionCodesApiV1CdarActionCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ActionCodesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Requête invalide |  -  |
|**422** | Erreur de validation |  -  |
|**500** | Erreur serveur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getReasonCodesApiV1CdarReasonCodesGet**
> ReasonCodesResponse getReasonCodesApiV1CdarReasonCodesGet()

Retourne la liste complète des codes motif de statut (BR-FR-CDV-CL-09).  Ces codes expliquent la raison d\'un statut particulier.

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

const { status, data } = await apiInstance.getReasonCodesApiV1CdarReasonCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ReasonCodesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Requête invalide |  -  |
|**422** | Erreur de validation |  -  |
|**500** | Erreur serveur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatusCodesApiV1CdarStatusCodesGet**
> StatusCodesResponse getStatusCodesApiV1CdarStatusCodesGet()

Retourne la liste complète des codes statut de facture (BR-FR-CDV-CL-06).  Ces codes indiquent l\'état du cycle de vie d\'une facture.

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

const { status, data } = await apiInstance.getStatusCodesApiV1CdarStatusCodesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**StatusCodesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Requête invalide |  -  |
|**422** | Erreur de validation |  -  |
|**500** | Erreur serveur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitCdarApiV1CdarSubmitPost**
> SubmitCDARResponse submitCdarApiV1CdarSubmitPost(bodySubmitCdarApiV1CdarSubmitPost)

Génère un message CDAR et le soumet à la plateforme PA/PDP.  Nécessite une authentification AFNOR valide.  **Types de flux (flowType):** - `CustomerInvoiceLC`: Cycle de vie côté client (acheteur) - `SupplierInvoiceLC`: Cycle de vie côté fournisseur (vendeur)

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    BodySubmitCdarApiV1CdarSubmitPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let userId: number; // (default to undefined)
let bodySubmitCdarApiV1CdarSubmitPost: BodySubmitCdarApiV1CdarSubmitPost; //
let jwtToken: string; // (optional) (default to undefined)
let clientUid: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.submitCdarApiV1CdarSubmitPost(
    userId,
    bodySubmitCdarApiV1CdarSubmitPost,
    jwtToken,
    clientUid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodySubmitCdarApiV1CdarSubmitPost** | **BodySubmitCdarApiV1CdarSubmitPost**|  | |
| **userId** | [**number**] |  | defaults to undefined|
| **jwtToken** | [**string**] |  | (optional) defaults to undefined|
| **clientUid** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SubmitCDARResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Requête invalide |  -  |
|**422** | Erreur de validation |  -  |
|**500** | Erreur serveur |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submitCdarXmlApiV1CdarSubmitXmlPost**
> SubmitCDARResponse submitCdarXmlApiV1CdarSubmitXmlPost(bodySubmitCdarXmlApiV1CdarSubmitXmlPost)

Soumet un message XML CDAR pré-généré à la plateforme PA/PDP.  Utile pour soumettre des XML générés par d\'autres systèmes.

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    BodySubmitCdarXmlApiV1CdarSubmitXmlPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let userId: number; // (default to undefined)
let bodySubmitCdarXmlApiV1CdarSubmitXmlPost: BodySubmitCdarXmlApiV1CdarSubmitXmlPost; //
let jwtToken: string; // (optional) (default to undefined)
let clientUid: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.submitCdarXmlApiV1CdarSubmitXmlPost(
    userId,
    bodySubmitCdarXmlApiV1CdarSubmitXmlPost,
    jwtToken,
    clientUid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodySubmitCdarXmlApiV1CdarSubmitXmlPost** | **BodySubmitCdarXmlApiV1CdarSubmitXmlPost**|  | |
| **userId** | [**number**] |  | defaults to undefined|
| **jwtToken** | [**string**] |  | (optional) defaults to undefined|
| **clientUid** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SubmitCDARResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Requête invalide |  -  |
|**422** | Erreur de validation |  -  |
|**500** | Erreur serveur |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateCdarApiV1CdarValidatePost**
> ValidateCDARResponse validateCdarApiV1CdarValidatePost(validateCDARRequest)

Valide les données CDAR sans générer le XML.  Vérifie: - Les formats des champs (SIREN, dates, etc.) - Les codes enums (statut, motif, action) - Les règles métier BR-FR-CDV-*

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    ValidateCDARRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let validateCDARRequest: ValidateCDARRequest; //

const { status, data } = await apiInstance.validateCdarApiV1CdarValidatePost(
    validateCDARRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **validateCDARRequest** | **ValidateCDARRequest**|  | |


### Return type

**ValidateCDARResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**400** | Requête invalide |  -  |
|**422** | Erreur de validation |  -  |
|**500** | Erreur serveur |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

