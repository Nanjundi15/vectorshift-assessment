// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      subtitle="Large Language Model"
      icon="🤖"
      accent="#8b5cf6"
      inputs={[
        { id: 'system', label: 'system' },
        { id: 'prompt', label: 'prompt' },
      ]}
      outputs={[{ id: 'response', label: 'response' }]}
      fields={[
        {
          name: 'model',
          label: 'Model',
          type: 'select',
          options: ['gpt-4o', 'gpt-4o-mini', 'claude-sonnet', 'gemini-pro'],
          defaultValue: data?.model || 'gpt-4o-mini',
        },
      ]}
    >
      <p style={{ margin: 0, fontSize: 11, color: '#94a3b8' }}>
        Combines a system prompt and user prompt to generate a response.
      </p>
    </BaseNode>
  );
};
