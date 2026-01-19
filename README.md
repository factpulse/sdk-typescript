# FactPulse SDK TypeScript

Official TypeScript/JavaScript client for the FactPulse API - French electronic invoicing.

## Features

- **Factur-X**: Generation and validation of electronic invoices (MINIMUM, BASIC, EN16931, EXTENDED profiles)
- **Chorus Pro**: Integration with the French public invoicing platform
- **AFNOR PDP/PA**: Submission of flows compliant with XP Z12-013 standard
- **Electronic signature**: PDF signing (PAdES-B-B, PAdES-B-T, PAdES-B-LT)
- **Thin HTTP wrapper**: Generic `post()` and `get()` methods with automatic JWT auth and polling

## Installation

```bash
npm install @factpulse/sdk
# or
yarn add @factpulse/sdk
```

## Quick Start

```typescript
import { FactPulseClient } from '@factpulse/sdk/helpers';
import * as fs from 'fs';

// Create the client
const client = new FactPulseClient({
  email: 'your_email@example.com',
  password: 'your_password',
  clientUid: 'your-client-uuid', // From dashboard: Configuration > Clients
});

// Read your source PDF
const pdfB64 = fs.readFileSync('source_invoice.pdf').toString('base64');

// Generate Factur-X and submit to PDP in one call
const result = await client.post('processing/invoices/submit-complete-async', {
  invoiceData: {
    number: 'INV-2025-001',
    supplier: {
      siret: '12345678901234',
      iban: 'FR7630001007941234567890185',
      routing_address: '12345678901234',
    },
    recipient: {
      siret: '98765432109876',
      routing_address: '98765432109876',
    },
    lines: [
      {
        description: 'Consulting services',
        quantity: 10,
        unitPrice: 100.0,
        vatRate: 20.0,
      },
    ],
  },
  sourcePdf: pdfB64,
  profile: 'EN16931',
  destination: { type: 'afnor' },
});

// PDF is in result.content (auto-polled, auto-decoded from base64)
fs.writeFileSync('facturx_invoice.pdf', result.content);

console.log(`Flow ID: ${result.afnorResult?.flowId}`);
```

## API Methods

The SDK provides two generic methods that map directly to API endpoints:

```typescript
// POST /api/v1/{path}
const result = await client.post('path/to/endpoint', { key1: value1, key2: value2 });

// GET /api/v1/{path}
const result = await client.get('path/to/endpoint', { param1: value1 });
```

### Common Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `processing/invoices/submit-complete-async` | POST | Generate Factur-X + submit to PDP |
| `processing/generate-invoice` | POST | Generate Factur-X XML or PDF |
| `processing/validate-xml` | POST | Validate Factur-X XML |
| `processing/validate-facturx-pdf` | POST | Validate Factur-X PDF |
| `processing/sign-pdf` | POST | Sign PDF with certificate |
| `afnor/flow/v1/flows` | POST | Submit flow to AFNOR PDP |
| `afnor/incoming-flows/{flow_id}` | GET | Get incoming invoice |
| `chorus-pro/factures/soumettre` | POST | Submit to Chorus Pro |

## Webhooks

Instead of polling, you can receive results via webhook by adding `callbackUrl`:

```typescript
// Submit with webhook - returns immediately
const result = await client.post('processing/invoices/submit-complete-async', {
  invoiceData,
  sourcePdf: pdfB64,
  destination: { type: 'afnor' },
  callbackUrl: 'https://your-server.com/webhook/factpulse',
  webhookMode: 'INLINE', // or 'DOWNLOAD_URL'
});

const taskId = result.taskId;
// Result will be POSTed to your webhook URL
```

### Webhook Receiver Example (Express.js)

```typescript
import express from 'express';
import crypto from 'crypto';

const app = express();
app.use(express.json({ verify: (req, res, buf) => (req.rawBody = buf) }));

const WEBHOOK_SECRET = 'your-shared-secret';

function verifySignature(payload: Buffer, signature: string): boolean {
  if (!signature.startsWith('sha256=')) return false;
  const expected = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature.slice(7)),
    Buffer.from(expected)
  );
}

app.post('/webhook/factpulse', (req, res) => {
  const signature = req.headers['x-webhook-signature'] as string || '';
  if (!verifySignature(req.rawBody, signature)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  const event = req.body;
  const eventType = event.event_type;
  const data = event.data;

  if (eventType === 'submission.completed') {
    console.log(`Invoice submitted: ${data.afnorResult?.flowId}`);
  } else if (eventType === 'submission.failed') {
    console.log(`Submission failed: ${data.error}`);
  }

  res.json({ status: 'received' });
});

app.listen(3000);
```

### Webhook Event Types

| Event | Description |
|-------|-------------|
| `generation.completed` | Factur-X generated successfully |
| `generation.failed` | Generation failed |
| `validation.completed` | Validation passed |
| `validation.failed` | Validation failed |
| `signature.completed` | PDF signed |
| `submission.completed` | Submitted to PDP/Chorus |
| `submission.failed` | Submission failed |

## Zero-Storage Mode

Pass PDP credentials directly in the request (no server-side storage):

```typescript
const result = await client.post('processing/invoices/submit-complete-async', {
  invoiceData,
  sourcePdf: pdfB64,
  destination: {
    type: 'afnor',
    flowServiceUrl: 'https://api.pdp.example.com/flow/v1',
    tokenUrl: 'https://auth.pdp.example.com/oauth/token',
    clientId: 'your_pdp_client_id',
    clientSecret: 'your_pdp_client_secret',
  },
});
```

## Error Handling

```typescript
import { FactPulseClient, FactPulseError } from '@factpulse/sdk/helpers';

try {
  const result = await client.post('processing/validate-xml', { xmlContent });
} catch (e) {
  if (e instanceof FactPulseError) {
    console.log(`Error: ${e.message}`);
    console.log(`Status code: ${e.statusCode}`);
    console.log(`Details: ${e.details}`); // Validation errors list
  }
}
```

## Resources

- **API Documentation**: https://factpulse.fr/api/facturation/documentation
- **Support**: contact@factpulse.fr

## License

MIT License - Copyright (c) 2025 FactPulse
