# ResultatAFNOR

Résultat de la soumission à AFNOR PDP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_id** | **string** | Identifiant du flux soumis | [default to undefined]
**tracking_id** | **string** |  | [optional] [default to undefined]
**sha256** | **string** | Hash SHA-256 du fichier soumis | [default to undefined]
**flow_syntax** | **string** | Syntaxe du flux | [default to undefined]
**flow_profile** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ResultatAFNOR } from '@factpulse/sdk';

const instance: ResultatAFNOR = {
    flow_id,
    tracking_id,
    sha256,
    flow_syntax,
    flow_profile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
