// inputNode.js

import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      subtitle="Pipeline entry point"
      icon="⬇️"
      accent="#0ea5e9"
      outputs={[{ id: 'value', label: '' }]}
      fields={[
        {
          name: 'inputName',
          label: 'Name',
          type: 'text',
          defaultValue: data?.inputName || id.replace('customInput-', 'input_'),
        },
        {
          name: 'inputType',
          label: 'Type',
          type: 'select',
          options: ['Text', 'File'],
          defaultValue: data?.inputType || 'Text',
        },
      ]}
    />
  );
};
