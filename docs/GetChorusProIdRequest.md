# GetChorusProIdRequest

Get Chorus Pro ID from SIRET.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**FactureElectroniqueRestApiSchemasChorusProChorusProCredentials**](FactureElectroniqueRestApiSchemasChorusProChorusProCredentials.md) |  | [optional] [default to undefined]
**siret** | **string** | Structure SIRET (14 digits) | [default to undefined]
**identifierType** | **string** | Identifier type (SIRET, SIREN, UE_HORS_FRANCE, etc.) | [optional] [default to 'SIRET']

## Example

```typescript
import { GetChorusProIdRequest } from '@factpulse/sdk';

const instance: GetChorusProIdRequest = {
    credentials,
    siret,
    identifierType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
