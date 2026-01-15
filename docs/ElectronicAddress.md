# ElectronicAddress

Represents an electronic invoicing address, composed of an identifier and its scheme (SchemeID) in accordance with EN16931. Example: { \"identifier\": \"123456789\", \"scheme_id\": \"0225\" }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **string** | Electronic address identifier (e.g., SIREN, SIRET, routing code) | [default to undefined]
**schemeId** | [**SchemeID**](SchemeID.md) | Identification scheme (EAS code) | [optional] [default to undefined]

## Example

```typescript
import { ElectronicAddress } from '@factpulse/sdk';

const instance: ElectronicAddress = {
    identifier,
    schemeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
