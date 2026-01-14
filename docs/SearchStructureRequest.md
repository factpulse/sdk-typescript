# SearchStructureRequest

Search structures by criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ChorusProCredentials**](ChorusProCredentials.md) |  | [optional] [default to undefined]
**structureIdentifier** | **string** |  | [optional] [default to undefined]
**structureIdentifierType** | **string** |  | [optional] [default to undefined]
**companyName** | **string** |  | [optional] [default to undefined]
**restrictPrivateStructures** | **boolean** | Limit search to private structures only | [optional] [default to false]

## Example

```typescript
import { SearchStructureRequest } from '@factpulse/sdk';

const instance: SearchStructureRequest = {
    credentials,
    structureIdentifier,
    structureIdentifierType,
    companyName,
    restrictPrivateStructures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
