# DocumentConversionApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**convertDocumentApiV1ConvertPost**](#convertdocumentapiv1convertpost) | **POST** /api/v1/convert | Convertir un document en Factur-X|
|[**convertDocumentAsyncApiV1ConvertAsyncPost**](#convertdocumentasyncapiv1convertasyncpost) | **POST** /api/v1/convert/async | Convertir un document en Factur-X (mode asynchrone)|
|[**downloadFileApiV1ConvertConversionIdDownloadFilenameGet**](#downloadfileapiv1convertconversioniddownloadfilenameget) | **GET** /api/v1/convert/{conversion_id}/download/{filename} | Télécharger un fichier généré|
|[**getConversionStatusApiV1ConvertConversionIdStatusGet**](#getconversionstatusapiv1convertconversionidstatusget) | **GET** /api/v1/convert/{conversion_id}/status | Vérifier le statut d\&#39;une conversion|
|[**resumeConversionApiV1ConvertConversionIdResumePost**](#resumeconversionapiv1convertconversionidresumepost) | **POST** /api/v1/convert/{conversion_id}/resume | Reprendre une conversion avec corrections|

# **convertDocumentApiV1ConvertPost**
> ConvertSuccessResponse convertDocumentApiV1ConvertPost()

Convertit un document (PDF, DOCX, XLSX, image) en Factur-X conforme.  ## Workflow  1. **Upload** : Le document est envoyé en multipart/form-data 2. **Extraction OCR + Classification** : Mistral OCR extrait les données et classifie le document en un seul appel 3. **Enrichissement** : Les données sont enrichies via SIRENE (SIRET → raison sociale) 4. **Validation** : Les règles Schematron sont appliquées 5. **Génération** : Le Factur-X PDF/A-3 est généré  ## Réponses possibles  - **200** : Conversion réussie, fichiers disponibles - **202** : Données manquantes, complétion requise - **422** : Validation échouée, corrections nécessaires - **400** : Fichier invalide - **429** : Quota dépassé

### Example

```typescript
import {
    DocumentConversionApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new DocumentConversionApi(configuration);

let file: File; //Document à convertir (PDF, DOCX, XLSX, JPG, PNG) (default to undefined)
let output: string; //Format de sortie: pdf, xml, both (optional) (default to 'pdf')
let callbackUrl: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.convertDocumentApiV1ConvertPost(
    file,
    output,
    callbackUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | Document à convertir (PDF, DOCX, XLSX, JPG, PNG) | defaults to undefined|
| **output** | [**string**] | Format de sortie: pdf, xml, both | (optional) defaults to 'pdf'|
| **callbackUrl** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ConvertSuccessResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**202** | Données manquantes |  -  |
|**422** | Validation échouée |  -  |
|**400** | Fichier invalide |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **convertDocumentAsyncApiV1ConvertAsyncPost**
> any convertDocumentAsyncApiV1ConvertAsyncPost()

Lance une conversion asynchrone via Celery.  ## Workflow  1. **Upload** : Le document est envoyé en multipart/form-data 2. **Task Celery** : La tâche est mise en file d\'attente 3. **Callback** : Notification par webhook à la fin  ## Réponses possibles  - **202** : Tâche acceptée, en cours de traitement - **400** : Fichier invalide

### Example

```typescript
import {
    DocumentConversionApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new DocumentConversionApi(configuration);

let file: File; //Document à convertir (PDF, DOCX, XLSX, JPG, PNG) (default to undefined)
let output: string; //Format de sortie: pdf, xml, both (optional) (default to 'pdf')
let callbackUrl: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.convertDocumentAsyncApiV1ConvertAsyncPost(
    file,
    output,
    callbackUrl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | Document à convertir (PDF, DOCX, XLSX, JPG, PNG) | defaults to undefined|
| **output** | [**string**] | Format de sortie: pdf, xml, both | (optional) defaults to 'pdf'|
| **callbackUrl** | [**string**] |  | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**202** | Tâche acceptée |  -  |
|**400** | Fichier invalide |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadFileApiV1ConvertConversionIdDownloadFilenameGet**
> any downloadFileApiV1ConvertConversionIdDownloadFilenameGet()

Télécharge le fichier Factur-X PDF ou XML généré.  ## Fichiers disponibles  - `facturx.pdf` : PDF/A-3 avec XML embarqué - `facturx.xml` : XML CII seul (Cross Industry Invoice)  Les fichiers sont disponibles pendant 24 heures après génération.

### Example

```typescript
import {
    DocumentConversionApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new DocumentConversionApi(configuration);

let conversionId: string; // (default to undefined)
let filename: string; // (default to undefined)

const { status, data } = await apiInstance.downloadFileApiV1ConvertConversionIdDownloadFilenameGet(
    conversionId,
    filename
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionId** | [**string**] |  | defaults to undefined|
| **filename** | [**string**] |  | defaults to undefined|


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
|**200** | Fichier téléchargé |  -  |
|**404** | Fichier non trouvé ou expiré |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConversionStatusApiV1ConvertConversionIdStatusGet**
> { [key: string]: any; } getConversionStatusApiV1ConvertConversionIdStatusGet()

Retourne le statut actuel d\'une conversion asynchrone.

### Example

```typescript
import {
    DocumentConversionApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new DocumentConversionApi(configuration);

let conversionId: string; // (default to undefined)

const { status, data } = await apiInstance.getConversionStatusApiV1ConvertConversionIdStatusGet(
    conversionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeConversionApiV1ConvertConversionIdResumePost**
> ConvertSuccessResponse resumeConversionApiV1ConvertConversionIdResumePost(convertResumeRequest)

Reprend une conversion après complétion des données manquantes ou correction des erreurs.  L\'extraction OCR est conservée, les données sont mises à jour avec les corrections, puis une nouvelle validation Schematron est effectuée.

### Example

```typescript
import {
    DocumentConversionApi,
    Configuration,
    ConvertResumeRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new DocumentConversionApi(configuration);

let conversionId: string; // (default to undefined)
let convertResumeRequest: ConvertResumeRequest; //

const { status, data } = await apiInstance.resumeConversionApiV1ConvertConversionIdResumePost(
    conversionId,
    convertResumeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **convertResumeRequest** | **ConvertResumeRequest**|  | |
| **conversionId** | [**string**] |  | defaults to undefined|


### Return type

**ConvertSuccessResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**404** | Conversion non trouvée ou expirée |  -  |
|**422** | Validation toujours en échec |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

