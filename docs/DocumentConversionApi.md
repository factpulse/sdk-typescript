# DocumentConversionApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**convertDocumentAsyncApiV1ConvertAsyncPost**](#convertdocumentasyncapiv1convertasyncpost) | **POST** /api/v1/convert/async | Convertir un document en Factur-X (mode asynchrone)|
|[**downloadFileApiV1ConvertConversionIdDownloadFilenameGet**](#downloadfileapiv1convertconversioniddownloadfilenameget) | **GET** /api/v1/convert/{conversion_id}/download/{filename} | Télécharger un fichier généré|
|[**getConversionStatusApiV1ConvertConversionIdStatusGet**](#getconversionstatusapiv1convertconversionidstatusget) | **GET** /api/v1/convert/{conversion_id}/status | Vérifier le statut d\&#39;une conversion|
|[**resumeConversionApiV1ConvertConversionIdResumePost**](#resumeconversionapiv1convertconversionidresumepost) | **POST** /api/v1/convert/{conversion_id}/resume | Reprendre une conversion avec corrections|

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
let webhookMode: string; //Mode de livraison du contenu: \\\'inline\\\' (base64 dans webhook) ou \\\'download_url\\\' (URL temporaire 1h) (optional) (default to 'inline')

const { status, data } = await apiInstance.convertDocumentAsyncApiV1ConvertAsyncPost(
    file,
    output,
    callbackUrl,
    webhookMode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] | Document à convertir (PDF, DOCX, XLSX, JPG, PNG) | defaults to undefined|
| **output** | [**string**] | Format de sortie: pdf, xml, both | (optional) defaults to 'pdf'|
| **callbackUrl** | [**string**] |  | (optional) defaults to undefined|
| **webhookMode** | [**string**] | Mode de livraison du contenu: \\\&#39;inline\\\&#39; (base64 dans webhook) ou \\\&#39;download_url\\\&#39; (URL temporaire 1h) | (optional) defaults to 'inline'|


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
|**401** | Authentication required - Invalid or missing JWT token |  -  |

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

let conversionId: string; //Conversion ID returned by POST /convert (UUID format) (default to undefined)
let filename: string; //File to download: \'facturx.pdf\' or \'facturx.xml\' (default to undefined)

const { status, data } = await apiInstance.downloadFileApiV1ConvertConversionIdDownloadFilenameGet(
    conversionId,
    filename
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionId** | [**string**] | Conversion ID returned by POST /convert (UUID format) | defaults to undefined|
| **filename** | [**string**] | File to download: \&#39;facturx.pdf\&#39; or \&#39;facturx.xml\&#39; | defaults to undefined|


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
|**401** | Authentication required - Invalid or missing JWT token |  -  |

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

let conversionId: string; //Conversion ID returned by POST /convert (UUID format) (default to undefined)

const { status, data } = await apiInstance.getConversionStatusApiV1ConvertConversionIdStatusGet(
    conversionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionId** | [**string**] | Conversion ID returned by POST /convert (UUID format) | defaults to undefined|


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
|**401** | Authentication required - Invalid or missing JWT token |  -  |

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

let conversionId: string; //Conversion ID returned by POST /convert (UUID format) (default to undefined)
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
| **conversionId** | [**string**] | Conversion ID returned by POST /convert (UUID format) | defaults to undefined|


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
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

