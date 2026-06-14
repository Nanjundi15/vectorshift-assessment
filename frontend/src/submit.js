
import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import './submit.css';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/pipelines/parse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const result = await response.json();
      const { num_nodes, num_edges, is_dag } = result;

      alert(
        `Pipeline Analysis\n\n` +
          `Number of Nodes: ${num_nodes}\n` +
          `Number of Edges: ${num_edges}\n` +
          `Is a DAG: ${is_dag ? 'Yes ✅' : 'No ❌'}`
      );
    } catch (error) {
      alert(
        `Failed to reach the backend at ${API_BASE_URL}.\n` +
          `Make sure the FastAPI server is running (uvicorn main:app --reload).\n\n` +
          `Error: ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="submit-bar">
      <button className="submit-button" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Pipeline'}
      </button>
    </div>
  );
};
