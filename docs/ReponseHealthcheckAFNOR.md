# ReponseHealthcheckAFNOR

Réponse du healthcheck des services AFNOR

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_service_ok** | **boolean** | État du Flow Service API | [default to undefined]
**directory_service_ok** | **boolean** | État du Directory Service API | [default to undefined]
**message** | **string** | Message descriptif de l\&#39;état | [default to undefined]

## Example

```typescript
import { ReponseHealthcheckAFNOR } from '@factpulse/sdk';

const instance: ReponseHealthcheckAFNOR = {
    flow_service_ok,
    directory_service_ok,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
