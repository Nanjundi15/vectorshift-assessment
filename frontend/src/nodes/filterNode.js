// filterNode.js

import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      subtitle="Conditional pass-through"
      icon="🔍"
      accent="#0891b2"
      inputs={[{ id: 'input', label: 'in' }]}
      outputs={[
        { id: 'true', label: 'true' },
        { id: 'false', label: 'false' },
      ]}
      fields={[
        {
          name: 'condition',
          label: 'Condition',
          type: 'select',
          options: ['Contains', 'Equals', 'Greater Than', 'Less Than', 'Is Empty'],
          defaultValue: data?.condition || 'Contains',
        },
        {
          name: 'value',
          label: 'Value',
          type: 'text',
          placeholder: 'Comparison value',
          defaultValue: data?.value || '',
        },
      ]}
    />
  );
};
