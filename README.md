# FactPulse SDK TypeScript

Official TypeScript/JavaScript client for the FactPulse API.

## Installation

```bash
npm install @factpulse/sdk
# or
yarn add @factpulse/sdk
```

## Quick Start

```typescript
import { FactPulseClient } from '@factpulse/sdk';

const client = new FactPulseClient({
  email: 'your_email@example.com',
  password: 'your_password',
});

// Generate a Factur-X invoice
const pdfBytes = await client.generateFacturx({
  invoiceData: {
    number: 'INV-2025-001',
    date: '2025-01-15',
    supplier: { name: 'My Company', siret: '12345678901234' },
    recipient: { name: 'Client', siret: '98765432109876' },
    lines: [{ description: 'Service', quantity: 1, unitPrice: 1000 }],
  },
  pdfSource: sourcePdfBuffer,
  profile: 'EN16931',
});
```

## License

MIT
