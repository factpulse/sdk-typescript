# Destination

Configuration de la destination (Chorus Pro ou AFNOR)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to TypeEnum_ChorusPro]
**credentials** | [**CredentialsAFNOR**](CredentialsAFNOR.md) |  | [optional] [default to undefined]
**flow_syntax** | **string** | Syntaxe du flux à envoyer | [optional] [default to FlowSyntaxEnum_FacturX]
**tracking_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Destination } from '@factpulse/sdk';

const instance: Destination = {
    type,
    credentials,
    flow_syntax,
    tracking_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
