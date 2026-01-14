# ValidationInfo

Informations sur la validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile** | **string** | Profil Factur-X utilise | [default to undefined]
**schematron_rules_passed** | **number** | Regles passees | [default to undefined]
**schematron_rules_total** | **number** | Total regles | [default to undefined]
**pdfa_compliant** | **boolean** | PDF/A-3 conforme | [optional] [default to true]
**xml_embedded** | **boolean** | XML embarque dans PDF | [optional] [default to true]
**errors** | [**Array&lt;FactureElectroniqueRestApiSchemasConvertValidationError&gt;**](FactureElectroniqueRestApiSchemasConvertValidationError.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationInfo } from '@factpulse/sdk';

const instance: ValidationInfo = {
    profile,
    schematron_rules_passed,
    schematron_rules_total,
    pdfa_compliant,
    xml_embedded,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
