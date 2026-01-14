
# StructureParameters

Mandatory structure parameters.

## Properties

Name | Type
------------ | -------------
`serviceCodeRequired` | boolean
`engagementNumberRequired` | boolean
`engagementOrServiceManagement` | boolean

## Example

```typescript
import type { StructureParameters } from ''

// TODO: Update the object below with actual values
const example = {
  "serviceCodeRequired": null,
  "engagementNumberRequired": null,
  "engagementOrServiceManagement": null,
} satisfies StructureParameters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StructureParameters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


