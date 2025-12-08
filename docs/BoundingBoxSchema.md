# BoundingBoxSchema

Coordonnées d\'une zone rectangulaire dans le PDF.  Les coordonnées sont en points PDF (1 point = 1/72 pouce). L\'origine (0,0) est en bas à gauche de la page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x0** | **number** | Coordonnée X gauche | [default to undefined]
**y0** | **number** | Coordonnée Y bas | [default to undefined]
**x1** | **number** | Coordonnée X droite | [default to undefined]
**y1** | **number** | Coordonnée Y haut | [default to undefined]
**page** | **number** | Numéro de page (0-indexed) | [optional] [default to 0]
**width** | **number** | Largeur de la zone | [default to undefined]
**height** | **number** | Hauteur de la zone | [default to undefined]

## Example

```typescript
import { BoundingBoxSchema } from '@factpulse/sdk';

const instance: BoundingBoxSchema = {
    x0,
    y0,
    x1,
    y1,
    page,
    width,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
