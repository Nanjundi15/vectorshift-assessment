// apiNode.js

import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="API Request"
      subtitle="Call an external endpoint"
      icon="🌐"
      accent="#2563eb"
      inputs={[{ id: 'body', label: 'body' }]}
      outputs={[{ id: 'response', label: 'response' }]}
      fields={[
        {
          name: 'method',
          label: 'Method',
          type: 'select',
          options: ['GET', 'POST', 'PUT', 'DELETE'],
          defaultValue: data?.method || 'GET',
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          placeholder: 'https://api.example.com/endpoint',
          defaultValue: data?.url || '',
        },
      ]}
    />
  );
};
