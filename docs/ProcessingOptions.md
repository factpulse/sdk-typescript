# ProcessingOptions

Processing options for generation and submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facturxProfile** | [**FacturXProfile**](FacturXProfile.md) | Factur-X profile to use | [optional] [default to undefined]
**autoEnrich** | **boolean** | Auto-enrich data (Company APIs, Chorus Pro, etc.) | [optional] [default to true]
**validateXml** | **boolean** | Validate Factur-X XML with Schematron | [optional] [default to true]
**verifyDestinationParameters** | **boolean** | Verify required parameters for destination (e.g., service_code for Chorus) | [optional] [default to true]

## Example

```typescript
import { ProcessingOptions } from '@factpulse/sdk';

const instance: ProcessingOptions = {
    facturxProfile,
    autoEnrich,
    validateXml,
    verifyDestinationParameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
