# Destinataire

Informations sur le destinataire de la facture (le client).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adresseElectronique** | [**AdresseElectronique**](AdresseElectronique.md) |  | [default to undefined]
**codeServiceExecutant** | **string** |  | [optional] [default to undefined]
**nom** | **string** |  | [optional] [default to undefined]
**adressePostale** | [**AdressePostale**](AdressePostale.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Destinataire } from '@factpulse/sdk';

const instance: Destinataire = {
    adresseElectronique,
    codeServiceExecutant,
    nom,
    adressePostale,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
