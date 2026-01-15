# GenerateEReportingResponse

Response after generating e-reporting XML.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportId** | **string** | Report identifier | [default to undefined]
**flowType** | **string** | Flux type | [default to undefined]
**xml** | **string** | Generated XML content | [default to undefined]
**xmlSize** | **number** | XML size in bytes | [default to undefined]
**message** | **string** | Status message | [default to undefined]

## Example

```typescript
import { GenerateEReportingResponse } from '@factpulse/sdk';

const instance: GenerateEReportingResponse = {
    reportId,
    flowType,
    xml,
    xmlSize,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
