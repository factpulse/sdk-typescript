# ValidateEReportingResponse

Response after validating e-reporting data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **boolean** | Whether the data is valid | [default to undefined]
**reportId** | **string** | Report identifier | [default to undefined]
**flowType** | **string** | Flux type | [default to undefined]
**errors** | [**Array&lt;FactureElectroniqueRestApiSchemasEreportingValidationError&gt;**](FactureElectroniqueRestApiSchemasEreportingValidationError.md) | List of validation errors (if any) | [optional] [default to undefined]
**warnings** | [**Array&lt;FactureElectroniqueRestApiSchemasEreportingValidationError&gt;**](FactureElectroniqueRestApiSchemasEreportingValidationError.md) | List of validation warnings (if any) | [optional] [default to undefined]
**message** | **string** | Status message | [default to undefined]

## Example

```typescript
import { ValidateEReportingResponse } from '@factpulse/sdk';

const instance: ValidateEReportingResponse = {
    valid,
    reportId,
    flowType,
    errors,
    warnings,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
