# ChorusProApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ajouterFichierApiV1ChorusProTransversesAjouterFichierPost**](#ajouterfichierapiv1chorusprotransversesajouterfichierpost) | **POST** /api/v1/chorus-pro/transverses/ajouter-fichier | Ajouter une pièce jointe|
|[**completerFactureApiV1ChorusProFacturesCompleterPost**](#completerfactureapiv1chorusprofacturescompleterpost) | **POST** /api/v1/chorus-pro/factures/completer | Compléter une facture suspendue (Fournisseur)|
|[**consulterFactureApiV1ChorusProFacturesConsulterPost**](#consulterfactureapiv1chorusprofacturesconsulterpost) | **POST** /api/v1/chorus-pro/factures/consulter | Consulter le statut d\&#39;une facture|
|[**consulterStructureApiV1ChorusProStructuresConsulterPost**](#consulterstructureapiv1chorusprostructuresconsulterpost) | **POST** /api/v1/chorus-pro/structures/consulter | Consulter les détails d\&#39;une structure|
|[**listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet**](#listerservicesstructureapiv1chorusprostructuresidstructurecppservicesget) | **GET** /api/v1/chorus-pro/structures/{id_structure_cpp}/services | Lister les services d\&#39;une structure|
|[**obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost**](#obteniridchorusprodepuissiretapiv1chorusprostructuresobteniriddepuissiretpost) | **POST** /api/v1/chorus-pro/structures/obtenir-id-depuis-siret | Utilitaire : Obtenir l\&#39;ID Chorus Pro depuis un SIRET|
|[**rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost**](#rechercherfacturesdestinataireapiv1chorusprofacturesrechercherdestinatairepost) | **POST** /api/v1/chorus-pro/factures/rechercher-destinataire | Rechercher factures reçues (Destinataire)|
|[**rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost**](#rechercherfacturesfournisseurapiv1chorusprofacturesrechercherfournisseurpost) | **POST** /api/v1/chorus-pro/factures/rechercher-fournisseur | Rechercher factures émises (Fournisseur)|
|[**rechercherStructuresApiV1ChorusProStructuresRechercherPost**](#rechercherstructuresapiv1chorusprostructuresrechercherpost) | **POST** /api/v1/chorus-pro/structures/rechercher | Rechercher des structures Chorus Pro|
|[**recyclerFactureApiV1ChorusProFacturesRecyclerPost**](#recyclerfactureapiv1chorusprofacturesrecyclerpost) | **POST** /api/v1/chorus-pro/factures/recycler | Recycler une facture (Fournisseur)|
|[**soumettreFactureApiV1ChorusProFacturesSoumettrePost**](#soumettrefactureapiv1chorusprofacturessoumettrepost) | **POST** /api/v1/chorus-pro/factures/soumettre | Soumettre une facture à Chorus Pro|
|[**telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost**](#telechargergroupefacturesapiv1chorusprofacturestelechargergroupepost) | **POST** /api/v1/chorus-pro/factures/telecharger-groupe | Télécharger un groupe de factures|
|[**traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost**](#traiterfacturerecueapiv1chorusprofacturestraiterfacturerecuepost) | **POST** /api/v1/chorus-pro/factures/traiter-facture-recue | Traiter une facture reçue (Destinataire)|
|[**valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost**](#valideurconsulterfactureapiv1chorusprofacturesvalideurconsulterpost) | **POST** /api/v1/chorus-pro/factures/valideur/consulter | Consulter une facture (Valideur)|
|[**valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost**](#valideurrechercherfacturesapiv1chorusprofacturesvalideurrechercherpost) | **POST** /api/v1/chorus-pro/factures/valideur/rechercher | Rechercher factures à valider (Valideur)|
|[**valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost**](#valideurtraiterfactureapiv1chorusprofacturesvalideurtraiterpost) | **POST** /api/v1/chorus-pro/factures/valideur/traiter | Valider ou refuser une facture (Valideur)|

# **ajouterFichierApiV1ChorusProTransversesAjouterFichierPost**
> any ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(bodyAjouterFichierApiV1ChorusProTransversesAjouterFichierPost)

Ajoute une pièce jointe au compte utilisateur courant.      **Taille max** : 10 Mo par fichier      **Payload exemple** :     ```json     {       \"pieceJointeFichier\": \"JVBERi0xLjQKJeLjz9MKNSAwIG9iago8P...\",       \"pieceJointeNom\": \"bon_commande.pdf\",       \"pieceJointeTypeMime\": \"application/pdf\",       \"pieceJointeExtension\": \"PDF\"     }     ```      **Retour** : L\'ID de la pièce jointe (`pieceJointeIdFichier`) à utiliser ensuite dans `/factures/completer`.      **Extensions acceptées** : PDF, JPG, PNG, ZIP, XML, etc.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyAjouterFichierApiV1ChorusProTransversesAjouterFichierPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyAjouterFichierApiV1ChorusProTransversesAjouterFichierPost: BodyAjouterFichierApiV1ChorusProTransversesAjouterFichierPost; //

const { status, data } = await apiInstance.ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(
    bodyAjouterFichierApiV1ChorusProTransversesAjouterFichierPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyAjouterFichierApiV1ChorusProTransversesAjouterFichierPost** | **BodyAjouterFichierApiV1ChorusProTransversesAjouterFichierPost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **completerFactureApiV1ChorusProFacturesCompleterPost**
> any completerFactureApiV1ChorusProFacturesCompleterPost(bodyCompleterFactureApiV1ChorusProFacturesCompleterPost)

Complète une facture au statut SUSPENDUE en ajoutant des pièces jointes ou un commentaire.      **Statut requis** : SUSPENDUE      **Actions possibles** :     - Ajouter des pièces jointes (justificatifs, bons de commande, etc.)     - Modifier le commentaire      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"commentaire\": \"Voici les justificatifs demandés\",       \"listePiecesJointes\": [         {           \"pieceJointeIdFichier\": 98765,           \"pieceJointeNom\": \"bon_commande.pdf\"         }       ]     }     ```      **Note** : Les pièces jointes doivent d\'abord être uploadées via `/transverses/ajouter-fichier`.      **Après complétion** : La facture repasse au statut MISE_A_DISPOSITION.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyCompleterFactureApiV1ChorusProFacturesCompleterPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyCompleterFactureApiV1ChorusProFacturesCompleterPost: BodyCompleterFactureApiV1ChorusProFacturesCompleterPost; //

const { status, data } = await apiInstance.completerFactureApiV1ChorusProFacturesCompleterPost(
    bodyCompleterFactureApiV1ChorusProFacturesCompleterPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyCompleterFactureApiV1ChorusProFacturesCompleterPost** | **BodyCompleterFactureApiV1ChorusProFacturesCompleterPost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consulterFactureApiV1ChorusProFacturesConsulterPost**
> ConsulterFactureResponse consulterFactureApiV1ChorusProFacturesConsulterPost(consulterFactureRequest)

Récupère les informations et le statut actuel d\'une facture soumise à Chorus Pro.      **Retour** :     - Numéro et date de facture     - Montant TTC     - **Statut courant** : SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.     - Structure destinataire      **Cas d\'usage** :     - Suivre l\'évolution du traitement d\'une facture     - Vérifier si une facture a été validée ou rejetée     - Obtenir la date de mise en paiement      **Polling** : Appelez cet endpoint régulièrement pour suivre l\'évolution du statut.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    ConsulterFactureRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let consulterFactureRequest: ConsulterFactureRequest; //

const { status, data } = await apiInstance.consulterFactureApiV1ChorusProFacturesConsulterPost(
    consulterFactureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **consulterFactureRequest** | **ConsulterFactureRequest**|  | |


### Return type

**ConsulterFactureResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consulterStructureApiV1ChorusProStructuresConsulterPost**
> ConsulterStructureResponse consulterStructureApiV1ChorusProStructuresConsulterPost(consulterStructureRequest)

Récupère les informations détaillées d\'une structure Chorus Pro.       **Retour** :     - Raison sociale     - Numéro de TVA intracommunautaire     - Email de contact     - **Paramètres obligatoires** : Indique si le code service et/ou numéro d\'engagement sont requis pour soumettre une facture      **Étape typique** : Appelée après `rechercher-structures` pour savoir quels champs sont obligatoires avant de soumettre une facture.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    ConsulterStructureRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let consulterStructureRequest: ConsulterStructureRequest; //

const { status, data } = await apiInstance.consulterStructureApiV1ChorusProStructuresConsulterPost(
    consulterStructureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **consulterStructureRequest** | **ConsulterStructureRequest**|  | |


### Return type

**ConsulterStructureResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet**
> RechercherServicesResponse listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(bodyListerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet)

Récupère la liste des services actifs d\'une structure publique.      **Cas d\'usage** :     - Lister les services disponibles pour une administration     - Vérifier qu\'un code service existe avant de soumettre une facture      **Retour** :     - Liste des services avec leur code, libellé et statut (actif/inactif)

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyListerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let idStructureCpp: number; // (default to undefined)
let bodyListerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet: BodyListerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet; //

const { status, data } = await apiInstance.listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(
    idStructureCpp,
    bodyListerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyListerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet** | **BodyListerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet**|  | |
| **idStructureCpp** | [**number**] |  | defaults to undefined|


### Return type

**RechercherServicesResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost**
> ObtenirIdChorusProResponse obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(obtenirIdChorusProRequest)

**Utilitaire pratique** pour obtenir l\'ID Chorus Pro d\'une structure à partir de son SIRET.       Cette fonction wrapper combine :     1. Recherche de la structure par SIRET     2. Extraction de l\'`id_structure_cpp` si une seule structure est trouvée      **Retour** :     - `id_structure_cpp` : ID Chorus Pro (0 si non trouvé ou si plusieurs résultats)     - `designation_structure` : Nom de la structure (si trouvée)     - `message` : Message explicatif      **Cas d\'usage** :     - Raccourci pour obtenir directement l\'ID Chorus Pro avant de soumettre une facture     - Alternative simplifiée à `rechercher-structures` + extraction manuelle de l\'ID      **Note** : Si plusieurs structures correspondent au SIRET (rare), retourne 0 et un message d\'erreur.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    ObtenirIdChorusProRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let obtenirIdChorusProRequest: ObtenirIdChorusProRequest; //

const { status, data } = await apiInstance.obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(
    obtenirIdChorusProRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **obtenirIdChorusProRequest** | **ObtenirIdChorusProRequest**|  | |


### Return type

**ObtenirIdChorusProResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost**
> any rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(bodyRechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost)

Recherche les factures reçues par le destinataire connecté.      **Filtres** :     - Téléchargée / non téléchargée     - Dates de réception     - Statut (MISE_A_DISPOSITION, SUSPENDUE, etc.)     - Fournisseur      **Indicateur utile** : `factureTelechargeeParDestinataire` permet de savoir si la facture a déjà été téléchargée.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyRechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyRechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost: BodyRechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost; //

const { status, data } = await apiInstance.rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(
    bodyRechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyRechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost** | **BodyRechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost**
> any rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(bodyRechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost)

Recherche les factures émises par le fournisseur connecté.      **Filtres disponibles** :     - Numéro de facture     - Dates (début/fin)     - Statut     - Structure destinataire     - Montant      **Cas d\'usage** :     - Suivi des factures émises     - Vérification des statuts     - Export pour comptabilité

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyRechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyRechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost: BodyRechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost; //

const { status, data } = await apiInstance.rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(
    bodyRechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyRechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost** | **BodyRechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rechercherStructuresApiV1ChorusProStructuresRechercherPost**
> RechercherStructureResponse rechercherStructuresApiV1ChorusProStructuresRechercherPost(rechercherStructureRequest)

Recherche des structures (entreprises, administrations) enregistrées sur Chorus Pro.      **Cas d\'usage** :     - Trouver l\'ID Chorus Pro d\'une structure à partir de son SIRET     - Vérifier si une structure est enregistrée sur Chorus Pro     - Lister les structures correspondant à des critères      **Filtres disponibles** :     - Identifiant (SIRET, SIREN, etc.)     - Raison sociale     - Type d\'identifiant     - Structures privées uniquement      **Étape typique** : Appelée avant `soumettre-facture` pour obtenir l\'`id_structure_cpp` du destinataire.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    RechercherStructureRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let rechercherStructureRequest: RechercherStructureRequest; //

const { status, data } = await apiInstance.rechercherStructuresApiV1ChorusProStructuresRechercherPost(
    rechercherStructureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rechercherStructureRequest** | **RechercherStructureRequest**|  | |


### Return type

**RechercherStructureResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recyclerFactureApiV1ChorusProFacturesRecyclerPost**
> any recyclerFactureApiV1ChorusProFacturesRecyclerPost(bodyRecyclerFactureApiV1ChorusProFacturesRecyclerPost)

Recycle une facture au statut A_RECYCLER en modifiant les données d\'acheminement.      **Statut requis** : A_RECYCLER      **Champs modifiables** :     - Destinataire (`idStructureCPP`)     - Code service     - Numéro d\'engagement      **Cas d\'usage** :     - Erreur de destinataire     - Changement de service facturation     - Mise à jour du numéro d\'engagement      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"idStructureCPP\": 67890,       \"codeService\": \"SERVICE_01\",       \"numeroEngagement\": \"ENG2024001\"     }     ```      **Note** : La facture conserve son numéro et ses montants, seuls les champs d\'acheminement changent.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyRecyclerFactureApiV1ChorusProFacturesRecyclerPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyRecyclerFactureApiV1ChorusProFacturesRecyclerPost: BodyRecyclerFactureApiV1ChorusProFacturesRecyclerPost; //

const { status, data } = await apiInstance.recyclerFactureApiV1ChorusProFacturesRecyclerPost(
    bodyRecyclerFactureApiV1ChorusProFacturesRecyclerPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyRecyclerFactureApiV1ChorusProFacturesRecyclerPost** | **BodyRecyclerFactureApiV1ChorusProFacturesRecyclerPost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **soumettreFactureApiV1ChorusProFacturesSoumettrePost**
> SoumettreFactureResponse soumettreFactureApiV1ChorusProFacturesSoumettrePost(soumettreFactureRequest)

Soumet une facture électronique à une structure publique via Chorus Pro.       **📋 Workflow complet** :     1. **Uploader le PDF Factur-X** via `/transverses/ajouter-fichier` → récupérer `pieceJointeId`     2. **Obtenir l\'ID structure** via `/structures/rechercher` ou `/structures/obtenir-id-depuis-siret`     3. **Vérifier les paramètres obligatoires** via `/structures/consulter`     4. **Soumettre la facture** avec le `piece_jointe_principale_id` obtenu à l\'étape 1      **Pré-requis** :     1. Avoir l\'`id_structure_cpp` du destinataire (via `/structures/rechercher`)     2. Connaître les paramètres obligatoires (via `/structures/consulter`) :        - Code service si `code_service_doit_etre_renseigne=true`        - Numéro d\'engagement si `numero_ej_doit_etre_renseigne=true`     3. Avoir uploadé le PDF Factur-X (via `/transverses/ajouter-fichier`)      **Format attendu** :     - `piece_jointe_principale_id` : ID retourné par `/transverses/ajouter-fichier`     - Montants : Chaînes de caractères avec 2 décimales (ex: \"1250.50\")     - Dates : Format ISO 8601 (YYYY-MM-DD)      **Retour** :     - `identifiant_facture_cpp` : ID Chorus Pro de la facture créée     - `numero_flux_depot` : Numéro de suivi du dépôt      **Statuts possibles après soumission** :     - SOUMISE : En attente de validation     - VALIDEE : Validée par le destinataire     - REJETEE : Rejetée (erreur de données ou refus métier)     - SUSPENDUE : En attente d\'informations complémentaires      **Note** : Utilisez `/factures/consulter` pour suivre l\'évolution du statut.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    SoumettreFactureRequest
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let soumettreFactureRequest: SoumettreFactureRequest; //

const { status, data } = await apiInstance.soumettreFactureApiV1ChorusProFacturesSoumettrePost(
    soumettreFactureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **soumettreFactureRequest** | **SoumettreFactureRequest**|  | |


### Return type

**SoumettreFactureResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost**
> any telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(bodyTelechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost)

Télécharge une ou plusieurs factures (max 10 recommandé) avec leurs pièces jointes.      **Formats disponibles** :     - PDF : Fichier PDF uniquement     - XML : Fichier XML uniquement     - ZIP : Archive contenant PDF + XML + pièces jointes      **Taille maximale** : 120 Mo par téléchargement      **Payload exemple** :     ```json     {       \"listeIdentifiantsFactureCPP\": [12345, 12346],       \"inclurePiecesJointes\": true,       \"formatFichier\": \"ZIP\"     }     ```      **Retour** : Le fichier est encodé en base64 dans le champ `fichierBase64`.      **Note** : Le flag `factureTelechargeeParDestinataire` est mis à jour automatiquement.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyTelechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyTelechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost: BodyTelechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost; //

const { status, data } = await apiInstance.telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(
    bodyTelechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyTelechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost** | **BodyTelechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost**
> any traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(bodyTraiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost)

Change le statut d\'une facture reçue.      **Statuts possibles** :     - MISE_A_DISPOSITION : Facture acceptée     - SUSPENDUE : En attente d\'informations complémentaires (motif obligatoire)     - REJETEE : Facture refusée (motif obligatoire)     - MANDATEE : Facture mandatée     - MISE_EN_PAIEMENT : Facture en cours de paiement     - COMPTABILISEE : Facture comptabilisée     - MISE_A_DISPOSITION_COMPTABLE : Mise à disposition comptable     - A_RECYCLER : À recycler     - COMPLETEE : Complétée     - SERVICE-FAIT : Service fait     - PRISE_EN_COMPTE_DESTINATAIRE : Prise en compte     - TRANSMISE_MOA : Transmise à la MOA      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"nouveauStatut\": \"REJETEE\",       \"motifRejet\": \"Facture en double\",       \"commentaire\": \"Facture déjà reçue sous la référence ABC123\"     }     ```      **Règles** :     - Un motif est **obligatoire** pour SUSPENDUE et REJETEE     - Seuls certains statuts sont autorisés selon le statut actuel de la facture

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyTraiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyTraiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost: BodyTraiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost; //

const { status, data } = await apiInstance.traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(
    bodyTraiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyTraiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost** | **BodyTraiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost**
> any valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(bodyValideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost)

Consulte facture (valideur).

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyValideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyValideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost: BodyValideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost; //

const { status, data } = await apiInstance.valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(
    bodyValideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyValideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost** | **BodyValideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost**
> any valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(bodyValideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost)

Recherche les factures en attente de validation par le valideur connecté.      **Rôle** : Valideur dans le circuit de validation interne.      **Filtres** : Dates, structure, service, etc.

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyValideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyValideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost: BodyValideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost; //

const { status, data } = await apiInstance.valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(
    bodyValideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyValideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost** | **BodyValideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost**
> any valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(bodyValideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost)

Valide ou refuse une facture en attente de validation.      **Actions** :     - Valider : La facture passe au statut suivant du circuit     - Refuser : La facture est rejetée (motif obligatoire)

### Example

```typescript
import {
    ChorusProApi,
    Configuration,
    BodyValideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost
} from '@factpulse/sdk';

const configuration = new Configuration();
const apiInstance = new ChorusProApi(configuration);

let bodyValideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost: BodyValideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost; //

const { status, data } = await apiInstance.valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(
    bodyValideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bodyValideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost** | **BodyValideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost**|  | |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

