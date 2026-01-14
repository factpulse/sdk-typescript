
# BoundingBoxSchema

Rectangular area coordinates in PDF.  Coordinates are in PDF points (1 point = 1/72 inch). Origin (0,0) is at the bottom-left of the page.

## Properties

Name | Type
------------ | -------------
`x0` | number
`y0` | number
`x1` | number
`y1` | number
`page` | number
`width` | number
`height` | number

## Example

```typescript
import type { BoundingBoxSchema } from ''

// TODO: Update the object below with actual values
const example = {
  "x0": null,
  "y0": null,
  "x1": null,
  "y1": null,
  "page": null,
  "width": null,
  "height": null,
} satisfies BoundingBoxSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BoundingBoxSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


