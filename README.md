![CI](https://github.com/mxn2020/minions-clients-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-clients

**Client profiles built from job interactions, communications, and contracts**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-clients/sdk minions-sdk

# Python
pip install minions-clients

# CLI (global)
npm install -g @minions-clients/cli
```

---

## CLI

```bash
# Show help
clients --help
```

---

## Python SDK

```python
from minions_clients import create_client

client = create_client()
```

---

## Project Structure

```
minions-clients/
  packages/
    core/           # TypeScript core library (@minions-clients/sdk on npm)
    python/         # Python SDK (minions-clients on PyPI)
    cli/            # CLI tool (@minions-clients/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [clients.minions.help](https://clients.minions.help)
- Blog: [clients.minions.blog](https://clients.minions.blog)
- App: [clients.minions.wtf](https://clients.minions.wtf)

---

## License

[MIT](LICENSE)
