# VATEXCodesResponse

Response for the VATEX codes endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codes** | [**Array&lt;VATEXCodeInfo&gt;**](VATEXCodeInfo.md) |  | [default to undefined]
**count** | **number** |  | [default to undefined]
**source** | **string** |  | [optional] [default to 'https://docs.peppol.eu/poacc/billing/3.0/codelist/vatex/']

## Example

```typescript
import { VATEXCodesResponse } from '@factpulse/sdk';

const instance: VATEXCodesResponse = {
    codes,
    count,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
