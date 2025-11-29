# FournisseurEntrant

Fournisseur extrait d\'une facture entrante.  Contrairement au modèle Fournisseur de models.py, ce modèle n\'a pas de champ id_fournisseur car cette information n\'est pas disponible dans les XML Factur-X/CII/UBL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nom** | **string** | Raison sociale du fournisseur (BT-27) | [default to undefined]
**siren** | **string** |  | [optional] [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**numero_tva_intra** | **string** |  | [optional] [default to undefined]
**adresse_postale** | [**AdressePostale**](AdressePostale.md) |  | [optional] [default to undefined]
**adresse_electronique** | [**AdresseElectronique**](AdresseElectronique.md) |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**telephone** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FournisseurEntrant } from '@factpulse/sdk';

const instance: FournisseurEntrant = {
    nom,
    siren,
    siret,
    numero_tva_intra,
    adresse_postale,
    adresse_electronique,
    email,
    telephone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
