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
|[**submitEncaisseeApiV1CdarEncaisseePost**](#submitencaisseeapiv1cdarencaisseepost) | **POST** /api/v1/cdar/encaissee | [Simplifié] Soumettre un statut ENCAISSÉE (212)|
|[**submitRefuseeApiV1CdarRefuseePost**](#submitrefuseeapiv1cdarrefuseepost) | **POST** /api/v1/cdar/refusee | [Simplifié] Soumettre un statut REFUSÉE (210)|
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
> SubmitCDARResponse submitCdarApiV1CdarSubmitPost(submitCDARRequest)

Génère un message CDAR et le soumet à la plateforme PA/PDP.  **Stratégies d\'authentification:** 1. **JWT avec client_uid** (recommandé): credentials PDP récupérés du backend 2. **Zero-storage**: Fournir pdpFlowServiceUrl, pdpClientId, pdpClientSecret dans la requête  **Types de flux (flowType):** - `CustomerInvoiceLC`: Cycle de vie côté client (acheteur) - `SupplierInvoiceLC`: Cycle de vie côté fournisseur (vendeur)

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    SubmitCDARRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let submitCDARRequest: SubmitCDARRequest; //

const { status, data } = await apiInstance.submitCdarApiV1CdarSubmitPost(
    submitCDARRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitCDARRequest** | **SubmitCDARRequest**|  | |


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
> SubmitCDARResponse submitCdarXmlApiV1CdarSubmitXmlPost(submitCDARXMLRequest)

Soumet un message XML CDAR pré-généré à la plateforme PA/PDP.  Utile pour soumettre des XML générés par d\'autres systèmes.  **Stratégies d\'authentification:** 1. **JWT avec client_uid** (recommandé): credentials PDP récupérés du backend 2. **Zero-storage**: Fournir pdpFlowServiceUrl, pdpClientId, pdpClientSecret dans la requête

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    SubmitCDARXMLRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let submitCDARXMLRequest: SubmitCDARXMLRequest; //

const { status, data } = await apiInstance.submitCdarXmlApiV1CdarSubmitXmlPost(
    submitCDARXMLRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitCDARXMLRequest** | **SubmitCDARXMLRequest**|  | |


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

# **submitEncaisseeApiV1CdarEncaisseePost**
> SimplifiedCDARResponse submitEncaisseeApiV1CdarEncaisseePost(encaisseeRequest)

**Endpoint simplifié pour OD** - Soumet un statut ENCAISSÉE (212) pour une facture.  Ce statut est **obligatoire pour le PPF** (BR-FR-CDV-14 requiert le montant encaissé).  **Cas d\'usage:** L\'acheteur confirme le paiement d\'une facture.  **Authentification:** JWT Bearer (recommandé) ou credentials PDP dans la requête.

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    EncaisseeRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let encaisseeRequest: EncaisseeRequest; //

const { status, data } = await apiInstance.submitEncaisseeApiV1CdarEncaisseePost(
    encaisseeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **encaisseeRequest** | **EncaisseeRequest**|  | |


### Return type

**SimplifiedCDARResponse**

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

# **submitRefuseeApiV1CdarRefuseePost**
> SimplifiedCDARResponse submitRefuseeApiV1CdarRefuseePost(refuseeRequest)

**Endpoint simplifié pour OD** - Soumet un statut REFUSÉE (210) pour une facture.  Ce statut est **obligatoire pour le PPF** (BR-FR-CDV-15 requiert un code motif).  **Cas d\'usage:** L\'acheteur refuse une facture reçue.  **Codes motif autorisés (BR-FR-CDV-CL-09):** - `TX_TVA_ERR`: Taux de TVA erroné - `MONTANTTOTAL_ERR`: Montant total erroné - `CALCUL_ERR`: Erreur de calcul - `NON_CONFORME`: Non conforme - `DOUBLON`: Doublon - `DEST_ERR`: Destinataire erroné - `TRANSAC_INC`: Transaction incomplète - `EMMET_INC`: Émetteur inconnu - `CONTRAT_TERM`: Contrat terminé - `DOUBLE_FACT`: Double facturation - `CMD_ERR`: Commande erronée - `ADR_ERR`: Adresse erronée - `REF_CT_ABSENT`: Référence contrat absente  **Authentification:** JWT Bearer (recommandé) ou credentials PDP dans la requête.

### Example

```typescript
import {
    CDARCycleDeVieApi,
    Configuration,
    RefuseeRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new CDARCycleDeVieApi(configuration);

let refuseeRequest: RefuseeRequest; //

const { status, data } = await apiInstance.submitRefuseeApiV1CdarRefuseePost(
    refuseeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refuseeRequest** | **RefuseeRequest**|  | |


### Return type

**SimplifiedCDARResponse**

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

