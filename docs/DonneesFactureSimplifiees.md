# DonneesFactureSimplifiees

Données simplifiées de la facture (format minimal pour auto-enrichissement).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numero** | **string** | Numéro de facture unique | [default to undefined]
**emetteur** | **{ [key: string]: any; }** | Informations sur l\&#39;émetteur (siret, iban, ...) | [default to undefined]
**destinataire** | **{ [key: string]: any; }** | Informations sur le destinataire (siret, ...) | [default to undefined]
**lignes** | **Array&lt;{ [key: string]: any; }&gt;** | Lignes de la facture | [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**echeance_jours** | **number** | Échéance en jours (défaut: 30) | [optional] [default to 30]
**commentaire** | **string** |  | [optional] [default to undefined]
**numero_bon_commande** | **string** |  | [optional] [default to undefined]
**numero_marche** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DonneesFactureSimplifiees } from '@factpulse/sdk';

const instance: DonneesFactureSimplifiees = {
    numero,
    emetteur,
    destinataire,
    lignes,
    date,
    echeance_jours,
    commentaire,
    numero_bon_commande,
    numero_marche,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
