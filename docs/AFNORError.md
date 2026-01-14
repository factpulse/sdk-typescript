
# AFNORError


## Properties

Name | Type
------------ | -------------
`type` | string
`message` | string
`status` | number
`details` | string
`instance` | string

## Example

```typescript
import type { AFNORError } from ''

// TODO: Update the object below with actual values
const example = {
  "type": /path/reference-url,
  "message": Error message,
  "status": null,
  "details": Error detailed description,
  "instance": /chemin/url-de-reference#instance-du-contexte,
} satisfies AFNORError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


