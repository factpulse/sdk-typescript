# References

Contient les références diverses de la facture (devise, type, etc.).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviseFacture** | **string** |  | [optional] [default to 'EUR']
**modePaiement** | [**ModePaiement**](ModePaiement.md) |  | [default to undefined]
**typeFacture** | [**TypeFacture**](TypeFacture.md) |  | [default to undefined]
**typeTva** | [**TypeTVA**](TypeTVA.md) |  | [default to undefined]
**numeroMarche** | **string** |  | [optional] [default to undefined]
**motifExonerationTva** | **string** |  | [optional] [default to undefined]
**numeroBonCommande** | **string** |  | [optional] [default to undefined]
**numeroFactureOrigine** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { References } from '@factpulse/sdk';

const instance: References = {
    deviseFacture,
    modePaiement,
    typeFacture,
    typeTva,
    numeroMarche,
    motifExonerationTva,
    numeroBonCommande,
    numeroFactureOrigine,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
