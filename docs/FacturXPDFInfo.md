# FacturXPDFInfo

Information about the generated Factur-X PDF.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **number** | PDF size in bytes | [default to undefined]
**profile** | **string** | Factur-X profile used | [default to undefined]
**signed** | **boolean** | PDF electronically signed | [optional] [default to false]

## Example

```typescript
import { FacturXPDFInfo } from '@factpulse/sdk';

const instance: FacturXPDFInfo = {
    size,
    profile,
    signed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
