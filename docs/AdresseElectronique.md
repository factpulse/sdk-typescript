# AdresseElectronique

Représente une adresse de facturation électronique, composée d\'un identifiant et de son schéma (SchemeID) conformément à la norme EN16931. Exemple: { \"identifiant\": \"123456789\", \"scheme_id\": \"0225\" }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifiant** | **string** |  | [default to undefined]
**schemeId** | [**SchemeID**](SchemeID.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AdresseElectronique } from '@factpulse/sdk';

const instance: AdresseElectronique = {
    identifiant,
    schemeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
