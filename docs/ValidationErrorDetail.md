# ValidationErrorDetail

Validation error detail (aligned with AFNOR AcknowledgementDetail).  Unified format for all Factur-X validation errors, compatible with AFNOR XP Z12-013 standard.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**ErrorLevel**](ErrorLevel.md) | Severity level: \&#39;Error\&#39; or \&#39;Warning\&#39; | [optional] [default to undefined]
**item** | **string** | Identifier of the concerned element (XPath, field, BR-FR rule, etc.) | [default to undefined]
**reason** | **string** | Error description | [default to undefined]
**source** | [**ErrorSource**](ErrorSource.md) |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidationErrorDetail } from '@factpulse/sdk';

const instance: ValidationErrorDetail = {
    level,
    item,
    reason,
    source,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
