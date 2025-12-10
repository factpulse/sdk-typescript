# NatureOperation

Nature de l\'opération (BT-23) pour Factur-X - Réforme française.  BR-FR-08: Le cadre de facturation doit être l\'un des codes suivants. La première lettre indique : B = Biens, S = Services, M = Mixte.  Ref: XP Z12-012, article_conformite_pdf_facturx.md  Exemple d\'utilisation:     >>> cadre = CadreDeFacturation(     ...     code_cadre_facturation=CodeCadreFacturation.A1_FACTURE_FOURNISSEUR,     ...     nature_operation=NatureOperation.BIENS     ... )

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
