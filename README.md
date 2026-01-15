# FactPulse SDK TypeScript

Official TypeScript/JavaScript client for the FactPulse API - French electronic invoicing.

## Features

- **Factur-X**: Generation and validation of electronic invoices (MINIMUM, BASIC, EN16931, EXTENDED profiles)
- **Chorus Pro**: Integration with the French public invoicing platform
- **AFNOR PDP/PA**: Submission of flows compliant with XP Z12-013 standard
- **Electronic signature**: PDF signing (PAdES-B-B, PAdES-B-T, PAdES-B-LT)
- **Simplified client**: JWT authentication and polling integrated via `helpers`

## Installation

```bash
npm install @factpulse/sdk
# or
yarn add @factpulse/sdk
```

## Quick Start

The `helpers` module provides a simplified API with automatic authentication and polling:

```typescript
import { FactPulseClient } from '@factpulse/sdk/helpers';
import * as fs from 'fs';

// Create the client
const client = new FactPulseClient({
  email: 'your_email@example.com',
  password: 'your_password'
});

// Build the invoice using simplified format (auto-calculates totals)
const invoiceData = {
  number: 'INV-2025-001',
  supplier: {
    name: 'My Company SAS',
    siret: '12345678901234',
    iban: 'FR7630001007941234567890185',
  },
  recipient: {
    name: 'Client SARL',
    siret: '98765432109876',
  },
  lines: [
    {
      description: 'Consulting services',
      quantity: 10,
      unitPrice: 100.0,
      vatRate: 20,
    }
  ],
};

// Generate the Factur-X PDF
const pdfBytes = await client.generateFacturx(invoiceData, 'source_invoice.pdf');

fs.writeFileSync('facturx_invoice.pdf', pdfBytes);
```

## Available Helpers

### amount(value)

Converts a value to a formatted string for monetary amounts.

```typescript
import { amount } from '@factpulse/sdk/helpers';

amount(1234.5);      // "1234.50"
amount("1234.56");   // "1234.56"
amount(null);        // "0.00"
```

### invoiceTotals(exclTax, vat, inclTax, amountDue, options?)

Creates a complete invoice totals object.

```typescript
import { invoiceTotals } from '@factpulse/sdk/helpers';

const totals = invoiceTotals(1000.00, 200.00, 1200.00, 1200.00, {
  globalAllowanceAmount: 50.00,   // Optional
  globalAllowanceReason: 'Loyalty', // Optional
  prepayment: 100.00,             // Optional
});
```

### invoiceLine(lineNumber, itemName, quantity, unitNetPrice, lineNetAmount, options?)

Creates an invoice line.

```typescript
import { invoiceLine } from '@factpulse/sdk/helpers';

const line = invoiceLine(
  1,
  'Consulting services',
  5,
  200.00,
  1000.00,
  {
    vatRate: 'TVA20',        // Or manualVatRate: '20.00'
    vatCategory: 'S',        // S, Z, E, AE, K
    unit: 'HOUR',            // LUMP_SUM, PIECE, HOUR, DAY...
    reference: 'REF-001',    // Optional
  }
);
```

### vatLine(taxableAmount, vatAmount, options?)

Creates a VAT breakdown line.

```typescript
import { vatLine } from '@factpulse/sdk/helpers';

const vat = vatLine(1000.00, 200.00, {
  rate: 'TVA20',       // Or manualRate: '20.00'
  category: 'S',       // S, Z, E, AE, K
});
```

### postalAddress(line1, postalCode, city, options?)

Creates a structured postal address.

```typescript
import { postalAddress } from '@factpulse/sdk/helpers';

const address = postalAddress('123 Republic Street', '75001', 'Paris', {
  country: 'FR',       // Default: 'FR'
  line2: 'Building A'  // Optional
});
```

### electronicAddress(identifier, schemeId?)

Creates an electronic address (digital identifier).

```typescript
import { electronicAddress } from '@factpulse/sdk/helpers';

// SIRET (schemeId="0225")
const address = electronicAddress('12345678901234', '0225');

// SIREN (schemeId="0009", default)
const address = electronicAddress('123456789');
```

### supplier(name, siret, addressLine1, postalCode, city, options?)

Creates a complete supplier with automatic SIREN and intra-EU VAT calculation.

```typescript
import { supplier } from '@factpulse/sdk/helpers';

const s = supplier(
  'My Company SAS',
  '12345678901234',
  '123 Example Street',
  '75001',
  'Paris',
  { iban: 'FR7630006000011234567890189' }
);
// SIREN and intra-EU VAT number calculated automatically
```

### recipient(name, siret, addressLine1, postalCode, city, options?)

Creates a recipient (customer) with automatic SIREN calculation.

```typescript
import { recipient } from '@factpulse/sdk/helpers';

const r = recipient(
  'Client SARL',
  '98765432109876',
  '456 Test Avenue',
  '69001',
  'Lyon'
);
```

## Zero-Trust Mode (Chorus Pro / AFNOR)

To pass your own credentials without server-side storage:

```typescript
import {
  FactPulseClient,
  ChorusProCredentials,
  AFNORCredentials,
} from '@factpulse/sdk/helpers';

const client = new FactPulseClient({
  email: 'your_email@example.com',
  password: 'your_password',
  chorusCredentials: {
    pisteClientId: 'your_client_id',
    pisteClientSecret: 'your_client_secret',
    chorusProLogin: 'your_login',
    chorusProPassword: 'your_password',
    sandbox: true,
  },
  afnorCredentials: {
    flowServiceUrl: 'https://api.pdp.fr/flow/v1',
    tokenUrl: 'https://auth.pdp.fr/oauth/token',
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret',
  },
});
```

## Resources

- **API Documentation**: https://factpulse.fr/api/facturation/documentation
- **Support**: contact@factpulse.fr

## License

MIT License - Copyright (c) 2025 FactPulse
