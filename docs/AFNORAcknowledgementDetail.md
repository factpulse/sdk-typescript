
# AFNORAcknowledgementDetail


## Properties

Name | Type
------------ | -------------
`level` | string
`item` | string
`reasonCode` | [AFNORReasonCode](AFNORReasonCode.md)
`reasonMessage` | string

## Example

```typescript
import type { AFNORAcknowledgementDetail } from ''

// TODO: Update the object below with actual values
const example = {
  "level": null,
  "item": null,
  "reasonCode": null,
  "reasonMessage": null,
} satisfies AFNORAcknowledgementDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AFNORAcknowledgementDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


