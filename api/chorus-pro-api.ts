/* tslint:disable */
/* eslint-disable */
/**
 * API REST FactPulse
 *  API REST pour la facturation électronique en France : Factur-X, AFNOR PDP/PA, signatures électroniques.  ## 🎯 Fonctionnalités principales  ### 📄 Génération de factures Factur-X - **Formats** : XML seul ou PDF/A-3 avec XML embarqué - **Profils** : MINIMUM, BASIC, EN16931, EXTENDED - **Normes** : EN 16931 (directive UE 2014/55), ISO 19005-3 (PDF/A-3), CII (UN/CEFACT) - **🆕 Format simplifié** : Génération à partir de SIRET + auto-enrichissement (API Chorus Pro + Recherche Entreprises)  ### ✅ Validation et conformité - **Validation XML** : Schematron (45 à 210+ règles selon profil) - **Validation PDF** : PDF/A-3, métadonnées XMP Factur-X, signatures électroniques - **VeraPDF** : Validation stricte PDF/A (146+ règles ISO 19005-3) - **Traitement asynchrone** : Support Celery pour validations lourdes (VeraPDF)  ### 📡 Intégration AFNOR PDP/PA (XP Z12-013) - **Soumission de flux** : Envoi de factures vers Plateformes de Dématérialisation Partenaires - **Recherche de flux** : Consultation des factures soumises - **Téléchargement** : Récupération des PDF/A-3 avec XML - **Directory Service** : Recherche d\'entreprises (SIREN/SIRET) - **Multi-client** : Support de plusieurs configs PDP par utilisateur (stored credentials ou zero-storage)  ### ✍️ Signature électronique PDF - **Standards** : PAdES-B-B, PAdES-B-T (horodatage RFC 3161), PAdES-B-LT (archivage long terme) - **Niveaux eIDAS** : SES (auto-signé), AdES (CA commerciale), QES (PSCO) - **Validation** : Vérification intégrité cryptographique et certificats - **Génération de certificats** : Certificats X.509 auto-signés pour tests  ### 🔄 Traitement asynchrone - **Celery** : Génération, validation et signature asynchrones - **Polling** : Suivi d\'état via `/taches/{id_tache}/statut` - **Pas de timeout** : Idéal pour gros fichiers ou validations lourdes  ## 🔒 Authentification  Toutes les requêtes nécessitent un **token JWT** dans le header Authorization : ``` Authorization: Bearer YOUR_JWT_TOKEN ```  ### Comment obtenir un token JWT ?  #### 🔑 Méthode 1 : API `/api/token/` (Recommandée)  **URL :** `https://www.factpulse.fr/api/token/`  Cette méthode est **recommandée** pour l\'intégration dans vos applications et workflows CI/CD.  **Prérequis :** Avoir défini un mot de passe sur votre compte  **Pour les utilisateurs inscrits via email/password :** - Vous avez déjà un mot de passe, utilisez-le directement  **Pour les utilisateurs inscrits via OAuth (Google/GitHub) :** - Vous devez d\'abord définir un mot de passe sur : https://www.factpulse.fr/accounts/password/set/ - Une fois le mot de passe créé, vous pourrez utiliser l\'API  **Exemple de requête :** ```bash curl -X POST https://www.factpulse.fr/api/token/ \\   -H \"Content-Type: application/json\" \\   -d \'{     \"username\": \"votre_email@example.com\",     \"password\": \"votre_mot_de_passe\"   }\' ```  **Paramètre optionnel `client_uid` :**  Pour sélectionner les credentials d\'un client spécifique (PA/PDP, Chorus Pro, certificats de signature), ajoutez `client_uid` :  ```bash curl -X POST https://www.factpulse.fr/api/token/ \\   -H \"Content-Type: application/json\" \\   -d \'{     \"username\": \"votre_email@example.com\",     \"password\": \"votre_mot_de_passe\",     \"client_uid\": \"550e8400-e29b-41d4-a716-446655440000\"   }\' ```  Le `client_uid` sera inclus dans le JWT et permettra à l\'API d\'utiliser automatiquement : - Les credentials AFNOR/PDP configurés pour ce client - Les credentials Chorus Pro configurés pour ce client - Les certificats de signature électronique configurés pour ce client  **Réponse :** ```json {   \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGc...\",  // Token d\'accès (validité: 30 min)   \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGc...\"  // Token de rafraîchissement (validité: 7 jours) } ```  **Avantages :** - ✅ Automatisation complète (CI/CD, scripts) - ✅ Gestion programmatique des tokens - ✅ Support du refresh token pour renouveler automatiquement l\'accès - ✅ Intégration facile dans n\'importe quel langage/outil  #### 🖥️ Méthode 2 : Génération via Dashboard (Alternative)  **URL :** https://www.factpulse.fr/dashboard/  Cette méthode convient pour des tests rapides ou une utilisation occasionnelle via l\'interface graphique.  **Fonctionnement :** - Connectez-vous au dashboard - Utilisez les boutons \"Generate Test Token\" ou \"Generate Production Token\" - Fonctionne pour **tous** les utilisateurs (OAuth et email/password), sans nécessiter de mot de passe  **Types de tokens :** - **Token Test** : Validité 24h, quota 1000 appels/jour (gratuit) - **Token Production** : Validité 7 jours, quota selon votre forfait  **Avantages :** - ✅ Rapide pour tester l\'API - ✅ Aucun mot de passe requis - ✅ Interface visuelle simple  **Inconvénients :** - ❌ Nécessite une action manuelle - ❌ Pas de refresh token - ❌ Moins adapté pour l\'automatisation  ### 📚 Documentation complète  Pour plus d\'informations sur l\'authentification et l\'utilisation de l\'API : https://www.factpulse.fr/documentation-api/     
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ConsulterFactureRequest } from '../models';
// @ts-ignore
import type { ConsulterFactureResponse } from '../models';
// @ts-ignore
import type { ConsulterStructureRequest } from '../models';
// @ts-ignore
import type { ConsulterStructureResponse } from '../models';
// @ts-ignore
import type { HTTPValidationError } from '../models';
// @ts-ignore
import type { ObtenirIdChorusProRequest } from '../models';
// @ts-ignore
import type { ObtenirIdChorusProResponse } from '../models';
// @ts-ignore
import type { RechercherServicesResponse } from '../models';
// @ts-ignore
import type { RechercherStructureRequest } from '../models';
// @ts-ignore
import type { RechercherStructureResponse } from '../models';
// @ts-ignore
import type { SoumettreFactureRequest } from '../models';
// @ts-ignore
import type { SoumettreFactureResponse } from '../models';
/**
 * ChorusProApi - axios parameter creator
 */
