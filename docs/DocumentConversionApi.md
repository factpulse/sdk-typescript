# DocumentConversionApi

All URIs are relative to *https://factpulse.fr*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**convertDocumentAsyncApiV1ConvertAsyncPost**](DocumentConversionApi.md#convertdocumentasyncapiv1convertasyncpost) | **POST** /api/v1/convert/async | Convertir un document en Factur-X (mode asynchrone) |
| [**downloadFileApiV1ConvertConversionIdDownloadFilenameGet**](DocumentConversionApi.md#downloadfileapiv1convertconversioniddownloadfilenameget) | **GET** /api/v1/convert/{conversion_id}/download/{filename} | Télécharger un fichier généré |
| [**getConversionStatusApiV1ConvertConversionIdStatusGet**](DocumentConversionApi.md#getconversionstatusapiv1convertconversionidstatusget) | **GET** /api/v1/convert/{conversion_id}/status | Vérifier le statut d\&#39;une conversion |
| [**resumeConversionApiV1ConvertConversionIdResumePost**](DocumentConversionApi.md#resumeconversionapiv1convertconversionidresumepost) | **POST** /api/v1/convert/{conversion_id}/resume | Reprendre une conversion avec corrections |



## convertDocumentAsyncApiV1ConvertAsyncPost

> any convertDocumentAsyncApiV1ConvertAsyncPost(file, output, callbackUrl, webhookMode)

Convertir un document en Factur-X (mode asynchrone)

Lance une conversion asynchrone via Celery.  ## Workflow  1. **Upload** : Le document est envoyé en multipart/form-data 2. **Task Celery** : La tâche est mise en file d\&#39;attente 3. **Callback** : Notification par webhook à la fin  ## Réponses possibles  - **202** : Tâche acceptée, en cours de traitement - **400** : Fichier invalide

### Example

```ts
import {
  Configuration,
  DocumentConversionApi,
} from '';
import type { ConvertDocumentAsyncApiV1ConvertAsyncPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentConversionApi(config);

  const body = {
    // Blob | Document à convertir (PDF, DOCX, XLSX, JPG, PNG)
    file: BINARY_DATA_HERE,
    // string | Format de sortie: pdf, xml, both (optional)
    output: output_example,
    // string (optional)
    callbackUrl: callbackUrl_example,
    // string | Mode de livraison du contenu: \\\'inline\\\' (base64 dans webhook) ou \\\'download_url\\\' (URL temporaire 1h) (optional)
    webhookMode: webhookMode_example,
  } satisfies ConvertDocumentAsyncApiV1ConvertAsyncPostRequest;

  try {
    const data = await api.convertDocumentAsyncApiV1ConvertAsyncPost(body);
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
| **file** | `Blob` | Document à convertir (PDF, DOCX, XLSX, JPG, PNG) | [Defaults to `undefined`] |
| **output** | `string` | Format de sortie: pdf, xml, both | [Optional] [Defaults to `&#39;pdf&#39;`] |
| **callbackUrl** | `string` |  | [Optional] [Defaults to `undefined`] |
| **webhookMode** | `string` | Mode de livraison du contenu: \\\&#39;inline\\\&#39; (base64 dans webhook) ou \\\&#39;download_url\\\&#39; (URL temporaire 1h) | [Optional] [Defaults to `&#39;inline&#39;`] |

### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **202** | Tâche acceptée |  -  |
| **400** | Fichier invalide |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadFileApiV1ConvertConversionIdDownloadFilenameGet

> any downloadFileApiV1ConvertConversionIdDownloadFilenameGet(conversionId, filename)

Télécharger un fichier généré

Télécharge le fichier Factur-X PDF ou XML généré.  ## Fichiers disponibles  - &#x60;facturx.pdf&#x60; : PDF/A-3 avec XML embarqué - &#x60;facturx.xml&#x60; : XML CII seul (Cross Industry Invoice)  Les fichiers sont disponibles pendant 24 heures après génération.

### Example

```ts
import {
  Configuration,
  DocumentConversionApi,
} from '';
import type { DownloadFileApiV1ConvertConversionIdDownloadFilenameGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentConversionApi(config);

  const body = {
    // string | Conversion ID returned by POST /convert (UUID format)
    conversionId: conversionId_example,
    // string | File to download: \'facturx.pdf\' or \'facturx.xml\'
    filename: filename_example,
  } satisfies DownloadFileApiV1ConvertConversionIdDownloadFilenameGetRequest;

  try {
    const data = await api.downloadFileApiV1ConvertConversionIdDownloadFilenameGet(body);
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
| **conversionId** | `string` | Conversion ID returned by POST /convert (UUID format) | [Defaults to `undefined`] |
| **filename** | `string` | File to download: \&#39;facturx.pdf\&#39; or \&#39;facturx.xml\&#39; | [Defaults to `undefined`] |

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
| **200** | Fichier téléchargé |  -  |
| **404** | Fichier non trouvé ou expiré |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConversionStatusApiV1ConvertConversionIdStatusGet

> { [key: string]: any; } getConversionStatusApiV1ConvertConversionIdStatusGet(conversionId)

Vérifier le statut d\&#39;une conversion

Retourne le statut actuel d\&#39;une conversion asynchrone.

### Example

```ts
import {
  Configuration,
  DocumentConversionApi,
} from '';
import type { GetConversionStatusApiV1ConvertConversionIdStatusGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentConversionApi(config);

  const body = {
    // string | Conversion ID returned by POST /convert (UUID format)
    conversionId: conversionId_example,
  } satisfies GetConversionStatusApiV1ConvertConversionIdStatusGetRequest;

  try {
    const data = await api.getConversionStatusApiV1ConvertConversionIdStatusGet(body);
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
| **conversionId** | `string` | Conversion ID returned by POST /convert (UUID format) | [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resumeConversionApiV1ConvertConversionIdResumePost

> ConvertSuccessResponse resumeConversionApiV1ConvertConversionIdResumePost(conversionId, convertResumeRequest)

Reprendre une conversion avec corrections

Reprend une conversion après complétion des données manquantes ou correction des erreurs.  L\&#39;extraction OCR est conservée, les données sont mises à jour avec les corrections, puis une nouvelle validation Schematron est effectuée.

### Example

```ts
import {
  Configuration,
  DocumentConversionApi,
} from '';
import type { ResumeConversionApiV1ConvertConversionIdResumePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DocumentConversionApi(config);

  const body = {
    // string | Conversion ID returned by POST /convert (UUID format)
    conversionId: conversionId_example,
    // ConvertResumeRequest
    convertResumeRequest: ...,
  } satisfies ResumeConversionApiV1ConvertConversionIdResumePostRequest;

  try {
    const data = await api.resumeConversionApiV1ConvertConversionIdResumePost(body);
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
| **conversionId** | `string` | Conversion ID returned by POST /convert (UUID format) | [Defaults to `undefined`] |
| **convertResumeRequest** | [ConvertResumeRequest](ConvertResumeRequest.md) |  | |

### Return type

[**ConvertSuccessResponse**](ConvertSuccessResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **404** | Conversion non trouvée ou expirée |  -  |
| **422** | Validation toujours en échec |  -  |
| **401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

