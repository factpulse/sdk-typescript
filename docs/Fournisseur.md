# Fournisseur

Informations sur le fournisseur qui émet la facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adresseElectronique** | [**AdresseElectronique**](AdresseElectronique.md) |  | [default to undefined]
**idFournisseur** | **number** |  | [default to undefined]
**codeCoordonneesBancairesFournisseur** | **number** |  | [optional] [default to undefined]
**idServiceFournisseur** | **number** |  | [optional] [default to undefined]
**nom** | **string** |  | [optional] [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**numeroTvaIntra** | **string** |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**adressePostale** | [**AdressePostale**](AdressePostale.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Fournisseur } from '@factpulse/sdk';

const instance: Fournisseur = {
    adresseElectronique,
    idFournisseur,
    codeCoordonneesBancairesFournisseur,
    idServiceFournisseur,
    nom,
    siren,
    siret,
    numeroTvaIntra,
    iban,
    adressePostale,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
