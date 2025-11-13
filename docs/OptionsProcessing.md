# OptionsProcessing

Options de traitement pour la génération et la soumission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profil_facturx** | **string** | Profil Factur-X à utiliser | [optional] [default to ProfilFacturxEnum_En16931]
**auto_enrichir** | **boolean** | Auto-enrichir les données (APIs Entreprises, Chorus Pro, etc.) | [optional] [default to true]
**valider** | **boolean** | Valider le XML Factur-X avec Schematron | [optional] [default to true]
**verifier_parametres_destination** | **boolean** | Vérifier les paramètres requis par la destination (ex: code_service pour Chorus) | [optional] [default to true]

## Example

```typescript
import { OptionsProcessing } from '@factpulse/sdk';

const instance: OptionsProcessing = {
    profil_facturx,
    auto_enrichir,
    valider,
    verifier_parametres_destination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
