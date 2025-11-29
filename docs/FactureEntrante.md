# FactureEntrante

Facture reçue d\'un fournisseur via PDP/PA.  Ce modèle contient les métadonnées essentielles extraites des factures entrantes, quel que soit leur format source (CII, UBL, Factur-X).  Les montants sont en Decimal en Python mais seront sérialisés en string dans le JSON pour préserver la précision monétaire.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_id** | **string** |  | [optional] [default to undefined]
**format_source** | [**FormatFacture**](FormatFacture.md) | Format source de la facture | [default to undefined]
**ref_fournisseur** | **string** | Numéro de facture émis par le fournisseur (BT-1) | [default to undefined]
**type_document** | [**TypeDocument**](TypeDocument.md) | Type de document (BT-3) | [optional] [default to undefined]
**fournisseur** | [**FournisseurEntrant**](FournisseurEntrant.md) | Émetteur de la facture (SellerTradeParty) | [default to undefined]
**site_facturation_nom** | **string** | Nom du destinataire / votre entreprise (BT-44) | [default to undefined]
**site_facturation_siret** | **string** |  | [optional] [default to undefined]
**date_de_piece** | **string** | Date de la facture (BT-2) - YYYY-MM-DD | [default to undefined]
**date_reglement** | **string** |  | [optional] [default to undefined]
**devise** | **string** | Code devise ISO (BT-5) | [optional] [default to 'EUR']
**montant_ht** | **string** | Montant HT total (BT-109) | [default to undefined]
**montant_tva** | **string** | Montant TVA total (BT-110) | [default to undefined]
**montant_ttc** | **string** | Montant TTC total (BT-112) | [default to undefined]
**numero_bon_commande** | **string** |  | [optional] [default to undefined]
**reference_contrat** | **string** |  | [optional] [default to undefined]
**objet_facture** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FactureEntrante } from '@factpulse/sdk';

const instance: FactureEntrante = {
    flow_id,
    format_source,
    ref_fournisseur,
    type_document,
    fournisseur,
    site_facturation_nom,
    site_facturation_siret,
    date_de_piece,
    date_reglement,
    devise,
    montant_ht,
    montant_tva,
    montant_ttc,
    numero_bon_commande,
    reference_contrat,
    objet_facture,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
