# PDFValidationResultAPI

Complete result of a Factur-X PDF validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isCompliant** | **boolean** | True if PDF complies with all criteria (XML, PDF/A, XMP) | [default to undefined]
**xmlPresent** | **boolean** | True if a Factur-X XML is embedded in the PDF | [default to undefined]
**xmlCompliant** | **boolean** | True if Factur-X XML complies with Schematron rules | [default to undefined]
**detectedProfile** | **string** |  | [optional] [default to undefined]
**xmlErrors** | **Array&lt;string&gt;** | List of XML validation errors | [optional] [default to undefined]
**pdfaCompliant** | **boolean** | True if PDF is PDF/A compliant | [default to undefined]
**pdfaVersion** | **string** |  | [optional] [default to undefined]
**pdfaValidationMethod** | **string** | Method used for PDF/A validation (metadata or verapdf) | [optional] [default to 'metadata']
**validatedRules** | **number** |  | [optional] [default to undefined]
**failedRules** | **number** |  | [optional] [default to undefined]
**pdfaErrors** | **Array&lt;string&gt;** | List of PDF/A compliance errors | [optional] [default to undefined]
**pdfaWarnings** | **Array&lt;string&gt;** | List of PDF/A warnings | [optional] [default to undefined]
**xmpPresent** | **boolean** | True if XMP metadata is present | [default to undefined]
**xmpFacturxCompliant** | **boolean** | True if XMP metadata contains Factur-X information | [default to undefined]
**xmpProfile** | **string** |  | [optional] [default to undefined]
**xmpVersion** | **string** |  | [optional] [default to undefined]
**xmpErrors** | **Array&lt;string&gt;** | List of XMP metadata errors | [optional] [default to undefined]
**xmpMetadata** | **{ [key: string]: any; }** | XMP metadata extracted from PDF | [optional] [default to undefined]
**isSigned** | **boolean** | True if PDF contains at least one signature | [default to undefined]
**signatureCount** | **number** | Number of electronic signatures found | [optional] [default to 0]
**signatures** | [**Array&lt;SignatureInfoAPI&gt;**](SignatureInfoAPI.md) | List of found signatures with their information | [optional] [default to undefined]
**signatureErrors** | **Array&lt;string&gt;** | List of errors during signature analysis | [optional] [default to undefined]
**summaryMessage** | **string** | Message summarizing the validation result | [default to undefined]

## Example

```typescript
import { PDFValidationResultAPI } from '@factpulse/sdk';

const instance: PDFValidationResultAPI = {
    isCompliant,
    xmlPresent,
    xmlCompliant,
    detectedProfile,
    xmlErrors,
    pdfaCompliant,
    pdfaVersion,
    pdfaValidationMethod,
    validatedRules,
    failedRules,
    pdfaErrors,
    pdfaWarnings,
    xmpPresent,
    xmpFacturxCompliant,
    xmpProfile,
    xmpVersion,
    xmpErrors,
    xmpMetadata,
    isSigned,
    signatureCount,
    signatures,
    signatureErrors,
    summaryMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
