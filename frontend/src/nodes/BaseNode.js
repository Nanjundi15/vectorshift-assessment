
import { useState, useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import './BaseNode.css';

const computeHandlePosition = (index, total) => {
  if (total <= 1) return '50%';
  const pad = 18; // percentage padding from top/bottom
  const usable = 100 - pad * 2;
  return `${pad + (usable * index) / (total - 1)}%`;
};

export const BaseNode = ({
  id,
  data = {},
  title,
  subtitle,
  icon,
  inputs = [],
  outputs = [],
  fields = [],
  accent = '#6366f1',
  width = 220,
  minHeight,
  children,
  bodyStyle = {},
}) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Local state initialized from data, falling back to field defaults
  const initialState = {};
  fields.forEach((f) => {
    initialState[f.name] =
      data?.[f.name] !== undefined ? data[f.name] : f.defaultValue;
  });
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(
    (name, value) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      updateNodeField(id, name, value);
    },
    [id, updateNodeField]
  );

  return (
    <div
      className="base-node"
      style={{ width, minHeight, '--accent-color': accent }}
    >
      {/* Input / target handles */}
      {inputs.map((handle, index) => (
        <Handle
          key={`in-${handle.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${handle.id}`}
          className="base-node-handle"
          style={{ top: computeHandlePosition(index, inputs.length) }}
        >
          {handle.label && (
            <span className="base-node-handle-label base-node-handle-label-left">
              {handle.label}
            </span>
          )}
        </Handle>
      ))}

      {/* Header */}
      <div className="base-node-header">
        {icon && <span className="base-node-icon">{icon}</span>}
        <div className="base-node-titles">
          <span className="base-node-title">{title}</span>
          {subtitle && <span className="base-node-subtitle">{subtitle}</span>}
        </div>
      </div>

      {/* Body: configurable fields */}
      <div className="base-node-body" style={bodyStyle}>
        {fields.map((field) => (
          <div className="base-node-field" key={field.name}>
            {field.label && (
              <label className="base-node-label" htmlFor={`${id}-${field.name}`}>
                {field.label}
              </label>
            )}

            {field.type === 'select' ? (
              <select
                id={`${id}-${field.name}`}
                className="base-node-input"
                value={values[field.name] ?? ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={`${id}-${field.name}`}
                className="base-node-input base-node-textarea"
                value={values[field.name] ?? ''}
                placeholder={field.placeholder}
                rows={field.rows || 2}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === 'number' ? (
              <input
                id={`${id}-${field.name}`}
                type="number"
                className="base-node-input"
                value={values[field.name] ?? ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === 'checkbox' ? (
              <input
                id={`${id}-${field.name}`}
                type="checkbox"
                className="base-node-checkbox"
                checked={!!values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.checked)}
              />
            ) : (
              <input
                id={`${id}-${field.name}`}
                type="text"
                className="base-node-input"
                value={values[field.name] ?? ''}
                placeholder={field.placeholder}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
          </div>
        ))}

        {/* Arbitrary custom content (used by TextNode etc.) */}
        {children}
      </div>

      {/* Output / source handles */}
      {outputs.map((handle, index) => (
        <Handle
          key={`out-${handle.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${handle.id}`}
          className="base-node-handle"
          style={{ top: computeHandlePosition(index, outputs.length) }}
        >
          {handle.label && (
            <span className="base-node-handle-label base-node-handle-label-right">
              {handle.label}
            </span>
          )}
        </Handle>
      ))}
    </div>
  );
};
