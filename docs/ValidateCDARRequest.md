# ValidateCDARRequest

Requête de validation CDAR.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** |  | [optional] [default to undefined]
**senderSiren** | **string** |  | [optional] [default to undefined]
**senderRole** | **string** |  | [optional] [default to undefined]
**invoiceId** | **string** |  | [optional] [default to undefined]
**invoiceIssueDate** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**reasonCode** | **string** |  | [optional] [default to undefined]
**encaisseAmount** | [**Encaisseamount1**](Encaisseamount1.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ValidateCDARRequest } from '@factpulse/sdk';

const instance: ValidateCDARRequest = {
    documentId,
    senderSiren,
    senderRole,
    invoiceId,
    invoiceIssueDate,
    status,
    reasonCode,
    encaisseAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
