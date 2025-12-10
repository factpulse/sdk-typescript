# Beneficiaire

Informations sur le bénéficiaire du paiement (BG-10 / PayeeTradeParty).  Le bénéficiaire est la partie qui reçoit le paiement. Ce bloc est utilisé uniquement si le bénéficiaire est différent du vendeur (fournisseur).  **Cas d\'usage principal** : Affacturage (factoring) Quand une facture est affacturée, le factor (société d\'affacturage) devient le bénéficiaire du paiement à la place du fournisseur.  **Business Terms (EN16931)** : - BT-59 : Nom du bénéficiaire (obligatoire) - BT-60 : Identifiant du bénéficiaire (SIRET avec schemeID 0009) - BT-61 : Identifiant légal du bénéficiaire (SIREN avec schemeID 0002)  **Référence** : docs/guide_affacturage.md

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nom** | **string** | Nom du bénéficiaire (BT-59). Obligatoire. | [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**adresseElectronique** | [**AdresseElectronique**](AdresseElectronique.md) |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**bic** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Beneficiaire } from '@factpulse/sdk';

const instance: Beneficiaire = {
    nom,
    siret,
    siren,
    adresseElectronique,
    iban,
    bic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
