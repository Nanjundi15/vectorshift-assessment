// noteNode.js

import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Note"
      subtitle="Documentation / comment"
      icon="🗒️"
      accent="#eab308"
      fields={[
        {
          name: 'note',
          label: '',
          type: 'textarea',
          rows: 3,
          placeholder: 'Add a note about this part of the pipeline...',
          defaultValue: data?.note || '',
        },
      ]}
    />
  );
};
