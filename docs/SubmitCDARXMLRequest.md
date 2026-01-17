# SubmitCDARXMLRequest

Requête de soumission d\'un XML CDAR pré-généré.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xml** | **string** | XML CDAR à soumettre | [default to undefined]
**flowType** | **string** | Type de flux AFNOR | [optional] [default to 'CustomerInvoiceLC']
**filename** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SubmitCDARXMLRequest } from '@factpulse/sdk';

const instance: SubmitCDARXMLRequest = {
    xml,
    flowType,
    filename,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
