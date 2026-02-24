# LifecycleEvent

Evenement de cycle de vie d\'une facture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flowId** | **string** | ID du flux lifecycle | [default to undefined]
**statusCode** | **string** | Code statut (200-601) | [default to undefined]
**statusDescription** | **string** |  | [optional] [default to undefined]
**ackStatus** | **string** |  | [optional] [default to undefined]
**at** | **string** |  | [optional] [default to undefined]
**documentId** | **string** |  | [optional] [default to undefined]
**amount** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**issuerSiren** | **string** |  | [optional] [default to undefined]
**issuerRole** | **string** |  | [optional] [default to undefined]
**reasonCode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LifecycleEvent } from '@factpulse/sdk';

const instance: LifecycleEvent = {
    flowId,
    statusCode,
    statusDescription,
    ackStatus,
    at,
    documentId,
    amount,
    currency,
    issuerSiren,
    issuerRole,
    reasonCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
