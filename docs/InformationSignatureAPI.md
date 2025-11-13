# InformationSignatureAPI

Informations sur une signature électronique dans un PDF.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nom_champ** | **string** | Nom du champ de signature dans le PDF | [default to undefined]
**signataire** | **string** |  | [optional] [default to undefined]
**date_signature** | **string** |  | [optional] [default to undefined]
**raison** | **string** |  | [optional] [default to undefined]
**localisation** | **string** |  | [optional] [default to undefined]
**est_valide** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { InformationSignatureAPI } from '@factpulse/sdk';

const instance: InformationSignatureAPI = {
    nom_champ,
    signataire,
    date_signature,
    raison,
    localisation,
    est_valide,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
