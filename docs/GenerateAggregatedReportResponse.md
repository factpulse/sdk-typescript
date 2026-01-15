# GenerateAggregatedReportResponse

Response after generating an aggregated e-reporting XML.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportId** | **string** | Report identifier | [default to undefined]
**transmissionType** | **string** | Transmission type (IN or RE) | [default to undefined]
**flowType** | **string** | AFNOR FlowType determined from content | [default to undefined]
**xml** | **string** | Generated XML content | [default to undefined]
**xmlSize** | **number** | XML size in bytes | [default to undefined]
**contentSummary** | **{ [key: string]: any; }** | Summary of content (counts by flux type) | [default to undefined]
**message** | **string** | Status message | [default to undefined]

## Example

```typescript
import { GenerateAggregatedReportResponse } from '@factpulse/sdk';

const instance: GenerateAggregatedReportResponse = {
    reportId,
    transmissionType,
    flowType,
    xml,
    xmlSize,
    contentSummary,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
