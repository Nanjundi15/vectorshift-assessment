// toolbar.js

import { DraggableNode } from './draggableNode';
import './toolbar.css';

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-title">VectorShift Pipeline Builder</div>
      <div className="toolbar-nodes">
        <DraggableNode type="customInput" label="Input" icon="⬇️" accent="#0ea5e9" />
        <DraggableNode type="llm" label="LLM" icon="🤖" accent="#8b5cf6" />
        <DraggableNode type="customOutput" label="Output" icon="⬆️" accent="#f97316" />
        <DraggableNode type="text" label="Text" icon="📝" accent="#10b981" />
        <DraggableNode type="math" label="Math" icon="➗" accent="#ef4444" />
        <DraggableNode type="filter" label="Filter" icon="🔍" accent="#0891b2" />
        <DraggableNode type="timer" label="Delay" icon="⏱️" accent="#a855f7" />
        <DraggableNode type="api" label="API" icon="🌐" accent="#2563eb" />
        <DraggableNode type="note" label="Note" icon="🗒️" accent="#eab308" />
      </div>
    </div>
  );
};
