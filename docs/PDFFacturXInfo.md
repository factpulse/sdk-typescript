# PDFFacturXInfo

Informations sur le PDF Factur-X généré.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taille** | **number** | Taille du PDF en octets | [default to undefined]
**profil** | **string** | Profil Factur-X utilisé | [default to undefined]
**signe** | **boolean** | PDF signé électroniquement | [optional] [default to false]

## Example

```typescript
import { PDFFacturXInfo } from '@factpulse/sdk';

const instance: PDFFacturXInfo = {
    taille,
    profil,
    signe,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
