# DestinationAFNOR

Configuration spécifique pour la destination AFNOR PDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to TypeEnum_Afnor]
**credentials** | [**CredentialsAFNOR**](CredentialsAFNOR.md) |  | [optional] [default to undefined]
**flow_syntax** | **string** | Syntaxe du flux à envoyer | [optional] [default to FlowSyntaxEnum_FacturX]
**tracking_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DestinationAFNOR } from '@factpulse/sdk';

const instance: DestinationAFNOR = {
    type,
    credentials,
    flow_syntax,
    tracking_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
