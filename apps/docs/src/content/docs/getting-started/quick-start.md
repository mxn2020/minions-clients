---
title: Quick Start
description: Get up and running with Minions Clients in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-clients/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_clients import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
clients info
```
