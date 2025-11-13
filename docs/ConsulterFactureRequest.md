# ConsulterFactureRequest

Consulter une facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**ChorusProCredentials**](ChorusProCredentials.md) |  | [optional] [default to undefined]
**identifiant_facture_cpp** | **number** | ID Chorus Pro de la facture | [default to undefined]

## Example

```typescript
import { ConsulterFactureRequest } from '@factpulse/sdk';

const instance: ConsulterFactureRequest = {
    credentials,
    identifiant_facture_cpp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
