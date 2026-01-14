# StructureParameters

Mandatory structure parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceCodeRequired** | **boolean** | Service code is mandatory | [optional] [default to false]
**engagementNumberRequired** | **boolean** | Engagement number is mandatory | [optional] [default to false]
**engagementOrServiceManagement** | **boolean** | EJ or service code management enabled | [optional] [default to false]

## Example

```typescript
import { StructureParameters } from '@factpulse/sdk';

const instance: StructureParameters = {
    serviceCodeRequired,
    engagementNumberRequired,
    engagementOrServiceManagement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
