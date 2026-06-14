// timerNode.js

import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Delay"
      subtitle="Pause pipeline execution"
      icon="⏱️"
      accent="#a855f7"
      inputs={[{ id: 'input', label: '' }]}
      outputs={[{ id: 'output', label: '' }]}
      fields={[
        {
          name: 'duration',
          label: 'Duration (seconds)',
          type: 'number',
          defaultValue: data?.duration ?? 1,
        },
      ]}
    />
  );
};
