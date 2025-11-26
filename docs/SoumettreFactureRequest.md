# SoumettreFactureRequest

Soumission d\'une facture Chorus Pro.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ChorusProCredentials**](ChorusProCredentials.md) |  | [optional] [default to undefined]
**numero_facture** | **string** | Numéro de la facture | [default to undefined]
**date_facture** | **string** | Date de facture (format ISO: YYYY-MM-DD) | [default to undefined]
**date_echeance_paiement** | **string** |  | [optional] [default to undefined]
**id_structure_cpp** | **number** | ID Chorus Pro de la structure destinataire | [default to undefined]
**code_service** | **string** |  | [optional] [default to undefined]
**numero_engagement** | **string** |  | [optional] [default to undefined]
**montant_ht_total** | [**MontantHtTotal**](MontantHtTotal.md) |  | [default to undefined]
**montant_tva** | [**MontantTva**](MontantTva.md) |  | [default to undefined]
**montant_ttc_total** | [**MontantTtcTotal**](MontantTtcTotal.md) |  | [default to undefined]
**piece_jointe_principale_id** | **number** |  | [optional] [default to undefined]
**piece_jointe_principale_designation** | **string** |  | [optional] [default to undefined]
**commentaire** | **string** |  | [optional] [default to undefined]
**numero_bon_commande** | **string** |  | [optional] [default to undefined]
**numero_marche** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SoumettreFactureRequest } from '@factpulse/sdk';

const instance: SoumettreFactureRequest = {
    credentials,
    numero_facture,
    date_facture,
    date_echeance_paiement,
    id_structure_cpp,
    code_service,
    numero_engagement,
    montant_ht_total,
    montant_tva,
    montant_ttc_total,
    piece_jointe_principale_id,
    piece_jointe_principale_designation,
    commentaire,
    numero_bon_commande,
    numero_marche,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
