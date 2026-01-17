# StatusCodesResponse

Liste des codes statut disponibles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codes** | [**Array&lt;StatusCodeInfo&gt;**](StatusCodeInfo.md) | Liste des codes statut | [default to undefined]
**count** | **number** | Nombre de codes | [default to undefined]
**source** | **string** | Règle source | [optional] [default to 'BR-FR-CDV-CL-06']

## Example

```typescript
import { StatusCodesResponse } from '@factpulse/sdk';

const instance: StatusCodesResponse = {
    codes,
    count,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
