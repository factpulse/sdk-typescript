# SoumettreFactureCompleteRequest

Requête pour soumettre une facture complète (génération + soumission).  Workflow : 1. Auto-enrichissement (optionnel) 2. Génération PDF Factur-X 3. Signature (optionnelle) 4. Soumission vers la destination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**donnees_facture** | [**DonneesFactureSimplifiees**](DonneesFactureSimplifiees.md) | Données de la facture au format simplifié (voir exemples) | [default to undefined]
**pdf_source** | **string** | PDF source encodé en base64 (sera transformé en Factur-X) | [default to undefined]
**destination** | [**Destination**](Destination.md) |  | [default to undefined]
**signature** | [**ParametresSignature**](ParametresSignature.md) |  | [optional] [default to undefined]
**_options** | [**OptionsProcessing**](OptionsProcessing.md) | Options de traitement | [optional] [default to undefined]

## Example

```typescript
import { SoumettreFactureCompleteRequest } from '@factpulse/sdk';

const instance: SoumettreFactureCompleteRequest = {
    donnees_facture,
    pdf_source,
    destination,
    signature,
    _options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
