# ParametresStructure

Paramètres obligatoires d\'une structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_service_doit_etre_renseigne** | **boolean** | Le code service est obligatoire | [optional] [default to false]
**numero_ej_doit_etre_renseigne** | **boolean** | Le numéro d\&#39;engagement est obligatoire | [optional] [default to false]
**gestion_numero_ej_ou_code_service** | **boolean** | Gestion EJ ou code service activée | [optional] [default to false]

## Example

```typescript
import { ParametresStructure } from '@factpulse/sdk';

const instance: ParametresStructure = {
    code_service_doit_etre_renseigne,
    numero_ej_doit_etre_renseigne,
    gestion_numero_ej_ou_code_service,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
