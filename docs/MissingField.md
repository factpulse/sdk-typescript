# MissingField

Champ manquant requis pour la conformite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **string** | Nom du champ | [default to undefined]
**bt_code** | **string** | Code Business Term (BT-XX) | [default to undefined]
**description** | **string** | Description du champ | [default to undefined]
**required_for** | **Array&lt;string&gt;** | Profils necessitant ce champ | [default to undefined]
**suggested_value** | **string** |  | [optional] [default to undefined]
**confidence** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { MissingField } from '@factpulse/sdk';

const instance: MissingField = {
    field,
    bt_code,
    description,
    required_for,
    suggested_value,
    confidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
