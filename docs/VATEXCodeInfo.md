# VATEXCodeInfo

Single VATEX code entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | VATEX code (e.g. VATEX-EU-IC) | [default to undefined]
**name** | **string** | Short name (e.g. \&#39;Intra-Community supply\&#39;) | [default to undefined]
**description** | **string** | Detailed description / remark | [default to undefined]
**category** | **string** | Associated VAT category code (E, AE, K, G, O) | [default to undefined]

## Example

```typescript
import { VATEXCodeInfo } from '@factpulse/sdk';

const instance: VATEXCodeInfo = {
    code,
    name,
    description,
    category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
