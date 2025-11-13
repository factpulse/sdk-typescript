# FactureFacturX

Modèle de données pour une facture destinée à être convertie en Factur-X.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numeroFacture** | **string** |  | [default to undefined]
**dateEcheancePaiement** | **string** |  | [default to undefined]
**dateFacture** | **string** |  | [optional] [default to undefined]
**modeDepot** | [**ModeDepot**](ModeDepot.md) |  | [default to undefined]
**destinataire** | [**Destinataire**](Destinataire.md) |  | [default to undefined]
**fournisseur** | [**Fournisseur**](Fournisseur.md) |  | [default to undefined]
**cadreDeFacturation** | [**CadreDeFacturation**](CadreDeFacturation.md) |  | [default to undefined]
**references** | [**References**](References.md) |  | [default to undefined]
**montantTotal** | [**MontantTotal**](MontantTotal.md) |  | [default to undefined]
**lignesDePoste** | [**Array&lt;LigneDePoste&gt;**](LigneDePoste.md) |  | [optional] [default to undefined]
**lignesDeTva** | [**Array&lt;LigneDeTVA&gt;**](LigneDeTVA.md) |  | [optional] [default to undefined]
**commentaire** | **string** |  | [optional] [default to undefined]
**idUtilisateurCourant** | **number** |  | [optional] [default to undefined]
**piecesJointesComplementaires** | [**Array&lt;PieceJointeComplementaire&gt;**](PieceJointeComplementaire.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FactureFacturX } from '@factpulse/sdk';

const instance: FactureFacturX = {
    numeroFacture,
    dateEcheancePaiement,
    dateFacture,
    modeDepot,
    destinataire,
    fournisseur,
    cadreDeFacturation,
    references,
    montantTotal,
    lignesDePoste,
    lignesDeTva,
    commentaire,
    idUtilisateurCourant,
    piecesJointesComplementaires,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
