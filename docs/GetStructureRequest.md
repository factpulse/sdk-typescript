# GetStructureRequest

Get structure details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ChorusProCredentials**](ChorusProCredentials.md) |  | [optional] [default to undefined]
**structureId** | **number** | Chorus Pro structure ID | [default to undefined]
**languageCode** | **string** | Language code (fr, en) | [optional] [default to 'fr']

## Example

```typescript
import { GetStructureRequest } from '@factpulse/sdk';

const instance: GetStructureRequest = {
    credentials,
    structureId,
    languageCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
