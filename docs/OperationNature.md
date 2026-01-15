# OperationNature

Operation nature (BT-23) for Factur-X - French Reform.  BR-FR-08: The invoicing framework must be one of the following codes. First letter indicates: B = Goods, S = Services, M = Mixed.  Ref: XP Z12-012, article_conformite_pdf_facturx.md  Example:     >>> framework = InvoicingFramework(     ...     invoicing_framework_code=InvoicingFrameworkCode.A1_SUPPLIER_INVOICE,     ...     operation_nature=OperationNature.GOODS     ... )

## Enum

* `B1` (value: `'B1'`)

* `S1` (value: `'S1'`)

* `M1` (value: `'M1'`)

* `B2` (value: `'B2'`)

* `S2` (value: `'S2'`)

* `M2` (value: `'M2'`)

* `B4` (value: `'B4'`)

* `S4` (value: `'S4'`)

* `M4` (value: `'M4'`)

* `S3` (value: `'S3'`)

* `S5` (value: `'S5'`)

* `S6` (value: `'S6'`)

* `B7` (value: `'B7'`)

* `S7` (value: `'S7'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
