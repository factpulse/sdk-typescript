# SoumettreFactureCompleteResponse

Réponse complète après soumission automatisée.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**succes** | **boolean** | La facture a été soumise avec succès | [default to undefined]
**destination_type** | **string** | Type de destination | [default to undefined]
**resultat_chorus** | [**ResultatChorusPro**](ResultatChorusPro.md) |  | [optional] [default to undefined]
**resultat_afnor** | [**ResultatAFNOR**](ResultatAFNOR.md) |  | [optional] [default to undefined]
**facture_enrichie** | [**FactureEnrichieInfoOutput**](FactureEnrichieInfoOutput.md) | Données de la facture enrichie | [default to undefined]
**pdf_facturx** | [**PDFFacturXInfo**](PDFFacturXInfo.md) | Informations sur le PDF généré | [default to undefined]
**signature** | [**SignatureInfo**](SignatureInfo.md) |  | [optional] [default to undefined]
**pdf_base64** | **string** | PDF Factur-X généré (et signé si demandé) encodé en base64 | [default to undefined]
**message** | **string** | Message de retour | [default to undefined]

## Example

```typescript
import { SoumettreFactureCompleteResponse } from '@factpulse/sdk';

const instance: SoumettreFactureCompleteResponse = {
    succes,
    destination_type,
    resultat_chorus,
    resultat_afnor,
    facture_enrichie,
    pdf_facturx,
    signature,
    pdf_base64,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
