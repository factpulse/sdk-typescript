# ResultatValidationPDFAPI

Résultat complet de la validation d\'un PDF Factur-X.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**est_conforme** | **boolean** | True si le PDF est conforme à tous les critères (XML, PDF/A, XMP) | [default to undefined]
**xml_present** | **boolean** | True si un XML Factur-X est embarqué dans le PDF | [default to undefined]
**xml_conforme** | **boolean** | True si le XML Factur-X est conforme aux règles Schematron | [default to undefined]
**profil_detecte** | **string** |  | [optional] [default to undefined]
**erreurs_xml** | **Array&lt;string&gt;** | Liste des erreurs de validation XML | [optional] [default to undefined]
**pdfa_conforme** | **boolean** | True si le PDF est conforme PDF/A | [default to undefined]
**version_pdfa** | **string** |  | [optional] [default to undefined]
**methode_validation_pdfa** | **string** | Méthode utilisée pour la validation PDF/A (metadata ou verapdf) | [optional] [default to 'metadata']
**regles_validees** | **number** |  | [optional] [default to undefined]
**regles_echouees** | **number** |  | [optional] [default to undefined]
**erreurs_pdfa** | **Array&lt;string&gt;** | Liste des erreurs de conformité PDF/A | [optional] [default to undefined]
**avertissements_pdfa** | **Array&lt;string&gt;** | Liste des avertissements PDF/A | [optional] [default to undefined]
**xmp_present** | **boolean** | True si des métadonnées XMP sont présentes | [default to undefined]
**xmp_conforme_facturx** | **boolean** | True si les métadonnées XMP contiennent des informations Factur-X | [default to undefined]
**profil_xmp** | **string** |  | [optional] [default to undefined]
**version_xmp** | **string** |  | [optional] [default to undefined]
**erreurs_xmp** | **Array&lt;string&gt;** | Liste des erreurs de métadonnées XMP | [optional] [default to undefined]
**metadonnees_xmp** | **{ [key: string]: any; }** | Métadonnées XMP extraites du PDF | [optional] [default to undefined]
**est_signe** | **boolean** | True si le PDF contient au moins une signature | [default to undefined]
**nombre_signatures** | **number** | Nombre de signatures électroniques trouvées | [optional] [default to 0]
**signatures** | [**Array&lt;InformationSignatureAPI&gt;**](InformationSignatureAPI.md) | Liste des signatures trouvées avec leurs informations | [optional] [default to undefined]
**erreurs_signatures** | **Array&lt;string&gt;** | Liste des erreurs lors de l\&#39;analyse des signatures | [optional] [default to undefined]
**message_resume** | **string** | Message résumant le résultat de la validation | [default to undefined]

## Example

```typescript
import { ResultatValidationPDFAPI } from '@factpulse/sdk';

const instance: ResultatValidationPDFAPI = {
    est_conforme,
    xml_present,
    xml_conforme,
    profil_detecte,
    erreurs_xml,
    pdfa_conforme,
    version_pdfa,
    methode_validation_pdfa,
    regles_validees,
    regles_echouees,
    erreurs_pdfa,
    avertissements_pdfa,
    xmp_present,
    xmp_conforme_facturx,
    profil_xmp,
    version_xmp,
    erreurs_xmp,
    metadonnees_xmp,
    est_signe,
    nombre_signatures,
    signatures,
    erreurs_signatures,
    message_resume,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
