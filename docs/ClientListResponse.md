# ClientListResponse

Paginated client list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Array&lt;ClientSummary&gt;**](ClientSummary.md) | List of clients | [default to undefined]
**total** | **number** | Total number of clients | [default to undefined]
**page** | **number** | Current page | [default to undefined]
**pageSize** | **number** | Page size | [default to undefined]

## Example

```typescript
import { ClientListResponse } from '@factpulse/sdk';

const instance: ClientListResponse = {
    results,
    total,
    page,
    pageSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
