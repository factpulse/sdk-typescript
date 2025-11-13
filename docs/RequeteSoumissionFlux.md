# RequeteSoumissionFlux

Requête pour soumettre une facture à une PDP/PA via AFNOR

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nom_flux** | **string** | Nom du flux (ex: \&#39;Facture 2025-001\&#39;) | [default to undefined]
**syntaxe_flux** | [**SyntaxeFlux**](SyntaxeFlux.md) | Syntaxe du flux (CII pour Factur-X) | [optional] [default to undefined]
**profil_flux** | [**ProfilFlux**](ProfilFlux.md) |  | [optional] [default to undefined]
**tracking_id** | **string** |  | [optional] [default to undefined]
**request_id** | **string** |  | [optional] [default to undefined]
**pdp_credentials** | [**PDPCredentials**](PDPCredentials.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RequeteSoumissionFlux } from '@factpulse/sdk';

const instance: RequeteSoumissionFlux = {
    nom_flux,
    syntaxe_flux,
    profil_flux,
    tracking_id,
    request_id,
    pdp_credentials,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
