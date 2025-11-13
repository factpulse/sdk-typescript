# ConsulterFactureResponse

Détails d\'une facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_retour** | **number** |  | [default to undefined]
**libelle** | **string** |  | [default to undefined]
**identifiant_facture_cpp** | **number** |  | [optional] [default to undefined]
**numero_facture** | **string** |  | [optional] [default to undefined]
**date_facture** | **string** |  | [optional] [default to undefined]
**montant_ttc_total** | **string** |  | [optional] [default to undefined]
**statut_courant** | [**StatutFacture**](StatutFacture.md) |  | [optional] [default to undefined]
**id_structure_cpp_destinataire** | **number** |  | [optional] [default to undefined]
**designation_structure_destinataire** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConsulterFactureResponse } from '@factpulse/sdk';

const instance: ConsulterFactureResponse = {
    code_retour,
    libelle,
    identifiant_facture_cpp,
    numero_facture,
    date_facture,
    montant_ttc_total,
    statut_courant,
    id_structure_cpp_destinataire,
    designation_structure_destinataire,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
