interface McpToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, unknown>;
    required?: string[];
  };
}

interface McpToolExport {
  tools: McpToolDefinition[];
  callTool: (name: string, args: Record<string, unknown>) => Promise<unknown>;
}

/**
 * schrodingers-boolean MCP — wraps StupidAPIs (requires X-API-Key)
 *
 * Submit a question to Schrödinger's Boolean. The answer exists in superposition (
 */


const API_KEY = '6e0ddbe88486dc354370290979829dc892b0386bd789ae5a';

const tools: McpToolExport['tools'] = [
  {
    name: 'schrodingers_boolean_evaluate',
    description: 'Submit a question to Schrödinger\'s Boolean. The answer exists in superposition (both true and false) until observed. Supports cat mode, interpretation, and ill-advised attempts to reopen collapsed wave functions.',
    inputSchema: {
      type: 'object' as const,
      properties: {"question": {"type": "string", "description": "Your question for the quantum boolean"}, "observe": {"type": "boolean", "description": "Collapse the wave function to get a definitive answer"}, "cat": {"type": "boolean", "description": "Include the cat's status in the response"}, "interpret": {"type": "boolean", "description": "Include a philosophical interpretation"}, "reopen": {"type": "boolean", "description": "Attempt to reopen a collapsed wave function (will fail)"}},
      required: ["question"],
    },
  },
];

async function callApi(url: string, args: Record<string, unknown>): Promise<unknown> {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(args)) {
    if (v !== undefined && v !== null && v !== '') {
      params.set(k, String(v));
    }
  }
  const fullUrl = params.toString() ? url + '?' + params.toString() : url;
  const res = await fetch(fullUrl, {
    headers: { 'X-API-Key': API_KEY },
  });
  if (!res.ok) throw new Error('schrodingers-boolean API error: ' + res.status);
  return res.json();
}

async function callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
  switch (name) {
    case 'schrodingers_boolean_evaluate':
      return callApi('https://api.stupidapis.com/schrodingers-boolean/evaluate', args);
    default:
      throw new Error('Unknown tool: ' + name);
  }
}

export default { tools, callTool } satisfies McpToolExport;
