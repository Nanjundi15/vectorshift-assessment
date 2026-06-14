// mathNode.js

import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Math"
      subtitle="Arithmetic operation"
      icon="➗"
      accent="#ef4444"
      inputs={[
        { id: 'a', label: 'a' },
        { id: 'b', label: 'b' },
      ]}
      outputs={[{ id: 'result', label: 'result' }]}
      fields={[
        {
          name: 'operation',
          label: 'Operation',
          type: 'select',
          options: ['Add', 'Subtract', 'Multiply', 'Divide'],
          defaultValue: data?.operation || 'Add',
        },
      ]}
    />
  );
};
