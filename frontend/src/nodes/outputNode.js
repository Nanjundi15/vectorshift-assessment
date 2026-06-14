// outputNode.js

import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      subtitle="Pipeline exit point"
      icon="⬆️"
      accent="#f97316"
      inputs={[{ id: 'value', label: '' }]}
      fields={[
        {
          name: 'outputName',
          label: 'Name',
          type: 'text',
          defaultValue: data?.outputName || id.replace('customOutput-', 'output_'),
        },
        {
          name: 'outputType',
          label: 'Type',
          type: 'select',
          options: ['Text', 'Image'],
          defaultValue: data?.outputType || 'Text',
        },
      ]}
    />
  );
};
