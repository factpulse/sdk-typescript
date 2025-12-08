# VrificationPDFXMLApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet**](#obtenirstatutverificationapiv1verificationverifierasyncidtachestatutget) | **GET** /api/v1/verification/verifier-async/{id_tache}/statut | Obtenir le statut d\&#39;une vérification asynchrone|
|[**obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet_0**](#obtenirstatutverificationapiv1verificationverifierasyncidtachestatutget_0) | **GET** /api/v1/verification/verifier-async/{id_tache}/statut | Obtenir le statut d\&#39;une vérification asynchrone|
|[**verifierPdfAsyncApiV1VerificationVerifierAsyncPost**](#verifierpdfasyncapiv1verificationverifierasyncpost) | **POST** /api/v1/verification/verifier-async | Vérifier la conformité PDF/XML Factur-X (asynchrone)|
|[**verifierPdfAsyncApiV1VerificationVerifierAsyncPost_0**](#verifierpdfasyncapiv1verificationverifierasyncpost_0) | **POST** /api/v1/verification/verifier-async | Vérifier la conformité PDF/XML Factur-X (asynchrone)|
|[**verifierPdfSyncApiV1VerificationVerifierPost**](#verifierpdfsyncapiv1verificationverifierpost) | **POST** /api/v1/verification/verifier | Vérifier la conformité PDF/XML Factur-X (synchrone)|
|[**verifierPdfSyncApiV1VerificationVerifierPost_0**](#verifierpdfsyncapiv1verificationverifierpost_0) | **POST** /api/v1/verification/verifier | Vérifier la conformité PDF/XML Factur-X (synchrone)|

# **obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet**
> StatutTache obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet()

Récupère le statut et le résultat d\'une tâche de vérification asynchrone.  **Statuts possibles:** - `PENDING`: Tâche en attente dans la file - `STARTED`: Tâche en cours d\'exécution - `SUCCESS`: Tâche terminée avec succès (voir `resultat`) - `FAILURE`: Erreur système (exception non gérée)  **Note:** Le champ `resultat.statut` peut être \"SUCCES\" ou \"ERREUR\" indépendamment du statut Celery (qui sera toujours SUCCESS si la tâche s\'est exécutée).

### Example

```typescript
import {
    VrificationPDFXMLApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new VrificationPDFXMLApi(configuration);

let idTache: string; // (default to undefined)

const { status, data } = await apiInstance.obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet(
    idTache
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idTache** | [**string**] |  | defaults to undefined|


### Return type

**StatutTache**

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

# **obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet_0**
> StatutTache obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet_0()

Récupère le statut et le résultat d\'une tâche de vérification asynchrone.  **Statuts possibles:** - `PENDING`: Tâche en attente dans la file - `STARTED`: Tâche en cours d\'exécution - `SUCCESS`: Tâche terminée avec succès (voir `resultat`) - `FAILURE`: Erreur système (exception non gérée)  **Note:** Le champ `resultat.statut` peut être \"SUCCES\" ou \"ERREUR\" indépendamment du statut Celery (qui sera toujours SUCCESS si la tâche s\'est exécutée).

### Example

```typescript
import {
    VrificationPDFXMLApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new VrificationPDFXMLApi(configuration);

let idTache: string; // (default to undefined)

const { status, data } = await apiInstance.obtenirStatutVerificationApiV1VerificationVerifierAsyncIdTacheStatutGet_0(
    idTache
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idTache** | [**string**] |  | defaults to undefined|


### Return type

**StatutTache**

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

# **verifierPdfAsyncApiV1VerificationVerifierAsyncPost**
> ReponseTache verifierPdfAsyncApiV1VerificationVerifierAsyncPost()

Vérifie la conformité PDF/XML Factur-X de manière asynchrone.  **IMPORTANT**: Seuls les PDF Factur-X (avec XML embarqué) sont acceptés. Les PDF sans XML Factur-X retourneront une erreur `NOT_FACTURX` dans le résultat.  Cette version utilise une tâche Celery et peut faire appel au service OCR si le PDF est une image ou si `forcer_ocr=true`.  **Retourne immédiatement** un ID de tâche. Utilisez `/verifier-async/{id_tache}/statut` pour récupérer le résultat.  **Principe de vérification (Factur-X 1.08):** - Principe n°2: Le XML ne peut contenir que des infos présentes dans le PDF - Principe n°4: Toute info XML doit être présente et conforme dans le PDF  **Champs vérifiés:** - Identification: BT-1 (n° facture), BT-2 (date), BT-3 (type), BT-5 (devise), BT-23 (cadre) - Vendeur: BT-27 (nom), BT-29 (SIRET), BT-30 (SIREN), BT-31 (TVA) - Acheteur: BT-44 (nom), BT-46 (SIRET), BT-47 (SIREN), BT-48 (TVA) - Montants: BT-109 (HT), BT-110 (TVA), BT-112 (TTC), BT-115 (à payer) - Ventilation TVA: BT-116, BT-117, BT-118, BT-119 - Lignes de facture: BT-153, BT-129, BT-146, BT-131 - Notes obligatoires: PMT, PMD, AAB - Règle BR-FR-09: cohérence SIRET/SIREN  **Avantages par rapport à la version synchrone:** - Support OCR pour les PDF images (via service DocTR) - Timeout plus long pour les gros documents - Ne bloque pas le serveur

### Example

```typescript
import {
    VrificationPDFXMLApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new VrificationPDFXMLApi(configuration);

let fichierPdf: File; //Fichier PDF Factur-X à vérifier (default to undefined)
let forcerOcr: boolean; //Forcer l\\\'utilisation de l\\\'OCR même si le PDF contient du texte natif (optional) (default to false)

const { status, data } = await apiInstance.verifierPdfAsyncApiV1VerificationVerifierAsyncPost(
    fichierPdf,
    forcerOcr
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fichierPdf** | [**File**] | Fichier PDF Factur-X à vérifier | defaults to undefined|
| **forcerOcr** | [**boolean**] | Forcer l\\\&#39;utilisation de l\\\&#39;OCR même si le PDF contient du texte natif | (optional) defaults to false|


### Return type

**ReponseTache**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifierPdfAsyncApiV1VerificationVerifierAsyncPost_0**
> ReponseTache verifierPdfAsyncApiV1VerificationVerifierAsyncPost_0()

Vérifie la conformité PDF/XML Factur-X de manière asynchrone.  **IMPORTANT**: Seuls les PDF Factur-X (avec XML embarqué) sont acceptés. Les PDF sans XML Factur-X retourneront une erreur `NOT_FACTURX` dans le résultat.  Cette version utilise une tâche Celery et peut faire appel au service OCR si le PDF est une image ou si `forcer_ocr=true`.  **Retourne immédiatement** un ID de tâche. Utilisez `/verifier-async/{id_tache}/statut` pour récupérer le résultat.  **Principe de vérification (Factur-X 1.08):** - Principe n°2: Le XML ne peut contenir que des infos présentes dans le PDF - Principe n°4: Toute info XML doit être présente et conforme dans le PDF  **Champs vérifiés:** - Identification: BT-1 (n° facture), BT-2 (date), BT-3 (type), BT-5 (devise), BT-23 (cadre) - Vendeur: BT-27 (nom), BT-29 (SIRET), BT-30 (SIREN), BT-31 (TVA) - Acheteur: BT-44 (nom), BT-46 (SIRET), BT-47 (SIREN), BT-48 (TVA) - Montants: BT-109 (HT), BT-110 (TVA), BT-112 (TTC), BT-115 (à payer) - Ventilation TVA: BT-116, BT-117, BT-118, BT-119 - Lignes de facture: BT-153, BT-129, BT-146, BT-131 - Notes obligatoires: PMT, PMD, AAB - Règle BR-FR-09: cohérence SIRET/SIREN  **Avantages par rapport à la version synchrone:** - Support OCR pour les PDF images (via service DocTR) - Timeout plus long pour les gros documents - Ne bloque pas le serveur

### Example

```typescript
import {
    VrificationPDFXMLApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new VrificationPDFXMLApi(configuration);

let fichierPdf: File; //Fichier PDF Factur-X à vérifier (default to undefined)
let forcerOcr: boolean; //Forcer l\\\'utilisation de l\\\'OCR même si le PDF contient du texte natif (optional) (default to false)

const { status, data } = await apiInstance.verifierPdfAsyncApiV1VerificationVerifierAsyncPost_0(
    fichierPdf,
    forcerOcr
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fichierPdf** | [**File**] | Fichier PDF Factur-X à vérifier | defaults to undefined|
| **forcerOcr** | [**boolean**] | Forcer l\\\&#39;utilisation de l\\\&#39;OCR même si le PDF contient du texte natif | (optional) defaults to false|


### Return type

**ReponseTache**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifierPdfSyncApiV1VerificationVerifierPost**
> ReponseVerificationSucces verifierPdfSyncApiV1VerificationVerifierPost()

Vérifie la conformité entre le PDF et son XML Factur-X embarqué.  **IMPORTANT**: Seuls les PDF Factur-X (avec XML embarqué) sont acceptés. Les PDF sans XML Factur-X seront rejetés avec une erreur 400.  Cette version synchrone utilise uniquement l\'extraction PDF native (pdfplumber). Pour les PDF images nécessitant de l\'OCR, utilisez l\'endpoint `/verifier-async`.  **Principe de vérification (Factur-X 1.08):** - Principe n°2: Le XML ne peut contenir que des infos présentes dans le PDF - Principe n°4: Toute info XML doit être présente et conforme dans le PDF  **Champs vérifiés:** - Identification: BT-1 (n° facture), BT-2 (date), BT-3 (type), BT-5 (devise), BT-23 (cadre) - Vendeur: BT-27 (nom), BT-29 (SIRET), BT-30 (SIREN), BT-31 (TVA) - Acheteur: BT-44 (nom), BT-46 (SIRET), BT-47 (SIREN), BT-48 (TVA) - Montants: BT-109 (HT), BT-110 (TVA), BT-112 (TTC), BT-115 (à payer) - Ventilation TVA: BT-116, BT-117, BT-118, BT-119 - Lignes de facture: BT-153, BT-129, BT-146, BT-131 - Notes obligatoires: PMT, PMD, AAB - Règle BR-FR-09: cohérence SIRET/SIREN

### Example

```typescript
import {
    VrificationPDFXMLApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new VrificationPDFXMLApi(configuration);

let fichierPdf: File; //Fichier PDF Factur-X à vérifier (default to undefined)

const { status, data } = await apiInstance.verifierPdfSyncApiV1VerificationVerifierPost(
    fichierPdf
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fichierPdf** | [**File**] | Fichier PDF Factur-X à vérifier | defaults to undefined|


### Return type

**ReponseVerificationSucces**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Vérification réussie |  -  |
|**400** | Erreur de vérification (PDF non Factur-X, invalide, etc.) |  -  |
|**413** | PDF trop volumineux ou trop de pages |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifierPdfSyncApiV1VerificationVerifierPost_0**
> ReponseVerificationSucces verifierPdfSyncApiV1VerificationVerifierPost_0()

Vérifie la conformité entre le PDF et son XML Factur-X embarqué.  **IMPORTANT**: Seuls les PDF Factur-X (avec XML embarqué) sont acceptés. Les PDF sans XML Factur-X seront rejetés avec une erreur 400.  Cette version synchrone utilise uniquement l\'extraction PDF native (pdfplumber). Pour les PDF images nécessitant de l\'OCR, utilisez l\'endpoint `/verifier-async`.  **Principe de vérification (Factur-X 1.08):** - Principe n°2: Le XML ne peut contenir que des infos présentes dans le PDF - Principe n°4: Toute info XML doit être présente et conforme dans le PDF  **Champs vérifiés:** - Identification: BT-1 (n° facture), BT-2 (date), BT-3 (type), BT-5 (devise), BT-23 (cadre) - Vendeur: BT-27 (nom), BT-29 (SIRET), BT-30 (SIREN), BT-31 (TVA) - Acheteur: BT-44 (nom), BT-46 (SIRET), BT-47 (SIREN), BT-48 (TVA) - Montants: BT-109 (HT), BT-110 (TVA), BT-112 (TTC), BT-115 (à payer) - Ventilation TVA: BT-116, BT-117, BT-118, BT-119 - Lignes de facture: BT-153, BT-129, BT-146, BT-131 - Notes obligatoires: PMT, PMD, AAB - Règle BR-FR-09: cohérence SIRET/SIREN

### Example

```typescript
import {
    VrificationPDFXMLApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new VrificationPDFXMLApi(configuration);

let fichierPdf: File; //Fichier PDF Factur-X à vérifier (default to undefined)

const { status, data } = await apiInstance.verifierPdfSyncApiV1VerificationVerifierPost_0(
    fichierPdf
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fichierPdf** | [**File**] | Fichier PDF Factur-X à vérifier | defaults to undefined|


### Return type

**ReponseVerificationSucces**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Vérification réussie |  -  |
|**400** | Erreur de vérification (PDF non Factur-X, invalide, etc.) |  -  |
|**413** | PDF trop volumineux ou trop de pages |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

