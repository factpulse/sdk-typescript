# FactureEnrichieInfoOutput

Informations sur la facture enrichie.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numero_facture** | **string** |  | [default to undefined]
**id_emetteur** | **number** |  | [optional] [default to undefined]
**id_destinataire** | **number** |  | [optional] [default to undefined]
**nom_emetteur** | **string** |  | [default to undefined]
**nom_destinataire** | **string** |  | [default to undefined]
**montant_ht_total** | **string** |  | [default to undefined]
**montant_tva** | **string** |  | [default to undefined]
**montant_ttc_total** | **string** |  | [default to undefined]

## Example

```typescript
import { FactureEnrichieInfoOutput } from '@factpulse/sdk';

const instance: FactureEnrichieInfoOutput = {
    numero_facture,
    id_emetteur,
    id_destinataire,
    nom_emetteur,
    nom_destinataire,
    montant_ht_total,
    montant_tva,
    montant_ttc_total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
