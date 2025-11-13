# ConsulterStructureRequest

Consulter les détails d\'une structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ChorusProCredentials**](ChorusProCredentials.md) |  | [optional] [default to undefined]
**id_structure_cpp** | **number** | ID Chorus Pro de la structure | [default to undefined]
**code_langue** | **string** | Code langue (fr, en) | [optional] [default to 'fr']

## Example

```typescript
import { ConsulterStructureRequest } from '@factpulse/sdk';

const instance: ConsulterStructureRequest = {
    credentials,
    id_structure_cpp,
    code_langue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
