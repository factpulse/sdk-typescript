# SignatureLectroniqueApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**genererCertificatTestApiV1TraitementGenererCertificatTestPost**](#generercertificattestapiv1traitementgenerercertificattestpost) | **POST** /api/v1/traitement/generer-certificat-test | Générer un certificat X.509 auto-signé de test|
|[**signerPdfApiV1TraitementSignerPdfPost**](#signerpdfapiv1traitementsignerpdfpost) | **POST** /api/v1/traitement/signer-pdf | Signer un PDF avec le certificat du client (PAdES-B-LT)|
|[**signerPdfAsyncApiV1TraitementSignerPdfAsyncPost**](#signerpdfasyncapiv1traitementsignerpdfasyncpost) | **POST** /api/v1/traitement/signer-pdf-async | Signer un PDF de manière asynchrone (Celery)|
|[**validerSignaturePdfEndpointApiV1TraitementValiderSignaturePdfPost**](#validersignaturepdfendpointapiv1traitementvalidersignaturepdfpost) | **POST** /api/v1/traitement/valider-signature-pdf | Valider les signatures électroniques d\&#39;un PDF|

# **genererCertificatTestApiV1TraitementGenererCertificatTestPost**
> GenerateCertificateResponse genererCertificatTestApiV1TraitementGenererCertificatTestPost(generateCertificateRequest)

Génère un certificat X.509 auto-signé pour les tests de signature électronique PDF.      **⚠️ ATTENTION : Certificat de TEST uniquement !**      Ce certificat est :     - ✅ Adapté pour tests et développement     - ✅ Compatible signature PDF (PAdES)     - ✅ Conforme eIDAS niveau **SES** (Simple Electronic Signature)     - ❌ **JAMAIS utilisable en production**     - ❌ **Non reconnu** par les navigateurs et lecteurs PDF     - ❌ **Aucune valeur juridique**      ## Niveaux eIDAS      - **SES** (Simple) : Certificat auto-signé ← Généré par cet endpoint     - **AdES** (Advanced) : Certificat CA commerciale (Let\'s Encrypt, etc.)     - **QES** (Qualified) : Certificat qualifié PSCO (CertEurope, Universign, etc.)      ## Utilisation      Une fois généré, le certificat peut être :      1. **Enregistré dans Django** (recommandé) :        - Django Admin > Certificats de signature        - Upload `certificat_pem` et `cle_privee_pem`      2. **Utilisé directement** :        - Signer un PDF avec `/signer-pdf`        - Le certificat sera automatiquement utilisé      ## Exemple d\'appel      ```bash     curl -X POST \"https://www.factpulse.fr/api/facturation/generer-certificat-test\" \\       -H \"Authorization: Bearer eyJ0eXAi...\" \\       -H \"Content-Type: application/json\" \\       -d \'{         \"cn\": \"Test Client XYZ\",         \"organisation\": \"Client XYZ SARL\",         \"email\": \"contact@xyz.fr\",         \"duree_jours\": 365       }\'     ```      ## Cas d\'usage      - Tests de signature PDF en développement     - POC de signature électronique     - Formation et démos     - Tests d\'intégration automatisés      ## Conformité technique      Certificat généré avec :     - Clé RSA 2048 ou 4096 bits     - Algorithme SHA-256     - Extensions Key Usage : `digitalSignature`, `contentCommitment` (non-repudiation)     - Extensions Extended Key Usage : `codeSigning`, `emailProtection`     - Validité : 1 jour à 10 ans (configurable)     - Format : PEM (certificat et clé)     - Optionnel : PKCS#12 (.p12)

### Example

```typescript
import {
    SignatureLectroniqueApi,
    Configuration,
    GenerateCertificateRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new SignatureLectroniqueApi(configuration);

let generateCertificateRequest: GenerateCertificateRequest; //

const { status, data } = await apiInstance.genererCertificatTestApiV1TraitementGenererCertificatTestPost(
    generateCertificateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateCertificateRequest** | **GenerateCertificateRequest**|  | |


### Return type

**GenerateCertificateResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Certificat généré avec succès |  -  |
|**400** | Requête invalide (paramètres incorrects) |  -  |
|**500** | Erreur serveur lors de la génération |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signerPdfApiV1TraitementSignerPdfPost**
> any signerPdfApiV1TraitementSignerPdfPost()

Signe un PDF uploadé avec le certificat électronique configuré pour le client (via client_uid du JWT).      **Standards supportés** : PAdES-B-B, PAdES-B-T (horodatage), PAdES-B-LT (archivage long terme).      **Niveaux eIDAS** : SES (auto-signé), AdES (CA commerciale), QES (PSCO - hors scope).      **⚠️ Disclaimer légal** : Les signatures générées sont des cachets électroniques au sens     du règlement eIDAS. Le niveau de validité juridique dépend du certificat utilisé (SES/AdES/QES).     FactPulse ne fournit pas de certificats qualifiés QES - vous devez obtenir un certificat auprès     d\'un PSCO (Prestataire de Services de Confiance qualifié) pour une validité juridique maximale.

### Example

```typescript
import {
    SignatureLectroniqueApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new SignatureLectroniqueApi(configuration);

let fichierPdf: File; //Fichier PDF à signer (sera traité puis retourné signé en base64) (default to undefined)
let raison: string; // (optional) (default to undefined)
let localisation: string; // (optional) (default to undefined)
let contact: string; // (optional) (default to undefined)
let fieldName: string; //Nom du champ de signature PDF (optional) (default to 'FactPulseSignature')
let usePadesLt: boolean; //Activer PAdES-B-LT (archivage long terme avec données de validation embarquées). NÉCESSITE un certificat avec accès OCSP/CRL. (optional) (default to false)
let useTimestamp: boolean; //Activer l\\\'horodatage RFC 3161 avec FreeTSA (PAdES-B-T) (optional) (default to true)

const { status, data } = await apiInstance.signerPdfApiV1TraitementSignerPdfPost(
    fichierPdf,
    raison,
    localisation,
    contact,
    fieldName,
    usePadesLt,
    useTimestamp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fichierPdf** | [**File**] | Fichier PDF à signer (sera traité puis retourné signé en base64) | defaults to undefined|
| **raison** | [**string**] |  | (optional) defaults to undefined|
| **localisation** | [**string**] |  | (optional) defaults to undefined|
| **contact** | [**string**] |  | (optional) defaults to undefined|
| **fieldName** | [**string**] | Nom du champ de signature PDF | (optional) defaults to 'FactPulseSignature'|
| **usePadesLt** | [**boolean**] | Activer PAdES-B-LT (archivage long terme avec données de validation embarquées). NÉCESSITE un certificat avec accès OCSP/CRL. | (optional) defaults to false|
| **useTimestamp** | [**boolean**] | Activer l\\\&#39;horodatage RFC 3161 avec FreeTSA (PAdES-B-T) | (optional) defaults to true|


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
|**200** | PDF signé avec succès |  -  |
|**400** | Certificat invalide ou expiré |  -  |
|**404** | Aucun certificat configuré pour ce client |  -  |
|**401** | Non authentifié - Token JWT manquant ou invalide |  -  |
|**503** | Service Django inaccessible |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signerPdfAsyncApiV1TraitementSignerPdfAsyncPost**
> any signerPdfAsyncApiV1TraitementSignerPdfAsyncPost()

Signe un PDF uploadé de manière asynchrone via une tâche Celery.      **Différence avec /signer-pdf** :     - `/signer-pdf` : Signature synchrone (blocage jusqu\'à la fin)     - `/signer-pdf-async` : Signature asynchrone (retourne immédiatement un task_id)      **Avantages de l\'async** :     - Pas de timeout pour les gros fichiers     - Pas de blocage du worker FastAPI     - Possibilité de suivre la progression via le task_id     - Idéal pour les traitements par lot      **Standards supportés** : PAdES-B-B, PAdES-B-T (horodatage), PAdES-B-LT (archivage long terme).      **⚠️ Disclaimer légal** : Identique à /signer-pdf (voir documentation de cet endpoint).

### Example

```typescript
import {
    SignatureLectroniqueApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new SignatureLectroniqueApi(configuration);

let fichierPdf: File; //Fichier PDF à signer (traité de manière asynchrone) (default to undefined)
let raison: string; // (optional) (default to undefined)
let localisation: string; // (optional) (default to undefined)
let contact: string; // (optional) (default to undefined)
let fieldName: string; //Nom du champ de signature PDF (optional) (default to 'FactPulseSignature')
let usePadesLt: boolean; //Activer PAdES-B-LT (archivage long terme avec données de validation embarquées). NÉCESSITE un certificat avec accès OCSP/CRL. (optional) (default to false)
let useTimestamp: boolean; //Activer l\\\'horodatage RFC 3161 avec FreeTSA (PAdES-B-T) (optional) (default to true)

const { status, data } = await apiInstance.signerPdfAsyncApiV1TraitementSignerPdfAsyncPost(
    fichierPdf,
    raison,
    localisation,
    contact,
    fieldName,
    usePadesLt,
    useTimestamp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fichierPdf** | [**File**] | Fichier PDF à signer (traité de manière asynchrone) | defaults to undefined|
| **raison** | [**string**] |  | (optional) defaults to undefined|
| **localisation** | [**string**] |  | (optional) defaults to undefined|
| **contact** | [**string**] |  | (optional) defaults to undefined|
| **fieldName** | [**string**] | Nom du champ de signature PDF | (optional) defaults to 'FactPulseSignature'|
| **usePadesLt** | [**boolean**] | Activer PAdES-B-LT (archivage long terme avec données de validation embarquées). NÉCESSITE un certificat avec accès OCSP/CRL. | (optional) defaults to false|
| **useTimestamp** | [**boolean**] | Activer l\\\&#39;horodatage RFC 3161 avec FreeTSA (PAdES-B-T) | (optional) defaults to true|


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
|**202** | Tâche de signature créée avec succès |  -  |
|**400** | Paramètres invalides |  -  |
|**401** | Non authentifié - Token JWT manquant ou invalide |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validerSignaturePdfEndpointApiV1TraitementValiderSignaturePdfPost**
> any validerSignaturePdfEndpointApiV1TraitementValiderSignaturePdfPost()

Valide les signatures électroniques présentes dans un PDF uploadé.      **Vérifications effectuées** :     - Présence de signatures     - Intégrité du document (non modifié depuis signature)     - Validité des certificats     - Chaîne de confiance (si disponible)     - Présence d\'horodatage (PAdES-B-T)     - Données de validation (PAdES-B-LT)      **Standards supportés** : PAdES-B-B, PAdES-B-T, PAdES-B-LT, ISO 32000-2.      **⚠️ Note** : Cette validation est technique (intégrité cryptographique). La validité juridique     dépend du niveau eIDAS du certificat (SES/AdES/QES) et du contexte d\'utilisation.

### Example

```typescript
import {
    SignatureLectroniqueApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new SignatureLectroniqueApi(configuration);

let fichierPdf: File; //Fichier PDF à valider (sera analysé pour détecter et valider les signatures) (default to undefined)

const { status, data } = await apiInstance.validerSignaturePdfEndpointApiV1TraitementValiderSignaturePdfPost(
    fichierPdf
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fichierPdf** | [**File**] | Fichier PDF à valider (sera analysé pour détecter et valider les signatures) | defaults to undefined|


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
|**200** | Validation réussie |  -  |
|**400** | Fichier invalide ou non lisible |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

