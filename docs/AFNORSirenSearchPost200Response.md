
# AFNORSirenSearchPost200Response


## Properties

Name | Type
------------ | -------------
`search` | [AFNORSearchSiren](AFNORSearchSiren.md)
`totalNumberOfResults` | number
`results` | [Array&lt;AFNORLegalUnitPayloadHistory&gt;](AFNORLegalUnitPayloadHistory.md)

## Example

```typescript
import type { AFNORSirenSearchPost200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "search": null,
  "totalNumberOfResults": 1500,
  "results": null,
} satisfies AFNORSirenSearchPost200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORSirenSearchPost200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


