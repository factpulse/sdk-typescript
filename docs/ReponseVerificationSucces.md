# ReponseVerificationSucces

Réponse de vérification réussie avec données unifiées.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**est_conforme** | **boolean** | True si aucun écart critique | [default to undefined]
**score_conformite** | **number** | Score de conformité (0-100%) | [default to undefined]
**champs_verifies** | **number** | Nombre de champs vérifiés | [optional] [default to 0]
**champs_conformes** | **number** | Nombre de champs conformes | [optional] [default to 0]
**est_facturx** | **boolean** | True si le PDF contient du XML Factur-X | [optional] [default to false]
**profil_facturx** | **string** |  | [optional] [default to undefined]
**champs** | [**Array&lt;ChampVerifieSchema&gt;**](ChampVerifieSchema.md) | Liste des champs vérifiés avec valeurs, statuts et coordonnées PDF | [optional] [default to undefined]
**notes_obligatoires** | [**Array&lt;NoteObligatoireSchema&gt;**](NoteObligatoireSchema.md) | Notes obligatoires (PMT, PMD, AAB) avec localisation PDF | [optional] [default to undefined]
**dimensions_pages** | [**Array&lt;DimensionPageSchema&gt;**](DimensionPageSchema.md) | Dimensions de chaque page du PDF (largeur, hauteur) | [optional] [default to undefined]
**avertissements** | **Array&lt;string&gt;** | Avertissements non bloquants | [optional] [default to undefined]

## Example

```typescript
import { ReponseVerificationSucces } from '@factpulse/sdk';

const instance: ReponseVerificationSucces = {
    est_conforme,
    score_conformite,
    champs_verifies,
    champs_conformes,
    est_facturx,
    profil_facturx,
    champs,
    notes_obligatoires,
    dimensions_pages,
    avertissements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
