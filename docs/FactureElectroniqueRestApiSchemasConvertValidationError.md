# FactureElectroniqueRestApiSchemasConvertValidationError

Erreur de validation Schematron avec suggestion de correction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule** | **string** | Code de la regle (BR-XX, BR-FR-XX) | [default to undefined]
**bt_code** | **string** |  | [optional] [default to undefined]
**severity** | **string** | Gravite: error, warning | [default to undefined]
**message** | **string** | Message d\&#39;erreur | [default to undefined]
**suggested_value** | **string** |  | [optional] [default to undefined]
**suggested_field** | **string** |  | [optional] [default to undefined]
**explanation** | **string** |  | [optional] [default to undefined]
**confidence** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { FactureElectroniqueRestApiSchemasConvertValidationError } from '@factpulse/sdk';

const instance: FactureElectroniqueRestApiSchemasConvertValidationError = {
    rule,
    bt_code,
    severity,
    message,
    suggested_value,
    suggested_field,
    explanation,
    confidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
