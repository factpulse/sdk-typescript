# CadreDeFacturation

Définit le cadre de facturation (ex: A1 pour une facture fournisseur).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codeCadreFacturation** | [**CodeCadreFacturation**](CodeCadreFacturation.md) |  | [default to undefined]
**codeServiceValideur** | **string** |  | [optional] [default to undefined]
**codeStructureValideur** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CadreDeFacturation } from '@factpulse/sdk';

const instance: CadreDeFacturation = {
    codeCadreFacturation,
    codeServiceValideur,
    codeStructureValideur,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
