// textNode.js

import { useState, useEffect, useRef, useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import './BaseNode.css';
import './textNode.css';

// Matches {{ variableName }} where variableName is a valid JS identifier
const VARIABLE_REGEX = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

const extractVariables = (text) => {
  const matches = new Set();
  let match;
  // Reset regex state since it's global
  const regex = new RegExp(VARIABLE_REGEX);
  while ((match = regex.exec(text)) !== null) {
    matches.add(match[1]);
  }
  return Array.from(matches);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text ?? '{{input}}');
  const [variables, setVariables] = useState(extractVariables(text));
  const [dimensions, setDimensions] = useState({ width: 240, height: 'auto' });

  const textareaRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Auto-resize: grow the textarea (and the node) to fit content
  const resize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;

    // Reset height to compute the natural scrollHeight
    el.style.height = 'auto';
    const newHeight = Math.max(36, el.scrollHeight);
    el.style.height = `${newHeight}px`;

    // Compute a width based on the longest line, clamped to a sane range
    const lines = el.value.split('\n');
    const longest = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const newWidth = Math.min(480, Math.max(240, longest * 7.5 + 48));

    setDimensions({ width: newWidth, height: newHeight });
  }, []);

  useEffect(() => {
    resize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    updateNodeField(id, 'text', value);
    setVariables(extractVariables(value));
    // Defer resize so the textarea has the new value rendered
    requestAnimationFrame(resize);
  };

  const handleCount = Math.max(variables.length, 1);

  return (
    <div
      className="base-node text-node"
      style={{ width: dimensions.width, '--accent-color': '#10b981' }}
    >
      {/* Dynamically generated input handles for each {{variable}} */}
      {variables.map((varName, index) => (
        <Handle
          key={varName}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          className="base-node-handle"
          style={{
            top: `${((index + 1) / (handleCount + 1)) * 100}%`,
          }}
        >
          <span className="base-node-handle-label base-node-handle-label-left text-node-var-label">
            {varName}
          </span>
        </Handle>
      ))}

      <div className="base-node-header">
        <span className="base-node-icon">📝</span>
        <div className="base-node-titles">
          <span className="base-node-title">Text</span>
          <span className="base-node-subtitle">
            {variables.length > 0
              ? `${variables.length} variable${variables.length > 1 ? 's' : ''}`
              : 'Static text / template'}
          </span>
        </div>
      </div>

      <div className="base-node-body">
        <div className="base-node-field">
          <label className="base-node-label" htmlFor={`${id}-text`}>
            Text
          </label>
          <textarea
            id={`${id}-text`}
            ref={textareaRef}
            className="base-node-input base-node-textarea text-node-textarea"
            value={text}
            onChange={handleTextChange}
            style={{ height: dimensions.height }}
            placeholder="Enter text. Use {{variableName}} to create inputs."
          />
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="base-node-handle"
      />
    </div>
  );
};
