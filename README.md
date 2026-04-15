# mcp-schrodingers-boolean

schrodingers-boolean MCP — wraps StupidAPIs (requires X-API-Key)

Part of the [Pipeworx](https://pipeworx.io) open MCP gateway.

## Tools

| Tool | Description |
|------|-------------|
| `schrodingers_boolean_evaluate` | Submit a question to Schrödinger\'s Boolean. The answer exists in superposition (both true and false) until observed. Supports cat mode, interpretation, and ill-advised attempts to reopen collapsed wave functions. |

## Quick Start

Add to your MCP client config:

```json
{
  "mcpServers": {
    "schrodingers-boolean": {
      "url": "https://gateway.pipeworx.io/schrodingers-boolean/mcp"
    }
  }
}
```

Or use the CLI:

```bash
npx pipeworx use schrodingers-boolean
```

## License

MIT
