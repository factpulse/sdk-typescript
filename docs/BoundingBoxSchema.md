# BoundingBoxSchema

Rectangular area coordinates in PDF.  Coordinates are in PDF points (1 point = 1/72 inch). Origin (0,0) is at the bottom-left of the page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**x0** | **number** | Left X coordinate | [default to undefined]
**y0** | **number** | Bottom Y coordinate | [default to undefined]
**x1** | **number** | Right X coordinate | [default to undefined]
**y1** | **number** | Top Y coordinate | [default to undefined]
**page** | **number** | Page number (0-indexed) | [optional] [default to 0]
**width** | **number** | Area width | [default to undefined]
**height** | **number** | Area height | [default to undefined]

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
