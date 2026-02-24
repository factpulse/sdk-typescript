# VATAccountingCode

VAT accounting regime - Chorus Pro API codes (typeTva).  Values are official Chorus Pro enum values, automatically mapped to UNTDID 2005 codes for Factur-X XML generation (BT-8 DueDateTypeCode).  | Chorus Pro code | Name | UNTDID 2005 | |-----------------|------|-------------| | TVA_SUR_DEBIT | ON_INVOICE | 5 (due on invoice date) | | TVA_SUR_ENCAISSEMENT | ON_PAYMENT | 72 (due on payment date) | | EXONERATION | EXEMPTION | - | | SANS_TVA | NO_VAT | - |

## Enum

* `TvaSurDebit` (value: `'TVA_SUR_DEBIT'`)

* `TvaSurEncaissement` (value: `'TVA_SUR_ENCAISSEMENT'`)

* `Exoneration` (value: `'EXONERATION'`)

* `SansTva` (value: `'SANS_TVA'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
