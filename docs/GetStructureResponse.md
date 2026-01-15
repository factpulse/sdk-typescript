# GetStructureResponse

Structure details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnCode** | **number** | Return code (0 &#x3D; success) | [default to undefined]
**message** | **string** | Response message | [default to undefined]
**structureId** | **number** |  | [optional] [default to undefined]
**structureIdentifier** | **string** |  | [optional] [default to undefined]
**structureLabel** | **string** |  | [optional] [default to undefined]
**companyName** | **string** |  | [optional] [default to undefined]
**vatNumber** | **string** |  | [optional] [default to undefined]
**structureEmail** | **string** |  | [optional] [default to undefined]
**parameters** | [**StructureParameters**](StructureParameters.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetStructureResponse } from '@factpulse/sdk';

const instance: GetStructureResponse = {
    returnCode,
    message,
    structureId,
    structureIdentifier,
    structureLabel,
    companyName,
    vatNumber,
    structureEmail,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
