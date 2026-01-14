# GetChorusProIdResponse

Found Chorus Pro ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**structureId** | **number** | Chorus Pro ID (0 if not found) | [default to undefined]
**structureIdentifier** | **string** | Searched SIRET/SIREN | [default to undefined]
**structureName** | **string** |  | [optional] [default to undefined]
**message** | **string** | Return message | [default to undefined]

## Example

```typescript
import { GetChorusProIdResponse } from '@factpulse/sdk';

const instance: GetChorusProIdResponse = {
    structureId,
    structureIdentifier,
    structureName,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
