# AFNORHealthCheckResponse

Response from AFNOR services healthcheck.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_service_ok** | **boolean** | Flow Service API status | [default to undefined]
**directory_service_ok** | **boolean** | Directory Service API status | [default to undefined]
**message** | **string** | Descriptive status message | [default to undefined]

## Example

```typescript
import { AFNORHealthCheckResponse } from '@factpulse/sdk';

const instance: AFNORHealthCheckResponse = {
    flow_service_ok,
    directory_service_ok,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