export const ChorusProApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Ajoute une pièce jointe au compte utilisateur courant.      **Taille max** : 10 Mo par fichier      **Payload exemple** :     ```json     {       \"pieceJointeFichier\": \"JVBERi0xLjQKJeLjz9MKNSAwIG9iago8P...\",       \"pieceJointeNom\": \"bon_commande.pdf\",       \"pieceJointeTypeMime\": \"application/pdf\",       \"pieceJointeExtension\": \"PDF\"     }     ```      **Retour** : L\'ID de la pièce jointe (`pieceJointeIdFichier`) à utiliser ensuite dans `/factures/completer`.      **Extensions acceptées** : PDF, JPG, PNG, ZIP, XML, etc.
         * @summary Ajouter une pièce jointe
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ajouterFichierApiV1ChorusProTransversesAjouterFichierPost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('ajouterFichierApiV1ChorusProTransversesAjouterFichierPost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/transverses/ajouter-fichier`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Complète une facture au statut SUSPENDUE en ajoutant des pièces jointes ou un commentaire.      **Statut requis** : SUSPENDUE      **Actions possibles** :     - Ajouter des pièces jointes (justificatifs, bons de commande, etc.)     - Modifier le commentaire      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"commentaire\": \"Voici les justificatifs demandés\",       \"listePiecesJointes\": [         {           \"pieceJointeIdFichier\": 98765,           \"pieceJointeNom\": \"bon_commande.pdf\"         }       ]     }     ```      **Note** : Les pièces jointes doivent d\'abord être uploadées via `/transverses/ajouter-fichier`.      **Après complétion** : La facture repasse au statut MISE_A_DISPOSITION.
         * @summary Compléter une facture suspendue (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completerFactureApiV1ChorusProFacturesCompleterPost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('completerFactureApiV1ChorusProFacturesCompleterPost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/completer`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Récupère les informations et le statut actuel d\'une facture soumise à Chorus Pro.      **Retour** :     - Numéro et date de facture     - Montant TTC     - **Statut courant** : SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.     - Structure destinataire      **Cas d\'usage** :     - Suivre l\'évolution du traitement d\'une facture     - Vérifier si une facture a été validée ou rejetée     - Obtenir la date de mise en paiement      **Polling** : Appelez cet endpoint régulièrement pour suivre l\'évolution du statut.
         * @summary Consulter le statut d\'une facture
         * @param {ConsulterFactureRequest} consulterFactureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consulterFactureApiV1ChorusProFacturesConsulterPost: async (consulterFactureRequest: ConsulterFactureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'consulterFactureRequest' is not null or undefined
            assertParamExists('consulterFactureApiV1ChorusProFacturesConsulterPost', 'consulterFactureRequest', consulterFactureRequest)
            const localVarPath = `/api/v1/chorus-pro/factures/consulter`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(consulterFactureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Récupère les informations détaillées d\'une structure Chorus Pro.       **Retour** :     - Raison sociale     - Numéro de TVA intracommunautaire     - Email de contact     - **Paramètres obligatoires** : Indique si le code service et/ou numéro d\'engagement sont requis pour soumettre une facture      **Étape typique** : Appelée après `rechercher-structures` pour savoir quels champs sont obligatoires avant de soumettre une facture.
         * @summary Consulter les détails d\'une structure
         * @param {ConsulterStructureRequest} consulterStructureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consulterStructureApiV1ChorusProStructuresConsulterPost: async (consulterStructureRequest: ConsulterStructureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'consulterStructureRequest' is not null or undefined
            assertParamExists('consulterStructureApiV1ChorusProStructuresConsulterPost', 'consulterStructureRequest', consulterStructureRequest)
            const localVarPath = `/api/v1/chorus-pro/structures/consulter`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(consulterStructureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Récupère la liste des services actifs d\'une structure publique.      **Cas d\'usage** :     - Lister les services disponibles pour une administration     - Vérifier qu\'un code service existe avant de soumettre une facture      **Retour** :     - Liste des services avec leur code, libellé et statut (actif/inactif)
         * @summary Lister les services d\'une structure
         * @param {number} idStructureCpp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet: async (idStructureCpp: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idStructureCpp' is not null or undefined
            assertParamExists('listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet', 'idStructureCpp', idStructureCpp)
            const localVarPath = `/api/v1/chorus-pro/structures/{id_structure_cpp}/services`
                .replace(`{${"id_structure_cpp"}}`, encodeURIComponent(String(idStructureCpp)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * **Utilitaire pratique** pour obtenir l\'ID Chorus Pro d\'une structure à partir de son SIRET.       Cette fonction wrapper combine :     1. Recherche de la structure par SIRET     2. Extraction de l\'`id_structure_cpp` si une seule structure est trouvée      **Retour** :     - `id_structure_cpp` : ID Chorus Pro (0 si non trouvé ou si plusieurs résultats)     - `designation_structure` : Nom de la structure (si trouvée)     - `message` : Message explicatif      **Cas d\'usage** :     - Raccourci pour obtenir directement l\'ID Chorus Pro avant de soumettre une facture     - Alternative simplifiée à `rechercher-structures` + extraction manuelle de l\'ID      **Note** : Si plusieurs structures correspondent au SIRET (rare), retourne 0 et un message d\'erreur.
         * @summary Utilitaire : Obtenir l\'ID Chorus Pro depuis un SIRET
         * @param {ObtenirIdChorusProRequest} obtenirIdChorusProRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost: async (obtenirIdChorusProRequest: ObtenirIdChorusProRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'obtenirIdChorusProRequest' is not null or undefined
            assertParamExists('obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost', 'obtenirIdChorusProRequest', obtenirIdChorusProRequest)
            const localVarPath = `/api/v1/chorus-pro/structures/obtenir-id-depuis-siret`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(obtenirIdChorusProRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Recherche les factures reçues par le destinataire connecté.      **Filtres** :     - Téléchargée / non téléchargée     - Dates de réception     - Statut (MISE_A_DISPOSITION, SUSPENDUE, etc.)     - Fournisseur      **Indicateur utile** : `factureTelechargeeParDestinataire` permet de savoir si la facture a déjà été téléchargée.
         * @summary Rechercher factures reçues (Destinataire)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/rechercher-destinataire`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Recherche les factures émises par le fournisseur connecté.      **Filtres disponibles** :     - Numéro de facture     - Dates (début/fin)     - Statut     - Structure destinataire     - Montant      **Cas d\'usage** :     - Suivi des factures émises     - Vérification des statuts     - Export pour comptabilité
         * @summary Rechercher factures émises (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/rechercher-fournisseur`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Recherche des structures (entreprises, administrations) enregistrées sur Chorus Pro.      **Cas d\'usage** :     - Trouver l\'ID Chorus Pro d\'une structure à partir de son SIRET     - Vérifier si une structure est enregistrée sur Chorus Pro     - Lister les structures correspondant à des critères      **Filtres disponibles** :     - Identifiant (SIRET, SIREN, etc.)     - Raison sociale     - Type d\'identifiant     - Structures privées uniquement      **Étape typique** : Appelée avant `soumettre-facture` pour obtenir l\'`id_structure_cpp` du destinataire.
         * @summary Rechercher des structures Chorus Pro
         * @param {RechercherStructureRequest} rechercherStructureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rechercherStructuresApiV1ChorusProStructuresRechercherPost: async (rechercherStructureRequest: RechercherStructureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'rechercherStructureRequest' is not null or undefined
            assertParamExists('rechercherStructuresApiV1ChorusProStructuresRechercherPost', 'rechercherStructureRequest', rechercherStructureRequest)
            const localVarPath = `/api/v1/chorus-pro/structures/rechercher`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(rechercherStructureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Recycle une facture au statut A_RECYCLER en modifiant les données d\'acheminement.      **Statut requis** : A_RECYCLER      **Champs modifiables** :     - Destinataire (`idStructureCPP`)     - Code service     - Numéro d\'engagement      **Cas d\'usage** :     - Erreur de destinataire     - Changement de service facturation     - Mise à jour du numéro d\'engagement      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"idStructureCPP\": 67890,       \"codeService\": \"SERVICE_01\",       \"numeroEngagement\": \"ENG2024001\"     }     ```      **Note** : La facture conserve son numéro et ses montants, seuls les champs d\'acheminement changent.
         * @summary Recycler une facture (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recyclerFactureApiV1ChorusProFacturesRecyclerPost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('recyclerFactureApiV1ChorusProFacturesRecyclerPost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/recycler`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Soumet une facture électronique à une structure publique via Chorus Pro.       **📋 Workflow complet** :     1. **Uploader le PDF Factur-X** via `/transverses/ajouter-fichier` → récupérer `pieceJointeId`     2. **Obtenir l\'ID structure** via `/structures/rechercher` ou `/structures/obtenir-id-depuis-siret`     3. **Vérifier les paramètres obligatoires** via `/structures/consulter`     4. **Soumettre la facture** avec le `piece_jointe_principale_id` obtenu à l\'étape 1      **Pré-requis** :     1. Avoir l\'`id_structure_cpp` du destinataire (via `/structures/rechercher`)     2. Connaître les paramètres obligatoires (via `/structures/consulter`) :        - Code service si `code_service_doit_etre_renseigne=true`        - Numéro d\'engagement si `numero_ej_doit_etre_renseigne=true`     3. Avoir uploadé le PDF Factur-X (via `/transverses/ajouter-fichier`)      **Format attendu** :     - `piece_jointe_principale_id` : ID retourné par `/transverses/ajouter-fichier`     - Montants : Chaînes de caractères avec 2 décimales (ex: \"1250.50\")     - Dates : Format ISO 8601 (YYYY-MM-DD)      **Retour** :     - `identifiant_facture_cpp` : ID Chorus Pro de la facture créée     - `numero_flux_depot` : Numéro de suivi du dépôt      **Statuts possibles après soumission** :     - SOUMISE : En attente de validation     - VALIDEE : Validée par le destinataire     - REJETEE : Rejetée (erreur de données ou refus métier)     - SUSPENDUE : En attente d\'informations complémentaires      **Note** : Utilisez `/factures/consulter` pour suivre l\'évolution du statut.
         * @summary Soumettre une facture à Chorus Pro
         * @param {SoumettreFactureRequest} soumettreFactureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        soumettreFactureApiV1ChorusProFacturesSoumettrePost: async (soumettreFactureRequest: SoumettreFactureRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'soumettreFactureRequest' is not null or undefined
            assertParamExists('soumettreFactureApiV1ChorusProFacturesSoumettrePost', 'soumettreFactureRequest', soumettreFactureRequest)
            const localVarPath = `/api/v1/chorus-pro/factures/soumettre`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(soumettreFactureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Télécharge une ou plusieurs factures (max 10 recommandé) avec leurs pièces jointes.      **Formats disponibles** :     - PDF : Fichier PDF uniquement     - XML : Fichier XML uniquement     - ZIP : Archive contenant PDF + XML + pièces jointes      **Taille maximale** : 120 Mo par téléchargement      **Payload exemple** :     ```json     {       \"listeIdentifiantsFactureCPP\": [12345, 12346],       \"inclurePiecesJointes\": true,       \"formatFichier\": \"ZIP\"     }     ```      **Retour** : Le fichier est encodé en base64 dans le champ `fichierBase64`.      **Note** : Le flag `factureTelechargeeParDestinataire` est mis à jour automatiquement.
         * @summary Télécharger un groupe de factures
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/telecharger-groupe`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Change le statut d\'une facture reçue.      **Statuts possibles** :     - MISE_A_DISPOSITION : Facture acceptée     - SUSPENDUE : En attente d\'informations complémentaires (motif obligatoire)     - REJETEE : Facture refusée (motif obligatoire)     - MANDATEE : Facture mandatée     - MISE_EN_PAIEMENT : Facture en cours de paiement     - COMPTABILISEE : Facture comptabilisée     - MISE_A_DISPOSITION_COMPTABLE : Mise à disposition comptable     - A_RECYCLER : À recycler     - COMPLETEE : Complétée     - SERVICE-FAIT : Service fait     - PRISE_EN_COMPTE_DESTINATAIRE : Prise en compte     - TRANSMISE_MOA : Transmise à la MOA      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"nouveauStatut\": \"REJETEE\",       \"motifRejet\": \"Facture en double\",       \"commentaire\": \"Facture déjà reçue sous la référence ABC123\"     }     ```      **Règles** :     - Un motif est **obligatoire** pour SUSPENDUE et REJETEE     - Seuls certains statuts sont autorisés selon le statut actuel de la facture
         * @summary Traiter une facture reçue (Destinataire)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/traiter-facture-recue`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Consulter une facture (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/valideur/consulter`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Recherche les factures en attente de validation par le valideur connecté.      **Rôle** : Valideur dans le circuit de validation interne.      **Filtres** : Dates, structure, service, etc.
         * @summary Rechercher factures à valider (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/valideur/rechercher`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Valide ou refuse une facture en attente de validation.      **Actions** :     - Valider : La facture passe au statut suivant du circuit     - Refuser : La facture est rejetée (motif obligatoire)
         * @summary Valider ou refuser une facture (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost: async (requestBody: { [key: string]: any; }, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestBody' is not null or undefined
            assertParamExists('valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost', 'requestBody', requestBody)
            const localVarPath = `/api/v1/chorus-pro/factures/valideur/traiter`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication HTTPBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ChorusProApi - functional programming interface
 */
export const ChorusProApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChorusProApiAxiosParamCreator(configuration)
    return {
        /**
         * Ajoute une pièce jointe au compte utilisateur courant.      **Taille max** : 10 Mo par fichier      **Payload exemple** :     ```json     {       \"pieceJointeFichier\": \"JVBERi0xLjQKJeLjz9MKNSAwIG9iago8P...\",       \"pieceJointeNom\": \"bon_commande.pdf\",       \"pieceJointeTypeMime\": \"application/pdf\",       \"pieceJointeExtension\": \"PDF\"     }     ```      **Retour** : L\'ID de la pièce jointe (`pieceJointeIdFichier`) à utiliser ensuite dans `/factures/completer`.      **Extensions acceptées** : PDF, JPG, PNG, ZIP, XML, etc.
         * @summary Ajouter une pièce jointe
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.ajouterFichierApiV1ChorusProTransversesAjouterFichierPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Complète une facture au statut SUSPENDUE en ajoutant des pièces jointes ou un commentaire.      **Statut requis** : SUSPENDUE      **Actions possibles** :     - Ajouter des pièces jointes (justificatifs, bons de commande, etc.)     - Modifier le commentaire      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"commentaire\": \"Voici les justificatifs demandés\",       \"listePiecesJointes\": [         {           \"pieceJointeIdFichier\": 98765,           \"pieceJointeNom\": \"bon_commande.pdf\"         }       ]     }     ```      **Note** : Les pièces jointes doivent d\'abord être uploadées via `/transverses/ajouter-fichier`.      **Après complétion** : La facture repasse au statut MISE_A_DISPOSITION.
         * @summary Compléter une facture suspendue (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completerFactureApiV1ChorusProFacturesCompleterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completerFactureApiV1ChorusProFacturesCompleterPost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.completerFactureApiV1ChorusProFacturesCompleterPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Récupère les informations et le statut actuel d\'une facture soumise à Chorus Pro.      **Retour** :     - Numéro et date de facture     - Montant TTC     - **Statut courant** : SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.     - Structure destinataire      **Cas d\'usage** :     - Suivre l\'évolution du traitement d\'une facture     - Vérifier si une facture a été validée ou rejetée     - Obtenir la date de mise en paiement      **Polling** : Appelez cet endpoint régulièrement pour suivre l\'évolution du statut.
         * @summary Consulter le statut d\'une facture
         * @param {ConsulterFactureRequest} consulterFactureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async consulterFactureApiV1ChorusProFacturesConsulterPost(consulterFactureRequest: ConsulterFactureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsulterFactureResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.consulterFactureApiV1ChorusProFacturesConsulterPost(consulterFactureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.consulterFactureApiV1ChorusProFacturesConsulterPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Récupère les informations détaillées d\'une structure Chorus Pro.       **Retour** :     - Raison sociale     - Numéro de TVA intracommunautaire     - Email de contact     - **Paramètres obligatoires** : Indique si le code service et/ou numéro d\'engagement sont requis pour soumettre une facture      **Étape typique** : Appelée après `rechercher-structures` pour savoir quels champs sont obligatoires avant de soumettre une facture.
         * @summary Consulter les détails d\'une structure
         * @param {ConsulterStructureRequest} consulterStructureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async consulterStructureApiV1ChorusProStructuresConsulterPost(consulterStructureRequest: ConsulterStructureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsulterStructureResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.consulterStructureApiV1ChorusProStructuresConsulterPost(consulterStructureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.consulterStructureApiV1ChorusProStructuresConsulterPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Récupère la liste des services actifs d\'une structure publique.      **Cas d\'usage** :     - Lister les services disponibles pour une administration     - Vérifier qu\'un code service existe avant de soumettre une facture      **Retour** :     - Liste des services avec leur code, libellé et statut (actif/inactif)
         * @summary Lister les services d\'une structure
         * @param {number} idStructureCpp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(idStructureCpp: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RechercherServicesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(idStructureCpp, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * **Utilitaire pratique** pour obtenir l\'ID Chorus Pro d\'une structure à partir de son SIRET.       Cette fonction wrapper combine :     1. Recherche de la structure par SIRET     2. Extraction de l\'`id_structure_cpp` si une seule structure est trouvée      **Retour** :     - `id_structure_cpp` : ID Chorus Pro (0 si non trouvé ou si plusieurs résultats)     - `designation_structure` : Nom de la structure (si trouvée)     - `message` : Message explicatif      **Cas d\'usage** :     - Raccourci pour obtenir directement l\'ID Chorus Pro avant de soumettre une facture     - Alternative simplifiée à `rechercher-structures` + extraction manuelle de l\'ID      **Note** : Si plusieurs structures correspondent au SIRET (rare), retourne 0 et un message d\'erreur.
         * @summary Utilitaire : Obtenir l\'ID Chorus Pro depuis un SIRET
         * @param {ObtenirIdChorusProRequest} obtenirIdChorusProRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(obtenirIdChorusProRequest: ObtenirIdChorusProRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObtenirIdChorusProResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(obtenirIdChorusProRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recherche les factures reçues par le destinataire connecté.      **Filtres** :     - Téléchargée / non téléchargée     - Dates de réception     - Statut (MISE_A_DISPOSITION, SUSPENDUE, etc.)     - Fournisseur      **Indicateur utile** : `factureTelechargeeParDestinataire` permet de savoir si la facture a déjà été téléchargée.
         * @summary Rechercher factures reçues (Destinataire)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recherche les factures émises par le fournisseur connecté.      **Filtres disponibles** :     - Numéro de facture     - Dates (début/fin)     - Statut     - Structure destinataire     - Montant      **Cas d\'usage** :     - Suivi des factures émises     - Vérification des statuts     - Export pour comptabilité
         * @summary Rechercher factures émises (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recherche des structures (entreprises, administrations) enregistrées sur Chorus Pro.      **Cas d\'usage** :     - Trouver l\'ID Chorus Pro d\'une structure à partir de son SIRET     - Vérifier si une structure est enregistrée sur Chorus Pro     - Lister les structures correspondant à des critères      **Filtres disponibles** :     - Identifiant (SIRET, SIREN, etc.)     - Raison sociale     - Type d\'identifiant     - Structures privées uniquement      **Étape typique** : Appelée avant `soumettre-facture` pour obtenir l\'`id_structure_cpp` du destinataire.
         * @summary Rechercher des structures Chorus Pro
         * @param {RechercherStructureRequest} rechercherStructureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rechercherStructuresApiV1ChorusProStructuresRechercherPost(rechercherStructureRequest: RechercherStructureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RechercherStructureResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rechercherStructuresApiV1ChorusProStructuresRechercherPost(rechercherStructureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.rechercherStructuresApiV1ChorusProStructuresRechercherPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recycle une facture au statut A_RECYCLER en modifiant les données d\'acheminement.      **Statut requis** : A_RECYCLER      **Champs modifiables** :     - Destinataire (`idStructureCPP`)     - Code service     - Numéro d\'engagement      **Cas d\'usage** :     - Erreur de destinataire     - Changement de service facturation     - Mise à jour du numéro d\'engagement      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"idStructureCPP\": 67890,       \"codeService\": \"SERVICE_01\",       \"numeroEngagement\": \"ENG2024001\"     }     ```      **Note** : La facture conserve son numéro et ses montants, seuls les champs d\'acheminement changent.
         * @summary Recycler une facture (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recyclerFactureApiV1ChorusProFacturesRecyclerPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recyclerFactureApiV1ChorusProFacturesRecyclerPost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.recyclerFactureApiV1ChorusProFacturesRecyclerPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Soumet une facture électronique à une structure publique via Chorus Pro.       **📋 Workflow complet** :     1. **Uploader le PDF Factur-X** via `/transverses/ajouter-fichier` → récupérer `pieceJointeId`     2. **Obtenir l\'ID structure** via `/structures/rechercher` ou `/structures/obtenir-id-depuis-siret`     3. **Vérifier les paramètres obligatoires** via `/structures/consulter`     4. **Soumettre la facture** avec le `piece_jointe_principale_id` obtenu à l\'étape 1      **Pré-requis** :     1. Avoir l\'`id_structure_cpp` du destinataire (via `/structures/rechercher`)     2. Connaître les paramètres obligatoires (via `/structures/consulter`) :        - Code service si `code_service_doit_etre_renseigne=true`        - Numéro d\'engagement si `numero_ej_doit_etre_renseigne=true`     3. Avoir uploadé le PDF Factur-X (via `/transverses/ajouter-fichier`)      **Format attendu** :     - `piece_jointe_principale_id` : ID retourné par `/transverses/ajouter-fichier`     - Montants : Chaînes de caractères avec 2 décimales (ex: \"1250.50\")     - Dates : Format ISO 8601 (YYYY-MM-DD)      **Retour** :     - `identifiant_facture_cpp` : ID Chorus Pro de la facture créée     - `numero_flux_depot` : Numéro de suivi du dépôt      **Statuts possibles après soumission** :     - SOUMISE : En attente de validation     - VALIDEE : Validée par le destinataire     - REJETEE : Rejetée (erreur de données ou refus métier)     - SUSPENDUE : En attente d\'informations complémentaires      **Note** : Utilisez `/factures/consulter` pour suivre l\'évolution du statut.
         * @summary Soumettre une facture à Chorus Pro
         * @param {SoumettreFactureRequest} soumettreFactureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async soumettreFactureApiV1ChorusProFacturesSoumettrePost(soumettreFactureRequest: SoumettreFactureRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SoumettreFactureResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.soumettreFactureApiV1ChorusProFacturesSoumettrePost(soumettreFactureRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.soumettreFactureApiV1ChorusProFacturesSoumettrePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Télécharge une ou plusieurs factures (max 10 recommandé) avec leurs pièces jointes.      **Formats disponibles** :     - PDF : Fichier PDF uniquement     - XML : Fichier XML uniquement     - ZIP : Archive contenant PDF + XML + pièces jointes      **Taille maximale** : 120 Mo par téléchargement      **Payload exemple** :     ```json     {       \"listeIdentifiantsFactureCPP\": [12345, 12346],       \"inclurePiecesJointes\": true,       \"formatFichier\": \"ZIP\"     }     ```      **Retour** : Le fichier est encodé en base64 dans le champ `fichierBase64`.      **Note** : Le flag `factureTelechargeeParDestinataire` est mis à jour automatiquement.
         * @summary Télécharger un groupe de factures
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Change le statut d\'une facture reçue.      **Statuts possibles** :     - MISE_A_DISPOSITION : Facture acceptée     - SUSPENDUE : En attente d\'informations complémentaires (motif obligatoire)     - REJETEE : Facture refusée (motif obligatoire)     - MANDATEE : Facture mandatée     - MISE_EN_PAIEMENT : Facture en cours de paiement     - COMPTABILISEE : Facture comptabilisée     - MISE_A_DISPOSITION_COMPTABLE : Mise à disposition comptable     - A_RECYCLER : À recycler     - COMPLETEE : Complétée     - SERVICE-FAIT : Service fait     - PRISE_EN_COMPTE_DESTINATAIRE : Prise en compte     - TRANSMISE_MOA : Transmise à la MOA      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"nouveauStatut\": \"REJETEE\",       \"motifRejet\": \"Facture en double\",       \"commentaire\": \"Facture déjà reçue sous la référence ABC123\"     }     ```      **Règles** :     - Un motif est **obligatoire** pour SUSPENDUE et REJETEE     - Seuls certains statuts sont autorisés selon le statut actuel de la facture
         * @summary Traiter une facture reçue (Destinataire)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Consulter une facture (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recherche les factures en attente de validation par le valideur connecté.      **Rôle** : Valideur dans le circuit de validation interne.      **Filtres** : Dates, structure, service, etc.
         * @summary Rechercher factures à valider (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Valide ou refuse une facture en attente de validation.      **Actions** :     - Valider : La facture passe au statut suivant du circuit     - Refuser : La facture est rejetée (motif obligatoire)
         * @summary Valider ou refuser une facture (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(requestBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChorusProApi.valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ChorusProApi - factory interface
 */
export const ChorusProApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChorusProApiFp(configuration)
    return {
        /**
         * Ajoute une pièce jointe au compte utilisateur courant.      **Taille max** : 10 Mo par fichier      **Payload exemple** :     ```json     {       \"pieceJointeFichier\": \"JVBERi0xLjQKJeLjz9MKNSAwIG9iago8P...\",       \"pieceJointeNom\": \"bon_commande.pdf\",       \"pieceJointeTypeMime\": \"application/pdf\",       \"pieceJointeExtension\": \"PDF\"     }     ```      **Retour** : L\'ID de la pièce jointe (`pieceJointeIdFichier`) à utiliser ensuite dans `/factures/completer`.      **Extensions acceptées** : PDF, JPG, PNG, ZIP, XML, etc.
         * @summary Ajouter une pièce jointe
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Complète une facture au statut SUSPENDUE en ajoutant des pièces jointes ou un commentaire.      **Statut requis** : SUSPENDUE      **Actions possibles** :     - Ajouter des pièces jointes (justificatifs, bons de commande, etc.)     - Modifier le commentaire      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"commentaire\": \"Voici les justificatifs demandés\",       \"listePiecesJointes\": [         {           \"pieceJointeIdFichier\": 98765,           \"pieceJointeNom\": \"bon_commande.pdf\"         }       ]     }     ```      **Note** : Les pièces jointes doivent d\'abord être uploadées via `/transverses/ajouter-fichier`.      **Après complétion** : La facture repasse au statut MISE_A_DISPOSITION.
         * @summary Compléter une facture suspendue (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completerFactureApiV1ChorusProFacturesCompleterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.completerFactureApiV1ChorusProFacturesCompleterPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Récupère les informations et le statut actuel d\'une facture soumise à Chorus Pro.      **Retour** :     - Numéro et date de facture     - Montant TTC     - **Statut courant** : SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.     - Structure destinataire      **Cas d\'usage** :     - Suivre l\'évolution du traitement d\'une facture     - Vérifier si une facture a été validée ou rejetée     - Obtenir la date de mise en paiement      **Polling** : Appelez cet endpoint régulièrement pour suivre l\'évolution du statut.
         * @summary Consulter le statut d\'une facture
         * @param {ConsulterFactureRequest} consulterFactureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consulterFactureApiV1ChorusProFacturesConsulterPost(consulterFactureRequest: ConsulterFactureRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConsulterFactureResponse> {
            return localVarFp.consulterFactureApiV1ChorusProFacturesConsulterPost(consulterFactureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Récupère les informations détaillées d\'une structure Chorus Pro.       **Retour** :     - Raison sociale     - Numéro de TVA intracommunautaire     - Email de contact     - **Paramètres obligatoires** : Indique si le code service et/ou numéro d\'engagement sont requis pour soumettre une facture      **Étape typique** : Appelée après `rechercher-structures` pour savoir quels champs sont obligatoires avant de soumettre une facture.
         * @summary Consulter les détails d\'une structure
         * @param {ConsulterStructureRequest} consulterStructureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        consulterStructureApiV1ChorusProStructuresConsulterPost(consulterStructureRequest: ConsulterStructureRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConsulterStructureResponse> {
            return localVarFp.consulterStructureApiV1ChorusProStructuresConsulterPost(consulterStructureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Récupère la liste des services actifs d\'une structure publique.      **Cas d\'usage** :     - Lister les services disponibles pour une administration     - Vérifier qu\'un code service existe avant de soumettre une facture      **Retour** :     - Liste des services avec leur code, libellé et statut (actif/inactif)
         * @summary Lister les services d\'une structure
         * @param {number} idStructureCpp 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(idStructureCpp: number, options?: RawAxiosRequestConfig): AxiosPromise<RechercherServicesResponse> {
            return localVarFp.listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(idStructureCpp, options).then((request) => request(axios, basePath));
        },
        /**
         * **Utilitaire pratique** pour obtenir l\'ID Chorus Pro d\'une structure à partir de son SIRET.       Cette fonction wrapper combine :     1. Recherche de la structure par SIRET     2. Extraction de l\'`id_structure_cpp` si une seule structure est trouvée      **Retour** :     - `id_structure_cpp` : ID Chorus Pro (0 si non trouvé ou si plusieurs résultats)     - `designation_structure` : Nom de la structure (si trouvée)     - `message` : Message explicatif      **Cas d\'usage** :     - Raccourci pour obtenir directement l\'ID Chorus Pro avant de soumettre une facture     - Alternative simplifiée à `rechercher-structures` + extraction manuelle de l\'ID      **Note** : Si plusieurs structures correspondent au SIRET (rare), retourne 0 et un message d\'erreur.
         * @summary Utilitaire : Obtenir l\'ID Chorus Pro depuis un SIRET
         * @param {ObtenirIdChorusProRequest} obtenirIdChorusProRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(obtenirIdChorusProRequest: ObtenirIdChorusProRequest, options?: RawAxiosRequestConfig): AxiosPromise<ObtenirIdChorusProResponse> {
            return localVarFp.obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(obtenirIdChorusProRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Recherche les factures reçues par le destinataire connecté.      **Filtres** :     - Téléchargée / non téléchargée     - Dates de réception     - Statut (MISE_A_DISPOSITION, SUSPENDUE, etc.)     - Fournisseur      **Indicateur utile** : `factureTelechargeeParDestinataire` permet de savoir si la facture a déjà été téléchargée.
         * @summary Rechercher factures reçues (Destinataire)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Recherche les factures émises par le fournisseur connecté.      **Filtres disponibles** :     - Numéro de facture     - Dates (début/fin)     - Statut     - Structure destinataire     - Montant      **Cas d\'usage** :     - Suivi des factures émises     - Vérification des statuts     - Export pour comptabilité
         * @summary Rechercher factures émises (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Recherche des structures (entreprises, administrations) enregistrées sur Chorus Pro.      **Cas d\'usage** :     - Trouver l\'ID Chorus Pro d\'une structure à partir de son SIRET     - Vérifier si une structure est enregistrée sur Chorus Pro     - Lister les structures correspondant à des critères      **Filtres disponibles** :     - Identifiant (SIRET, SIREN, etc.)     - Raison sociale     - Type d\'identifiant     - Structures privées uniquement      **Étape typique** : Appelée avant `soumettre-facture` pour obtenir l\'`id_structure_cpp` du destinataire.
         * @summary Rechercher des structures Chorus Pro
         * @param {RechercherStructureRequest} rechercherStructureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rechercherStructuresApiV1ChorusProStructuresRechercherPost(rechercherStructureRequest: RechercherStructureRequest, options?: RawAxiosRequestConfig): AxiosPromise<RechercherStructureResponse> {
            return localVarFp.rechercherStructuresApiV1ChorusProStructuresRechercherPost(rechercherStructureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Recycle une facture au statut A_RECYCLER en modifiant les données d\'acheminement.      **Statut requis** : A_RECYCLER      **Champs modifiables** :     - Destinataire (`idStructureCPP`)     - Code service     - Numéro d\'engagement      **Cas d\'usage** :     - Erreur de destinataire     - Changement de service facturation     - Mise à jour du numéro d\'engagement      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"idStructureCPP\": 67890,       \"codeService\": \"SERVICE_01\",       \"numeroEngagement\": \"ENG2024001\"     }     ```      **Note** : La facture conserve son numéro et ses montants, seuls les champs d\'acheminement changent.
         * @summary Recycler une facture (Fournisseur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recyclerFactureApiV1ChorusProFacturesRecyclerPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.recyclerFactureApiV1ChorusProFacturesRecyclerPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Soumet une facture électronique à une structure publique via Chorus Pro.       **📋 Workflow complet** :     1. **Uploader le PDF Factur-X** via `/transverses/ajouter-fichier` → récupérer `pieceJointeId`     2. **Obtenir l\'ID structure** via `/structures/rechercher` ou `/structures/obtenir-id-depuis-siret`     3. **Vérifier les paramètres obligatoires** via `/structures/consulter`     4. **Soumettre la facture** avec le `piece_jointe_principale_id` obtenu à l\'étape 1      **Pré-requis** :     1. Avoir l\'`id_structure_cpp` du destinataire (via `/structures/rechercher`)     2. Connaître les paramètres obligatoires (via `/structures/consulter`) :        - Code service si `code_service_doit_etre_renseigne=true`        - Numéro d\'engagement si `numero_ej_doit_etre_renseigne=true`     3. Avoir uploadé le PDF Factur-X (via `/transverses/ajouter-fichier`)      **Format attendu** :     - `piece_jointe_principale_id` : ID retourné par `/transverses/ajouter-fichier`     - Montants : Chaînes de caractères avec 2 décimales (ex: \"1250.50\")     - Dates : Format ISO 8601 (YYYY-MM-DD)      **Retour** :     - `identifiant_facture_cpp` : ID Chorus Pro de la facture créée     - `numero_flux_depot` : Numéro de suivi du dépôt      **Statuts possibles après soumission** :     - SOUMISE : En attente de validation     - VALIDEE : Validée par le destinataire     - REJETEE : Rejetée (erreur de données ou refus métier)     - SUSPENDUE : En attente d\'informations complémentaires      **Note** : Utilisez `/factures/consulter` pour suivre l\'évolution du statut.
         * @summary Soumettre une facture à Chorus Pro
         * @param {SoumettreFactureRequest} soumettreFactureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        soumettreFactureApiV1ChorusProFacturesSoumettrePost(soumettreFactureRequest: SoumettreFactureRequest, options?: RawAxiosRequestConfig): AxiosPromise<SoumettreFactureResponse> {
            return localVarFp.soumettreFactureApiV1ChorusProFacturesSoumettrePost(soumettreFactureRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Télécharge une ou plusieurs factures (max 10 recommandé) avec leurs pièces jointes.      **Formats disponibles** :     - PDF : Fichier PDF uniquement     - XML : Fichier XML uniquement     - ZIP : Archive contenant PDF + XML + pièces jointes      **Taille maximale** : 120 Mo par téléchargement      **Payload exemple** :     ```json     {       \"listeIdentifiantsFactureCPP\": [12345, 12346],       \"inclurePiecesJointes\": true,       \"formatFichier\": \"ZIP\"     }     ```      **Retour** : Le fichier est encodé en base64 dans le champ `fichierBase64`.      **Note** : Le flag `factureTelechargeeParDestinataire` est mis à jour automatiquement.
         * @summary Télécharger un groupe de factures
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Change le statut d\'une facture reçue.      **Statuts possibles** :     - MISE_A_DISPOSITION : Facture acceptée     - SUSPENDUE : En attente d\'informations complémentaires (motif obligatoire)     - REJETEE : Facture refusée (motif obligatoire)     - MANDATEE : Facture mandatée     - MISE_EN_PAIEMENT : Facture en cours de paiement     - COMPTABILISEE : Facture comptabilisée     - MISE_A_DISPOSITION_COMPTABLE : Mise à disposition comptable     - A_RECYCLER : À recycler     - COMPLETEE : Complétée     - SERVICE-FAIT : Service fait     - PRISE_EN_COMPTE_DESTINATAIRE : Prise en compte     - TRANSMISE_MOA : Transmise à la MOA      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"nouveauStatut\": \"REJETEE\",       \"motifRejet\": \"Facture en double\",       \"commentaire\": \"Facture déjà reçue sous la référence ABC123\"     }     ```      **Règles** :     - Un motif est **obligatoire** pour SUSPENDUE et REJETEE     - Seuls certains statuts sont autorisés selon le statut actuel de la facture
         * @summary Traiter une facture reçue (Destinataire)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Consulter une facture (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Recherche les factures en attente de validation par le valideur connecté.      **Rôle** : Valideur dans le circuit de validation interne.      **Filtres** : Dates, structure, service, etc.
         * @summary Rechercher factures à valider (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(requestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Valide ou refuse une facture en attente de validation.      **Actions** :     - Valider : La facture passe au statut suivant du circuit     - Refuser : La facture est rejetée (motif obligatoire)
         * @summary Valider ou refuser une facture (Valideur)
         * @param {{ [key: string]: any; }} requestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(requestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ChorusProApi - object-oriented interface
 */
export class ChorusProApi extends BaseAPI {
    /**
     * Ajoute une pièce jointe au compte utilisateur courant.      **Taille max** : 10 Mo par fichier      **Payload exemple** :     ```json     {       \"pieceJointeFichier\": \"JVBERi0xLjQKJeLjz9MKNSAwIG9iago8P...\",       \"pieceJointeNom\": \"bon_commande.pdf\",       \"pieceJointeTypeMime\": \"application/pdf\",       \"pieceJointeExtension\": \"PDF\"     }     ```      **Retour** : L\'ID de la pièce jointe (`pieceJointeIdFichier`) à utiliser ensuite dans `/factures/completer`.      **Extensions acceptées** : PDF, JPG, PNG, ZIP, XML, etc.
     * @summary Ajouter une pièce jointe
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).ajouterFichierApiV1ChorusProTransversesAjouterFichierPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Complète une facture au statut SUSPENDUE en ajoutant des pièces jointes ou un commentaire.      **Statut requis** : SUSPENDUE      **Actions possibles** :     - Ajouter des pièces jointes (justificatifs, bons de commande, etc.)     - Modifier le commentaire      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"commentaire\": \"Voici les justificatifs demandés\",       \"listePiecesJointes\": [         {           \"pieceJointeIdFichier\": 98765,           \"pieceJointeNom\": \"bon_commande.pdf\"         }       ]     }     ```      **Note** : Les pièces jointes doivent d\'abord être uploadées via `/transverses/ajouter-fichier`.      **Après complétion** : La facture repasse au statut MISE_A_DISPOSITION.
     * @summary Compléter une facture suspendue (Fournisseur)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public completerFactureApiV1ChorusProFacturesCompleterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).completerFactureApiV1ChorusProFacturesCompleterPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Récupère les informations et le statut actuel d\'une facture soumise à Chorus Pro.      **Retour** :     - Numéro et date de facture     - Montant TTC     - **Statut courant** : SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.     - Structure destinataire      **Cas d\'usage** :     - Suivre l\'évolution du traitement d\'une facture     - Vérifier si une facture a été validée ou rejetée     - Obtenir la date de mise en paiement      **Polling** : Appelez cet endpoint régulièrement pour suivre l\'évolution du statut.
     * @summary Consulter le statut d\'une facture
     * @param {ConsulterFactureRequest} consulterFactureRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public consulterFactureApiV1ChorusProFacturesConsulterPost(consulterFactureRequest: ConsulterFactureRequest, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).consulterFactureApiV1ChorusProFacturesConsulterPost(consulterFactureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Récupère les informations détaillées d\'une structure Chorus Pro.       **Retour** :     - Raison sociale     - Numéro de TVA intracommunautaire     - Email de contact     - **Paramètres obligatoires** : Indique si le code service et/ou numéro d\'engagement sont requis pour soumettre une facture      **Étape typique** : Appelée après `rechercher-structures` pour savoir quels champs sont obligatoires avant de soumettre une facture.
     * @summary Consulter les détails d\'une structure
     * @param {ConsulterStructureRequest} consulterStructureRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public consulterStructureApiV1ChorusProStructuresConsulterPost(consulterStructureRequest: ConsulterStructureRequest, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).consulterStructureApiV1ChorusProStructuresConsulterPost(consulterStructureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Récupère la liste des services actifs d\'une structure publique.      **Cas d\'usage** :     - Lister les services disponibles pour une administration     - Vérifier qu\'un code service existe avant de soumettre une facture      **Retour** :     - Liste des services avec leur code, libellé et statut (actif/inactif)
     * @summary Lister les services d\'une structure
     * @param {number} idStructureCpp 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(idStructureCpp: number, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).listerServicesStructureApiV1ChorusProStructuresIdStructureCppServicesGet(idStructureCpp, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * **Utilitaire pratique** pour obtenir l\'ID Chorus Pro d\'une structure à partir de son SIRET.       Cette fonction wrapper combine :     1. Recherche de la structure par SIRET     2. Extraction de l\'`id_structure_cpp` si une seule structure est trouvée      **Retour** :     - `id_structure_cpp` : ID Chorus Pro (0 si non trouvé ou si plusieurs résultats)     - `designation_structure` : Nom de la structure (si trouvée)     - `message` : Message explicatif      **Cas d\'usage** :     - Raccourci pour obtenir directement l\'ID Chorus Pro avant de soumettre une facture     - Alternative simplifiée à `rechercher-structures` + extraction manuelle de l\'ID      **Note** : Si plusieurs structures correspondent au SIRET (rare), retourne 0 et un message d\'erreur.
     * @summary Utilitaire : Obtenir l\'ID Chorus Pro depuis un SIRET
     * @param {ObtenirIdChorusProRequest} obtenirIdChorusProRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(obtenirIdChorusProRequest: ObtenirIdChorusProRequest, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).obtenirIdChorusProDepuisSiretApiV1ChorusProStructuresObtenirIdDepuisSiretPost(obtenirIdChorusProRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recherche les factures reçues par le destinataire connecté.      **Filtres** :     - Téléchargée / non téléchargée     - Dates de réception     - Statut (MISE_A_DISPOSITION, SUSPENDUE, etc.)     - Fournisseur      **Indicateur utile** : `factureTelechargeeParDestinataire` permet de savoir si la facture a déjà été téléchargée.
     * @summary Rechercher factures reçues (Destinataire)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).rechercherFacturesDestinataireApiV1ChorusProFacturesRechercherDestinatairePost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recherche les factures émises par le fournisseur connecté.      **Filtres disponibles** :     - Numéro de facture     - Dates (début/fin)     - Statut     - Structure destinataire     - Montant      **Cas d\'usage** :     - Suivi des factures émises     - Vérification des statuts     - Export pour comptabilité
     * @summary Rechercher factures émises (Fournisseur)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).rechercherFacturesFournisseurApiV1ChorusProFacturesRechercherFournisseurPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recherche des structures (entreprises, administrations) enregistrées sur Chorus Pro.      **Cas d\'usage** :     - Trouver l\'ID Chorus Pro d\'une structure à partir de son SIRET     - Vérifier si une structure est enregistrée sur Chorus Pro     - Lister les structures correspondant à des critères      **Filtres disponibles** :     - Identifiant (SIRET, SIREN, etc.)     - Raison sociale     - Type d\'identifiant     - Structures privées uniquement      **Étape typique** : Appelée avant `soumettre-facture` pour obtenir l\'`id_structure_cpp` du destinataire.
     * @summary Rechercher des structures Chorus Pro
     * @param {RechercherStructureRequest} rechercherStructureRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rechercherStructuresApiV1ChorusProStructuresRechercherPost(rechercherStructureRequest: RechercherStructureRequest, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).rechercherStructuresApiV1ChorusProStructuresRechercherPost(rechercherStructureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recycle une facture au statut A_RECYCLER en modifiant les données d\'acheminement.      **Statut requis** : A_RECYCLER      **Champs modifiables** :     - Destinataire (`idStructureCPP`)     - Code service     - Numéro d\'engagement      **Cas d\'usage** :     - Erreur de destinataire     - Changement de service facturation     - Mise à jour du numéro d\'engagement      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"idStructureCPP\": 67890,       \"codeService\": \"SERVICE_01\",       \"numeroEngagement\": \"ENG2024001\"     }     ```      **Note** : La facture conserve son numéro et ses montants, seuls les champs d\'acheminement changent.
     * @summary Recycler une facture (Fournisseur)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public recyclerFactureApiV1ChorusProFacturesRecyclerPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).recyclerFactureApiV1ChorusProFacturesRecyclerPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Soumet une facture électronique à une structure publique via Chorus Pro.       **📋 Workflow complet** :     1. **Uploader le PDF Factur-X** via `/transverses/ajouter-fichier` → récupérer `pieceJointeId`     2. **Obtenir l\'ID structure** via `/structures/rechercher` ou `/structures/obtenir-id-depuis-siret`     3. **Vérifier les paramètres obligatoires** via `/structures/consulter`     4. **Soumettre la facture** avec le `piece_jointe_principale_id` obtenu à l\'étape 1      **Pré-requis** :     1. Avoir l\'`id_structure_cpp` du destinataire (via `/structures/rechercher`)     2. Connaître les paramètres obligatoires (via `/structures/consulter`) :        - Code service si `code_service_doit_etre_renseigne=true`        - Numéro d\'engagement si `numero_ej_doit_etre_renseigne=true`     3. Avoir uploadé le PDF Factur-X (via `/transverses/ajouter-fichier`)      **Format attendu** :     - `piece_jointe_principale_id` : ID retourné par `/transverses/ajouter-fichier`     - Montants : Chaînes de caractères avec 2 décimales (ex: \"1250.50\")     - Dates : Format ISO 8601 (YYYY-MM-DD)      **Retour** :     - `identifiant_facture_cpp` : ID Chorus Pro de la facture créée     - `numero_flux_depot` : Numéro de suivi du dépôt      **Statuts possibles après soumission** :     - SOUMISE : En attente de validation     - VALIDEE : Validée par le destinataire     - REJETEE : Rejetée (erreur de données ou refus métier)     - SUSPENDUE : En attente d\'informations complémentaires      **Note** : Utilisez `/factures/consulter` pour suivre l\'évolution du statut.
     * @summary Soumettre une facture à Chorus Pro
     * @param {SoumettreFactureRequest} soumettreFactureRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public soumettreFactureApiV1ChorusProFacturesSoumettrePost(soumettreFactureRequest: SoumettreFactureRequest, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).soumettreFactureApiV1ChorusProFacturesSoumettrePost(soumettreFactureRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Télécharge une ou plusieurs factures (max 10 recommandé) avec leurs pièces jointes.      **Formats disponibles** :     - PDF : Fichier PDF uniquement     - XML : Fichier XML uniquement     - ZIP : Archive contenant PDF + XML + pièces jointes      **Taille maximale** : 120 Mo par téléchargement      **Payload exemple** :     ```json     {       \"listeIdentifiantsFactureCPP\": [12345, 12346],       \"inclurePiecesJointes\": true,       \"formatFichier\": \"ZIP\"     }     ```      **Retour** : Le fichier est encodé en base64 dans le champ `fichierBase64`.      **Note** : Le flag `factureTelechargeeParDestinataire` est mis à jour automatiquement.
     * @summary Télécharger un groupe de factures
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).telechargerGroupeFacturesApiV1ChorusProFacturesTelechargerGroupePost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Change le statut d\'une facture reçue.      **Statuts possibles** :     - MISE_A_DISPOSITION : Facture acceptée     - SUSPENDUE : En attente d\'informations complémentaires (motif obligatoire)     - REJETEE : Facture refusée (motif obligatoire)     - MANDATEE : Facture mandatée     - MISE_EN_PAIEMENT : Facture en cours de paiement     - COMPTABILISEE : Facture comptabilisée     - MISE_A_DISPOSITION_COMPTABLE : Mise à disposition comptable     - A_RECYCLER : À recycler     - COMPLETEE : Complétée     - SERVICE-FAIT : Service fait     - PRISE_EN_COMPTE_DESTINATAIRE : Prise en compte     - TRANSMISE_MOA : Transmise à la MOA      **Payload exemple** :     ```json     {       \"identifiantFactureCPP\": 12345,       \"nouveauStatut\": \"REJETEE\",       \"motifRejet\": \"Facture en double\",       \"commentaire\": \"Facture déjà reçue sous la référence ABC123\"     }     ```      **Règles** :     - Un motif est **obligatoire** pour SUSPENDUE et REJETEE     - Seuls certains statuts sont autorisés selon le statut actuel de la facture
     * @summary Traiter une facture reçue (Destinataire)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).traiterFactureRecueApiV1ChorusProFacturesTraiterFactureRecuePost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Consulter une facture (Valideur)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).valideurConsulterFactureApiV1ChorusProFacturesValideurConsulterPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recherche les factures en attente de validation par le valideur connecté.      **Rôle** : Valideur dans le circuit de validation interne.      **Filtres** : Dates, structure, service, etc.
     * @summary Rechercher factures à valider (Valideur)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).valideurRechercherFacturesApiV1ChorusProFacturesValideurRechercherPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Valide ou refuse une facture en attente de validation.      **Actions** :     - Valider : La facture passe au statut suivant du circuit     - Refuser : La facture est rejetée (motif obligatoire)
     * @summary Valider ou refuser une facture (Valideur)
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(requestBody: { [key: string]: any; }, options?: RawAxiosRequestConfig) {
        return ChorusProApiFp(this.configuration).valideurTraiterFactureApiV1ChorusProFacturesValideurTraiterPost(requestBody, options).then((request) => request(this.axios, this.basePath));
    }
}

