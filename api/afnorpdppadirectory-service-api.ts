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
import type { HTTPValidationError } from '../models';
/**
 * AFNORPDPPADirectoryServiceApi - axios parameter creator
 */
export const AFNORPDPPADirectoryServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Créer une ligne dans l\'annuaire
         * @summary Creating a directory line
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/afnor/directory/v1/directory-line`;
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
         * Créer un code de routage dans l\'annuaire
         * @summary Create a routing code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/afnor/directory/v1/routing-code`;
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
         * Supprimer une ligne d\'annuaire
         * @summary Delete a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/directory-line/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Vérifier la disponibilité du Directory Service
         * @summary Healthcheck Directory Service
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/afnor/directory/v1/healthcheck`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * Obtenir une ligne d\'annuaire identifiée par un identifiant d\'adressage
         * @summary Get a directory line
         * @param {string} addressingIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet: async (addressingIdentifier: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addressingIdentifier' is not null or undefined
            assertParamExists('getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet', 'addressingIdentifier', addressingIdentifier)
            const localVarPath = `/api/v1/afnor/directory/v1/directory-line/code:{addressing_identifier}`
                .replace(`{${"addressing_identifier"}}`, encodeURIComponent(String(addressingIdentifier)));
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
         * Obtenir une ligne d\'annuaire identifiée par son idInstance
         * @summary Get a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/directory-line/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
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
         * Obtenir un code de routage identifié par son idInstance
         * @summary Get a routing code by instance-id
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/routing-code/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
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
         * Consulter un code de routage identifié par SIRET et identifiant de routage
         * @summary Get a routing code by SIRET and routing identifier
         * @param {string} siret 
         * @param {string} routingIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet: async (siret: string, routingIdentifier: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'siret' is not null or undefined
            assertParamExists('getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet', 'siret', siret)
            // verify required parameter 'routingIdentifier' is not null or undefined
            assertParamExists('getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet', 'routingIdentifier', routingIdentifier)
            const localVarPath = `/api/v1/afnor/directory/v1/routing-code/siret:{siret}/code:{routing_identifier}`
                .replace(`{${"siret"}}`, encodeURIComponent(String(siret)))
                .replace(`{${"routing_identifier"}}`, encodeURIComponent(String(routingIdentifier)));
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
         * Retourne les détails d\'une entreprise (unité légale) identifiée par son numéro SIREN
         * @summary Consult a siren (legal unit) by SIREN number
         * @param {string} siren 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet: async (siren: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'siren' is not null or undefined
            assertParamExists('getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet', 'siren', siren)
            const localVarPath = `/api/v1/afnor/directory/v1/siren/code-insee:{siren}`
                .replace(`{${"siren"}}`, encodeURIComponent(String(siren)));
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
         * Obtenir une entreprise (unité légale) identifiée par son idInstance
         * @summary Gets a siren (legal unit) by instance ID
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/siren/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
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
         * Obtenir un établissement identifié par son numéro SIRET
         * @summary Gets a siret (facility) by SIRET number
         * @param {string} siret 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet: async (siret: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'siret' is not null or undefined
            assertParamExists('getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet', 'siret', siret)
            const localVarPath = `/api/v1/afnor/directory/v1/siret/code-insee:{siret}`
                .replace(`{${"siret"}}`, encodeURIComponent(String(siret)));
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
         * Obtenir un établissement identifié par son idInstance
         * @summary Gets a siret (facility) by id-instance
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/siret/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
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
         * Mettre à jour partiellement une ligne d\'annuaire
         * @summary Partially updates a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/directory-line/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
         * Mettre à jour partiellement un code de routage privé
         * @summary Partially update a private routing code
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/routing-code/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
         * Mettre à jour complètement un code de routage privé
         * @summary Completely update a private routing code
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut: async (idInstance: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idInstance' is not null or undefined
            assertParamExists('putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut', 'idInstance', idInstance)
            const localVarPath = `/api/v1/afnor/directory/v1/routing-code/id-instance:{id_instance}`
                .replace(`{${"id_instance"}}`, encodeURIComponent(String(idInstance)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
         * Rechercher des lignes d\'annuaire selon des critères
         * @summary Search for a directory line
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/afnor/directory/v1/directory-line/search`;
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
         * Rechercher des codes de routage selon des critères
         * @summary Search for a routing code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/afnor/directory/v1/routing-code/search`;
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
         * Recherche multi-critères d\'entreprises (unités légales)
         * @summary SIREN search (or legal unit)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/afnor/directory/v1/siren/search`;
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
         * Recherche multi-critères d\'établissements
         * @summary Search for a SIRET (facility)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/afnor/directory/v1/siret/search`;
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

            localVarHeaderParameter['Accept'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AFNORPDPPADirectoryServiceApi - functional programming interface
 */
export const AFNORPDPPADirectoryServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AFNORPDPPADirectoryServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * Créer une ligne dans l\'annuaire
         * @summary Creating a directory line
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Créer un code de routage dans l\'annuaire
         * @summary Create a routing code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Supprimer une ligne d\'annuaire
         * @summary Delete a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Vérifier la disponibilité du Directory Service
         * @summary Healthcheck Directory Service
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Obtenir une ligne d\'annuaire identifiée par un identifiant d\'adressage
         * @summary Get a directory line
         * @param {string} addressingIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(addressingIdentifier: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(addressingIdentifier, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Obtenir une ligne d\'annuaire identifiée par son idInstance
         * @summary Get a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Obtenir un code de routage identifié par son idInstance
         * @summary Get a routing code by instance-id
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Consulter un code de routage identifié par SIRET et identifiant de routage
         * @summary Get a routing code by SIRET and routing identifier
         * @param {string} siret 
         * @param {string} routingIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(siret: string, routingIdentifier: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(siret, routingIdentifier, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retourne les détails d\'une entreprise (unité légale) identifiée par son numéro SIREN
         * @summary Consult a siren (legal unit) by SIREN number
         * @param {string} siren 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(siren: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(siren, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Obtenir une entreprise (unité légale) identifiée par son idInstance
         * @summary Gets a siren (legal unit) by instance ID
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Obtenir un établissement identifié par son numéro SIRET
         * @summary Gets a siret (facility) by SIRET number
         * @param {string} siret 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(siret: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(siret, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Obtenir un établissement identifié par son idInstance
         * @summary Gets a siret (facility) by id-instance
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mettre à jour partiellement une ligne d\'annuaire
         * @summary Partially updates a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mettre à jour partiellement un code de routage privé
         * @summary Partially update a private routing code
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Mettre à jour complètement un code de routage privé
         * @summary Completely update a private routing code
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(idInstance: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(idInstance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Rechercher des lignes d\'annuaire selon des critères
         * @summary Search for a directory line
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Rechercher des codes de routage selon des critères
         * @summary Search for a routing code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recherche multi-critères d\'entreprises (unités légales)
         * @summary SIREN search (or legal unit)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Recherche multi-critères d\'établissements
         * @summary Search for a SIRET (facility)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AFNORPDPPADirectoryServiceApi.searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AFNORPDPPADirectoryServiceApi - factory interface
 */
export const AFNORPDPPADirectoryServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AFNORPDPPADirectoryServiceApiFp(configuration)
    return {
        /**
         * Créer une ligne dans l\'annuaire
         * @summary Creating a directory line
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(options).then((request) => request(axios, basePath));
        },
        /**
         * Créer un code de routage dans l\'annuaire
         * @summary Create a routing code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(options).then((request) => request(axios, basePath));
        },
        /**
         * Supprimer une ligne d\'annuaire
         * @summary Delete a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Vérifier la disponibilité du Directory Service
         * @summary Healthcheck Directory Service
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet(options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Obtenir une ligne d\'annuaire identifiée par un identifiant d\'adressage
         * @summary Get a directory line
         * @param {string} addressingIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(addressingIdentifier: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(addressingIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Obtenir une ligne d\'annuaire identifiée par son idInstance
         * @summary Get a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Obtenir un code de routage identifié par son idInstance
         * @summary Get a routing code by instance-id
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Consulter un code de routage identifié par SIRET et identifiant de routage
         * @summary Get a routing code by SIRET and routing identifier
         * @param {string} siret 
         * @param {string} routingIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(siret: string, routingIdentifier: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(siret, routingIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Retourne les détails d\'une entreprise (unité légale) identifiée par son numéro SIREN
         * @summary Consult a siren (legal unit) by SIREN number
         * @param {string} siren 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(siren: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(siren, options).then((request) => request(axios, basePath));
        },
        /**
         * Obtenir une entreprise (unité légale) identifiée par son idInstance
         * @summary Gets a siren (legal unit) by instance ID
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Obtenir un établissement identifié par son numéro SIRET
         * @summary Gets a siret (facility) by SIRET number
         * @param {string} siret 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(siret: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(siret, options).then((request) => request(axios, basePath));
        },
        /**
         * Obtenir un établissement identifié par son idInstance
         * @summary Gets a siret (facility) by id-instance
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Mettre à jour partiellement une ligne d\'annuaire
         * @summary Partially updates a directory line
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Mettre à jour partiellement un code de routage privé
         * @summary Partially update a private routing code
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Mettre à jour complètement un code de routage privé
         * @summary Completely update a private routing code
         * @param {string} idInstance 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(idInstance: string, options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(idInstance, options).then((request) => request(axios, basePath));
        },
        /**
         * Rechercher des lignes d\'annuaire selon des critères
         * @summary Search for a directory line
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(options).then((request) => request(axios, basePath));
        },
        /**
         * Rechercher des codes de routage selon des critères
         * @summary Search for a routing code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(options).then((request) => request(axios, basePath));
        },
        /**
         * Recherche multi-critères d\'entreprises (unités légales)
         * @summary SIREN search (or legal unit)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(options).then((request) => request(axios, basePath));
        },
        /**
         * Recherche multi-critères d\'établissements
         * @summary Search for a SIRET (facility)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(options?: RawAxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AFNORPDPPADirectoryServiceApi - object-oriented interface
 */
export class AFNORPDPPADirectoryServiceApi extends BaseAPI {
    /**
     * Créer une ligne dans l\'annuaire
     * @summary Creating a directory line
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).createDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLinePost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Créer un code de routage dans l\'annuaire
     * @summary Create a routing code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).createRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodePost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Supprimer une ligne d\'annuaire
     * @summary Delete a directory line
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).deleteDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceDelete(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Vérifier la disponibilité du Directory Service
     * @summary Healthcheck Directory Service
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet(options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).directoryHealthcheckProxyApiV1AfnorDirectoryV1HealthcheckGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtenir une ligne d\'annuaire identifiée par un identifiant d\'adressage
     * @summary Get a directory line
     * @param {string} addressingIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(addressingIdentifier: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getDirectoryLineByCodeProxyApiV1AfnorDirectoryV1DirectoryLineCodeAddressingIdentifierGet(addressingIdentifier, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtenir une ligne d\'annuaire identifiée par son idInstance
     * @summary Get a directory line
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getDirectoryLineByIdInstanceProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstanceGet(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtenir un code de routage identifié par son idInstance
     * @summary Get a routing code by instance-id
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getRoutingCodeByIdInstanceProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstanceGet(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Consulter un code de routage identifié par SIRET et identifiant de routage
     * @summary Get a routing code by SIRET and routing identifier
     * @param {string} siret 
     * @param {string} routingIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(siret: string, routingIdentifier: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getRoutingCodeBySiretAndCodeProxyApiV1AfnorDirectoryV1RoutingCodeSiretSiretCodeRoutingIdentifierGet(siret, routingIdentifier, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retourne les détails d\'une entreprise (unité légale) identifiée par son numéro SIREN
     * @summary Consult a siren (legal unit) by SIREN number
     * @param {string} siren 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(siren: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getSirenByCodeInseeProxyApiV1AfnorDirectoryV1SirenCodeInseeSirenGet(siren, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtenir une entreprise (unité légale) identifiée par son idInstance
     * @summary Gets a siren (legal unit) by instance ID
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getSirenByIdInstanceProxyApiV1AfnorDirectoryV1SirenIdInstanceIdInstanceGet(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtenir un établissement identifié par son numéro SIRET
     * @summary Gets a siret (facility) by SIRET number
     * @param {string} siret 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(siret: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getSiretByCodeInseeProxyApiV1AfnorDirectoryV1SiretCodeInseeSiretGet(siret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtenir un établissement identifié par son idInstance
     * @summary Gets a siret (facility) by id-instance
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).getSiretByIdInstanceProxyApiV1AfnorDirectoryV1SiretIdInstanceIdInstanceGet(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mettre à jour partiellement une ligne d\'annuaire
     * @summary Partially updates a directory line
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).patchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineIdInstanceIdInstancePatch(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mettre à jour partiellement un code de routage privé
     * @summary Partially update a private routing code
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).patchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePatch(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Mettre à jour complètement un code de routage privé
     * @summary Completely update a private routing code
     * @param {string} idInstance 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(idInstance: string, options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).putRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeIdInstanceIdInstancePut(idInstance, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Rechercher des lignes d\'annuaire selon des critères
     * @summary Search for a directory line
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).searchDirectoryLineProxyApiV1AfnorDirectoryV1DirectoryLineSearchPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Rechercher des codes de routage selon des critères
     * @summary Search for a routing code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).searchRoutingCodeProxyApiV1AfnorDirectoryV1RoutingCodeSearchPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recherche multi-critères d\'entreprises (unités légales)
     * @summary SIREN search (or legal unit)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).searchSirenProxyApiV1AfnorDirectoryV1SirenSearchPost(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Recherche multi-critères d\'établissements
     * @summary Search for a SIRET (facility)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(options?: RawAxiosRequestConfig) {
        return AFNORPDPPADirectoryServiceApiFp(this.configuration).searchSiretProxyApiV1AfnorDirectoryV1SiretSearchPost(options).then((request) => request(this.axios, this.basePath));
    }
}

