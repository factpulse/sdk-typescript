# SearchStructureRequest

Search structures by criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**FactureElectroniqueRestApiSchemasChorusProChorusProCredentials**](FactureElectroniqueRestApiSchemasChorusProChorusProCredentials.md) |  | [optional] [default to undefined]
**structure_identifier** | **string** |  | [optional] [default to undefined]
**structure_identifier_type** | **string** |  | [optional] [default to undefined]
**company_name** | **string** |  | [optional] [default to undefined]
**restrict_private_structures** | **boolean** | Limit search to private structures only | [optional] [default to false]

## Example

```typescript
import { SearchStructureRequest } from '@factpulse/sdk';

const instance: SearchStructureRequest = {
    credentials,
    structure_identifier,
    structure_identifier_type,
    company_name,
    restrict_private_structures,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
