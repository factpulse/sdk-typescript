
# FacturXInvoice

Data model for an invoice to be converted to Factur-X.

## Properties

Name | Type
------------ | -------------
`invoiceNumber` | string
`paymentDueDate` | string
`invoiceDate` | string
`submissionMode` | [SubmissionMode](SubmissionMode.md)
`recipient` | [Recipient](Recipient.md)
`supplier` | [Supplier](Supplier.md)
`invoicingFramework` | [InvoicingFramework](InvoicingFramework.md)
`references` | [InvoiceReferences](InvoiceReferences.md)
`totals` | [InvoiceTotals](InvoiceTotals.md)
`invoiceLines` | [Array&lt;InvoiceLine&gt;](InvoiceLine.md)
`vatLines` | [Array&lt;VATLine&gt;](VATLine.md)
`notes` | [Array&lt;InvoiceNote&gt;](InvoiceNote.md)
`comment` | string
`currentUserId` | number
`supplementaryAttachments` | [Array&lt;SupplementaryAttachment&gt;](SupplementaryAttachment.md)
`payee` | [Payee](Payee.md)
`deliveryParty` | [DeliveryParty](DeliveryParty.md)
`taxRepresentative` | [TaxRepresentative](TaxRepresentative.md)
`deliveryDate` | string
`billingPeriodStart` | string
`billingPeriodEnd` | string
`paymentReference` | string
`creditorReferenceId` | string
`directDebitMandateId` | string
`debtorIban` | string
`paymentTerms` | string
`allowancesCharges` | [Array&lt;AllowanceCharge&gt;](AllowanceCharge.md)
`additionalDocuments` | [Array&lt;AdditionalDocument&gt;](AdditionalDocument.md)
`buyerAccountingReference` | string
`paymentCard` | [PaymentCard](PaymentCard.md)

## Example

```typescript
import type { FacturXInvoice } from ''

// TODO: Update the object below with actual values
const example = {
  "invoiceNumber": null,
  "paymentDueDate": null,
  "invoiceDate": null,
  "submissionMode": null,
  "recipient": null,
  "supplier": null,
  "invoicingFramework": null,
  "references": null,
  "totals": null,
  "invoiceLines": null,
  "vatLines": null,
  "notes": null,
  "comment": null,
  "currentUserId": null,
  "supplementaryAttachments": null,
  "payee": null,
  "deliveryParty": null,
  "taxRepresentative": null,
  "deliveryDate": null,
  "billingPeriodStart": null,
  "billingPeriodEnd": null,
  "paymentReference": null,
  "creditorReferenceId": null,
  "directDebitMandateId": null,
  "debtorIban": null,
  "paymentTerms": null,
  "allowancesCharges": null,
  "additionalDocuments": null,
  "buyerAccountingReference": null,
  "paymentCard": null,
} satisfies FacturXInvoice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FacturXInvoice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


