# VectorShift Frontend Technical Assessment

This project implements all four parts of the assessment:

1. **Node Abstraction** — `frontend/src/nodes/BaseNode.js` is a generic, configurable
   node component (handles, header, fields). All original nodes (Input, Output, LLM, Text)
   and 5 new nodes (Math, Filter, Delay, API Request, Note) are built on top of it.
2. **Styling** — A unified design system (colors, spacing, typography, shadows) applied
   across the toolbar, canvas, nodes, and submit bar.
3. **Text Node Logic** — The Text node auto-resizes (width & height) as you type, and
   any `{{variableName}}` in the text dynamically creates a corresponding input Handle
   on the left side of the node.
4. **Backend Integration** — `submit.js` POSTs `{ nodes, edges }` to
   `/pipelines/parse`. The FastAPI backend computes `num_nodes`, `num_edges`, and
   `is_dag` (cycle detection via DFS) and returns them; the frontend shows the result
   in an alert.

## Running the backend

```bash
cd backend
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

The backend runs at `http://localhost:8000`.

## Running the frontend

```bash
cd frontend
npm install
npm start
```

The frontend runs at `http://localhost:3000` and is configured to call the backend
at `http://localhost:8000` (override with `REACT_APP_API_BASE_URL` in a `.env` file
if needed).

## Using the app

1. Drag nodes from the toolbar onto the canvas.
2. Connect handles to build a pipeline.
3. Type text in a Text node and try `{{variable}}` syntax — a new handle appears.
4. Click **Submit Pipeline** to see the node/edge counts and DAG check result.
