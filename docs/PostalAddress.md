
# PostalAddress

Represents a postal address (BG-5, BG-8, BG-12, BG-15).

## Properties

Name | Type
------------ | -------------
`postalCode` | string
`lineOne` | string
`lineTwo` | string
`lineThree` | string
`city` | string
`countryCode` | string
`countrySubdivision` | string

## Example

```typescript
import type { PostalAddress } from ''

// TODO: Update the object below with actual values
const example = {
  "postalCode": null,
  "lineOne": null,
  "lineTwo": null,
  "lineThree": null,
  "city": null,
  "countryCode": null,
  "countrySubdivision": null,
} satisfies PostalAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostalAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


