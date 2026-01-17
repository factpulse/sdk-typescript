# RecipientInput

Destinataire du message CDAR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siren** | **string** |  | [optional] [default to undefined]
**siret** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**role** | **string** | Code rôle (BY, SE, WK, etc.) | [optional] [default to 'BY']
**email** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RecipientInput } from '@factpulse/sdk';

const instance: RecipientInput = {
    siren,
    siret,
    name,
    role,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
