# ChorusProApi

All URIs are relative to *https://factpulse.fr*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ajouterFichierApiV1ChorusProTransversesAjouterFichierPost**](#ajouterfichierapiv1chorusprotransversesajouterfichierpost) | **POST** /api/v1/chorus-pro/transverses/ajouter-fichier | Add an attachment|
|[**completerFactureApiV1ChorusProFacturesCompleterPost**](#completerfactureapiv1chorusprofacturescompleterpost) | **POST** /api/v1/chorus-pro/factures/completer | Complete a suspended invoice (Supplier)|
|[**consulterFactureApiV1ChorusProFacturesConsulterPost**](#consulterfactureapiv1chorusprofacturesconsulterpost) | **POST** /api/v1/chorus-pro/factures/consulter | Consult invoice status|
|[**consulterStructureApiV1ChorusProStructuresConsulterPost**](#consulterstructureapiv1chorusprostructuresconsulterpost) | **POST** /api/v1/chorus-pro/structures/consulter | Consult structure details|
|[**listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet**](#listerservicesstructureapiv1chorusprostructuresidstructurecppservicesget) | **GET** /api/v1/chorus-pro/structures/{id_structure_cpp}/services | List structure services|
|[**obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost**](#obteniridchorusprodepuissiretapiv1chorusprostructuresobteniriddepuissiretpost) | **POST** /api/v1/chorus-pro/structures/obtenir-id-depuis-siret | Utility: Get Chorus Pro ID from SIRET|
|[**rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost**](#rechercherfacturesdestinataireapiv1chorusprofacturesrechercherdestinatairepost) | **POST** /api/v1/chorus-pro/factures/rechercher-destinataire | Search received invoices (Recipient)|
|[**rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost**](#rechercherfacturesfournisseurapiv1chorusprofacturesrechercherfournisseurpost) | **POST** /api/v1/chorus-pro/factures/rechercher-fournisseur | Search issued invoices (Supplier)|
|[**rechercherStructuresApiV1ChorusProStructuresRechercherPost**](#rechercherstructuresapiv1chorusprostructuresrechercherpost) | **POST** /api/v1/chorus-pro/structures/rechercher | Search Chorus Pro structures|
|[**recyclerFactureApiV1ChorusProFacturesRecyclerPost**](#recyclerfactureapiv1chorusprofacturesrecyclerpost) | **POST** /api/v1/chorus-pro/factures/recycler | Recycle an invoice (Supplier)|
|[**soumettreFactureApiV1ChorusProFacturesSoumettrePost**](#soumettrefactureapiv1chorusprofacturessoumettrepost) | **POST** /api/v1/chorus-pro/factures/soumettre | Submit an invoice to Chorus Pro|
|[**telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost**](#telechargergroupefacturesapiv1chorusprofacturestelechargergroupepost) | **POST** /api/v1/chorus-pro/factures/telecharger-groupe | Download a group of invoices|
|[**traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost**](#traiterfacturerecueapiv1chorusprofacturestraiterfacturerecuepost) | **POST** /api/v1/chorus-pro/factures/traiter-facture-recue | Process a received invoice (Recipient)|
|[**valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost**](#valideurconsulterfactureapiv1chorusprofacturesvalideurconsulterpost) | **POST** /api/v1/chorus-pro/factures/valideur/consulter | Consult an invoice (Validator)|
|[**valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost**](#valideurrechercherfacturesapiv1chorusprofacturesvalideurrechercherpost) | **POST** /api/v1/chorus-pro/factures/valideur/rechercher | Search invoices to validate (Validator)|
|[**valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost**](#valideurtraiterfactureapiv1chorusprofacturesvalideurtraiterpost) | **POST** /api/v1/chorus-pro/factures/valideur/traiter | Validate or reject an invoice (Validator)|

# **ajouterFichierApiV1ChorusProTransversesAjouterFichierPost**
> any ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(requestBody)

Add an attachment to the current user account.      **Max size**: 10 MB per file      **Example payload**:     ```json     {       \"pieceJointeFichier\": \"JVBERi0xLjQKJeLjz9MKNSAwIG9iago8P...\",       \"pieceJointeNom\": \"purchase_order.pdf\",       \"pieceJointeTypeMime\": \"application/pdf\",       \"pieceJointeExtension\": \"PDF\"     }     ```      **Returns**: The attachment ID (`pieceJointeIdFichier`) to use in `/factures/completer`.      **Accepted extensions**: PDF, JPG, PNG, ZIP, XML, etc.

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completerFactureApiV1ChorusProFacturesCompleterPost**
> any completerFactureApiV1ChorusProFacturesCompleterPost(requestBody)

Complete a SUSPENDUE status invoice by adding attachments or a comment.      **Required status**: SUSPENDUE      **Possible actions**:     - Add attachments (supporting documents, purchase orders, etc.)     - Modify comment      **Example payload**:     ```json     {       \"identifiantFactureCPP\": 12345,       \"commentaire\": \"Here are the requested documents\",       \"listePiecesJointes\": [         {           \"pieceJointeIdFichier\": 98765,           \"pieceJointeNom\": \"purchase_order.pdf\"         }       ]     }     ```      **Note**: Attachments must first be uploaded via `/transverses/ajouter-fichier`.      **After completion**: The invoice returns to MISE_A_DISPOSITION status.

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.completerFactureApiV1ChorusProFacturesCompleterPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consulterFactureApiV1ChorusProFacturesConsulterPost**
> GetInvoiceResponse consulterFactureApiV1ChorusProFacturesConsulterPost(getInvoiceRequest)

Retrieves the information and current status of an invoice submitted to Chorus Pro.      **Returns**:     - Invoice number and date     - Total gross amount     - **Current status**: SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.     - Recipient structure      **Use cases**:     - Track the processing progress of an invoice     - Check if an invoice has been validated or rejected     - Get the payment date      **Polling**: Call this endpoint regularly to track status changes.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    GetInvoiceRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let getInvoiceRequest: GetInvoiceRequest; //

const { status, data } = await apiInstance.consulterFactureApiV1ChorusProFacturesConsulterPost(
    getInvoiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getInvoiceRequest** | **GetInvoiceRequest**|  | |


### Return type

**GetInvoiceResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consulterStructureApiV1ChorusProStructuresConsulterPost**
> GetStructureResponse consulterStructureApiV1ChorusProStructuresConsulterPost(getStructureRequest)

Retrieves detailed information about a Chorus Pro structure.       **Returns**:     - Company name     - Intra-EU VAT number     - Contact email     - **Required parameters**: Indicates if service code and/or engagement number are required to submit an invoice      **Typical step**: Called after `search-structures` to know which fields are mandatory before submitting an invoice.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    GetStructureRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let getStructureRequest: GetStructureRequest; //

const { status, data } = await apiInstance.consulterStructureApiV1ChorusProStructuresConsulterPost(
    getStructureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getStructureRequest** | **GetStructureRequest**|  | |


### Return type

**GetStructureResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet**
> SearchServicesResponse listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet()

Retrieves the list of active services for a public structure.      **Use cases**:     - List available services for an administration     - Verify that a service code exists before submitting an invoice      **Returns**:     - List of services with their code, label, and status (active/inactive)

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let idStructureCpp: number; //Chorus Pro structure ID (idStructureCPP) (default to undefined)

const { status, data } = await apiInstance.listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(
    idStructureCpp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idStructureCpp** | [**number**] | Chorus Pro structure ID (idStructureCPP) | defaults to undefined|


### Return type

**SearchServicesResponse**

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

# **obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost**
> GetChorusProIdResponse obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(getChorusProIdRequest)

**Convenient utility** to get a structure\'s Chorus Pro ID from its SIRET.       This wrapper function combines:     1. Searching for the structure by SIRET     2. Extracting the `id_structure_cpp` if a single structure is found      **Returns**:     - `id_structure_cpp`: Chorus Pro ID (0 if not found or multiple results)     - `designation_structure`: Structure name (if found)     - `message`: Explanatory message      **Use cases**:     - Shortcut to directly get the Chorus Pro ID before submitting an invoice     - Simplified alternative to `search-structures` + manual ID extraction      **Note**: If multiple structures match the SIRET (rare), returns 0 and an error message.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    GetChorusProIdRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let getChorusProIdRequest: GetChorusProIdRequest; //

const { status, data } = await apiInstance.obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(
    getChorusProIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getChorusProIdRequest** | **GetChorusProIdRequest**|  | |


### Return type

**GetChorusProIdResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost**
> any rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(requestBody)

Search invoices received by the connected recipient.      **Filters**:     - Downloaded / not downloaded     - Reception dates     - Status (MISE_A_DISPOSITION, SUSPENDUE, etc.)     - Supplier      **Useful indicator**: `factureTelechargeeParDestinataire` indicates whether the invoice has already been downloaded.

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost**
> any rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(requestBody)

Search invoices issued by the connected supplier.      **Available filters**:     - Invoice number     - Dates (start/end)     - Status     - Recipient structure     - Amount      **Use cases**:     - Track issued invoices     - Verify statuses     - Export for accounting

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rechercherStructuresApiV1ChorusProStructuresRechercherPost**
> SearchStructureResponse rechercherStructuresApiV1ChorusProStructuresRechercherPost(searchStructureRequest)

Search for structures (companies, administrations) registered on Chorus Pro.      **Use cases**:     - Find the Chorus Pro ID of a structure from its SIRET     - Check if a structure is registered on Chorus Pro     - List structures matching criteria      **Available filters**:     - Identifier (SIRET, SIREN, etc.)     - Company name     - Identifier type     - Private structures only      **Typical step**: Called before `submit-invoice` to get the recipient\'s `id_structure_cpp`.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    SearchStructureRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let searchStructureRequest: SearchStructureRequest; //

const { status, data } = await apiInstance.rechercherStructuresApiV1ChorusProStructuresRechercherPost(
    searchStructureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchStructureRequest** | **SearchStructureRequest**|  | |


### Return type

**SearchStructureResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recyclerFactureApiV1ChorusProFacturesRecyclerPost**
> any recyclerFactureApiV1ChorusProFacturesRecyclerPost(requestBody)

Recycle an invoice with A_RECYCLER status by modifying routing data.      **Required status**: A_RECYCLER      **Modifiable fields**:     - Recipient (`idStructureCPP`)     - Service code     - Engagement number      **Use cases**:     - Wrong recipient     - Change of billing service     - Update engagement number      **Example payload**:     ```json     {       \"identifiantFactureCPP\": 12345,       \"idStructureCPP\": 67890,       \"codeService\": \"SERVICE_01\",       \"numeroEngagement\": \"ENG2024001\"     }     ```      **Note**: The invoice keeps its number and amounts, only routing fields change.

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.recyclerFactureApiV1ChorusProFacturesRecyclerPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **soumettreFactureApiV1ChorusProFacturesSoumettrePost**
> SubmitInvoiceResponse soumettreFactureApiV1ChorusProFacturesSoumettrePost(submitInvoiceRequest)

Submits an electronic invoice to a public structure via Chorus Pro.       **Complete workflow**:     1. **Upload the Factur-X PDF** via `/transverses/ajouter-fichier` → retrieve `pieceJointeId`     2. **Get the structure ID** via `/structures/rechercher` or `/structures/obtenir-id-depuis-siret`     3. **Check mandatory parameters** via `/structures/consulter`     4. **Submit the invoice** with the `piece_jointe_principale_id` obtained in step 1      **Prerequisites**:     1. Have the recipient\'s `id_structure_cpp` (via `/structures/rechercher`)     2. Know the mandatory parameters (via `/structures/consulter`):        - Service code if `code_service_doit_etre_renseigne=true`        - Engagement number if `numero_ej_doit_etre_renseigne=true`     3. Have uploaded the Factur-X PDF (via `/transverses/ajouter-fichier`)      **Expected format**:     - `piece_jointe_principale_id`: ID returned by `/transverses/ajouter-fichier`     - Amounts: Strings with 2 decimals (e.g., \"1250.50\")     - Dates: ISO 8601 format (YYYY-MM-DD)      **Returns**:     - `identifiant_facture_cpp`: Chorus Pro ID of the created invoice     - `numero_flux_depot`: Deposit tracking number      **Possible statuses after submission**:     - SOUMISE: Pending validation     - VALIDEE: Validated by recipient     - REJETEE: Rejected (data error or business refusal)     - SUSPENDUE: Pending additional information      **Note**: Use `/factures/consulter` to track status changes.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    SubmitInvoiceRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let submitInvoiceRequest: SubmitInvoiceRequest; //

const { status, data } = await apiInstance.soumettreFactureApiV1ChorusProFacturesSoumettrePost(
    submitInvoiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitInvoiceRequest** | **SubmitInvoiceRequest**|  | |


### Return type

**SubmitInvoiceResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost**
> any telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(requestBody)

Download one or more invoices (max 10 recommended) with their attachments.      **Available formats**:     - PDF: PDF file only     - XML: XML file only     - ZIP: Archive containing PDF + XML + attachments      **Maximum size**: 120 MB per download      **Example payload**:     ```json     {       \"listeIdentifiantsFactureCPP\": [12345, 12346],       \"inclurePiecesJointes\": true,       \"formatFichier\": \"ZIP\"     }     ```      **Returns**: The file is base64-encoded in the `fichierBase64` field.      **Note**: The `factureTelechargeeParDestinataire` flag is automatically updated.

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost**
> any traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(requestBody)

Change the status of a received invoice.      **Possible statuses**:     - MISE_A_DISPOSITION: Invoice accepted     - SUSPENDUE: Pending additional information (reason required)     - REJETEE: Invoice refused (reason required)     - MANDATEE: Invoice mandated     - MISE_EN_PAIEMENT: Invoice being paid     - COMPTABILISEE: Invoice accounted     - MISE_A_DISPOSITION_COMPTABLE: Made available to accounting     - A_RECYCLER: To be recycled     - COMPLETEE: Completed     - SERVICE-FAIT: Service rendered     - PRISE_EN_COMPTE_DESTINATAIRE: Acknowledged     - TRANSMISE_MOA: Transmitted to MOA      **Example payload**:     ```json     {       \"identifiantFactureCPP\": 12345,       \"nouveauStatut\": \"REJETEE\",       \"motifRejet\": \"Duplicate invoice\",       \"commentaire\": \"Invoice already received under reference ABC123\"     }     ```      **Rules**:     - A reason is **required** for SUSPENDUE and REJETEE     - Only certain statuses are allowed depending on the invoice\'s current status

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost**
> any valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(requestBody)

Retrieves detailed information about an invoice for validators.  **Use case**: Called by validators (public sector) to consult invoice details before approving or rejecting it.  **Required payload**: ```json {   \"idFacture\": 123456789 } ```  **Returns**: Complete invoice details including amounts, dates, attachments, and current status.

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost**
> any valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(requestBody)

Search invoices pending validation by the connected validator.      **Role**: Validator in the internal validation workflow.      **Filters**: Dates, structure, service, etc.

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost**
> any valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(requestBody)

Validate or reject an invoice pending validation.      **Actions**:     - Validate: The invoice moves to the next status in the workflow     - Reject: The invoice is rejected (reason required)

### Example

```typescript
import {
    ChorusProApi,
    Configuration
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |
|**401** | Authentication required - Invalid or missing JWT token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

