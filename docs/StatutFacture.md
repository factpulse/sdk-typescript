# StatutFacture

Statut d\'une facture Chorus Pro.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Code statut (SOUMISE, VALIDEE, REJETEE, SUSPENDUE, MANDATEE, MISE_EN_PAIEMENT, etc.) | [default to undefined]
**libelle** | **string** | Libellé du statut | [default to undefined]
**date** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { StatutFacture } from '@factpulse/sdk';

const instance: StatutFacture = {
    code,
    libelle,
    date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
