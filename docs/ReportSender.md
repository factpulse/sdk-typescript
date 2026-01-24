# ReportSender

Report sender information (PA transmitting the report).  In PPF architecture, the sender is typically the PA (Plateforme Agréée) transmitting on behalf of the declarant (issuer).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siren** | **string** | SIREN or SIRET number of the sender (PA or company) | [default to undefined]
**name** | **string** | Company name | [default to undefined]
**vatId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ReportSender } from '@factpulse/sdk';

const instance: ReportSender = {
    siren,
    name,
    vatId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
