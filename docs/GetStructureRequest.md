# GetStructureRequest

Get structure details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**FactureElectroniqueRestApiSchemasChorusProChorusProCredentials**](FactureElectroniqueRestApiSchemasChorusProChorusProCredentials.md) |  | [optional] [default to undefined]
**structure_id** | **number** | Chorus Pro structure ID | [default to undefined]
**language_code** | **string** | Language code (fr, en) | [optional] [default to 'fr']

## Example

```typescript
import { GetStructureRequest } from '@factpulse/sdk';

const instance: GetStructureRequest = {
    credentials,
    structure_id,
    language_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
