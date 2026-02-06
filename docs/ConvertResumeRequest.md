# ConvertResumeRequest

Requete de reprise de conversion avec corrections.  Le champ `overrides` accepte n\'importe quel sous-ensemble de FacturXInvoice. Seuls les champs fournis seront mis a jour (merge profond).  Exemple:     {         \"overrides\": {             \"supplier\": {                 \"name\": \"Ma Société\",                 \"siret\": \"12345678901234\"             },             \"totals\": {                 \"total_net_amount\": 1000.00             }         },         \"callback_url\": \"https://example.com/webhook\",         \"webhook_mode\": \"inline\"     }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | **{ [key: string]: any; }** | Sous-ensemble de FacturXInvoice a mettre a jour (merge profond) | [optional] [default to undefined]
**callback_url** | **string** |  | [optional] [default to undefined]
**webhook_mode** | **string** | Mode de livraison webhook: \&#39;inline\&#39; ou \&#39;download_url\&#39; | [optional] [default to 'inline']

## Example

```typescript
import { ConvertResumeRequest } from '@factpulse/sdk';

const instance: ConvertResumeRequest = {
    overrides,
    callback_url,
    webhook_mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
