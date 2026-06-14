<div align="center">

<br/>

```
██╗   ██╗███████╗ ██████╗████████╗ ██████╗ ██████╗ ███████╗██╗  ██╗██╗███████╗████████╗
██║   ██║██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝██║  ██║██║██╔════╝╚══██╔══╝
██║   ██║█████╗  ██║        ██║   ██║   ██║██████╔╝███████╗███████║██║█████╗     ██║   
╚██╗ ██╔╝██╔══╝  ██║        ██║   ██║   ██║██╔══██╗╚════██║██╔══██║██║██╔══╝     ██║   
 ╚████╔╝ ███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║███████║██║  ██║██║██║        ██║   
  ╚═══╝  ╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝  
```

### ✦ &nbsp; P I P E L I N E &nbsp; B U I L D E R &nbsp; ✦

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Vercel-black?style=for-the-badge)](https://vectorshift-assessment-pm2c-six.vercel.app)
[![Backend](https://img.shields.io/badge/⚙️_Backend-Render-46E3B7?style=for-the-badge)](https://vectorshift-assessment-1-pe2c.onrender.com)
[![API Docs](https://img.shields.io/badge/📖_API_Docs-Swagger-85EA2D?style=for-the-badge)](https://vectorshift-assessment-1-pe2c.onrender.com/docs)

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![License](https://img.shields.io/badge/License-MIT-gold?style=for-the-badge)](LICENSE)

<br/>

> *A beautifully crafted, production-grade AI pipeline builder — drag, connect, and submit.*

<br/>

---

</div>

<br/>

## ✦ &nbsp; Overview

**VectorShift Pipeline Builder** is a full-stack, interactive drag-and-drop pipeline editor built as part of the VectorShift Frontend Technical Assessment. It demonstrates a clean component abstraction system, real-time UI logic, polished design, and seamless backend integration — all wired together into a single, deployable application.

<br/>

---

<br/>

## ✦ &nbsp; Feature Highlights

<br/>

<table>
<tr>
<td width="50%">

### 🧩 &nbsp; Node Abstraction
A single `BaseNode` component powers **all 9 node types**. Adding a new node takes fewer than 20 lines. Handles, headers, fields, and accent theming are all prop-driven.

</td>
<td width="50%">

### 🎨 &nbsp; Unified Design System
Consistent accent colors, shadows, typography, hover effects, and smooth transitions across the entire app — toolbar, canvas, nodes, edges, and submit bar.

</td>
</tr>
<tr>
<td width="50%">

### 📝 &nbsp; Smart Text Node
The Text node **auto-resizes** as you type. Write `{{variableName}}` and a live input handle instantly appears — no refresh, no click, just magic.

</td>
<td width="50%">

### 🔗 &nbsp; Backend Integration
Submit your pipeline to a FastAPI backend that returns node count, edge count, and a **DAG validity check** powered by iterative depth-first search.

</td>
</tr>
</table>

<br/>

---

<br/>

## ✦ &nbsp; Node Library

<br/>

| &nbsp; | Node | Description | Accent |
|--------|------|-------------|--------|
| ⬇️ | **Input** | Pipeline entry point — name and type configurable | `#0ea5e9` Sky Blue |
| ⬆️ | **Output** | Pipeline exit point — name and type configurable | `#f97316` Orange |
| 🤖 | **LLM** | Large Language Model node with model selector | `#8b5cf6` Violet |
| 📝 | **Text** | Dynamic text template with live `{{variable}}` handles | `#10b981` Emerald |
| ➗ | **Math** | Arithmetic operations — Add, Subtract, Multiply, Divide | `#ef4444` Red |
| 🔍 | **Filter** | Conditional branching — true / false outputs | `#0891b2` Cyan |
| ⏱️ | **Delay** | Pause pipeline execution for a configurable duration | `#a855f7` Purple |
| 🌐 | **API** | HTTP request node — GET, POST, PUT, DELETE | `#2563eb` Blue |
| 🗒️ | **Note** | Documentation node — annotate your pipeline | `#eab308` Amber |

<br/>

---

<br/>

## ✦ &nbsp; Architecture

```
vectorshift-assessment/
│
├── 📁 frontend/                   # React application
│   └── src/
│       ├── 🧩 nodes/
│       │   ├── BaseNode.js        # ★ Core abstraction — all nodes extend this
│       │   ├── BaseNode.css       # Shared node design system
│       │   ├── inputNode.js       # Original nodes (refactored)
│       │   ├── outputNode.js
│       │   ├── llmNode.js
│       │   ├── textNode.js        # ★ Dynamic resize + {{variable}} handles
│       │   ├── mathNode.js        # New nodes ↓
│       │   ├── filterNode.js
│       │   ├── timerNode.js
│       │   ├── apiNode.js
│       │   └── noteNode.js
│       ├── App.js                 # Root layout
│       ├── ui.js                  # ReactFlow canvas + drag-drop logic
│       ├── toolbar.js             # Node palette
│       ├── submit.js              # ★ Backend integration + alert
│       └── store.js               # Zustand global state
│
└── 📁 backend/                    # FastAPI application
    ├── main.py                    # ★ /pipelines/parse + DAG detection
    └── requirements.txt
```

<br/>

---

<br/>

## ✦ &nbsp; Getting Started

<br/>

### Prerequisites

```bash
node --version   # v18+
python --version # v3.10+
```

<br/>

### 1 — Clone the Repository

```bash
git clone https://github.com/Nanjundi15/vectorshift-assessment.git
cd vectorshift-assessment
```

<br/>

### 2 — Start the Backend

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # macOS / Linux

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```

> Backend runs at **`http://localhost:8000`**
> Interactive API docs at **`http://localhost:8000/docs`**

<br/>

### 3 — Start the Frontend

```bash
cd frontend
npm install
npm start
```

> App runs at **`http://localhost:3000`**

<br/>

---

<br/>

## ✦ &nbsp; API Reference

<br/>

### `GET /`
Health check — returns `{ "Ping": "Pong" }`

<br/>

### `POST /pipelines/parse`

Analyzes the submitted pipeline.

**Request body:**
```json
{
  "nodes": [ { "id": "customInput-1" }, { "id": "llm-1" } ],
  "edges": [ { "source": "customInput-1", "target": "llm-1" } ]
}
```

**Response:**
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

<br/>

| Field | Type | Description |
|-------|------|-------------|
| `num_nodes` | `int` | Total node count in the pipeline |
| `num_edges` | `int` | Total edge count in the pipeline |
| `is_dag` | `bool` | `true` if no cycles detected, `false` otherwise |

<br/>

---

<br/>

## ✦ &nbsp; DAG Detection — How it Works

The backend uses an **iterative depth-first search** with three-color marking to detect cycles:

```
WHITE  →  Node not yet visited
GRAY   →  Node currently in the DFS stack (being explored)
BLACK  →  Node fully processed
```

If a `GRAY` node is encountered during traversal, a **back edge** (cycle) has been found → `is_dag: false`.

This correctly handles:

- ✅ &nbsp; Linear chains &nbsp;`(A → B → C)`
- ✅ &nbsp; Diamond graphs &nbsp;`(A → B, A → C, B → D, C → D)`
- ✅ &nbsp; Disconnected components &nbsp;`(A → B) &nbsp; (C → D)`
- ✅ &nbsp; Empty pipelines
- ❌ &nbsp; Self-loops &nbsp;`(A → A)`
- ❌ &nbsp; Two-node cycles &nbsp;`(A → B → A)`
- ❌ &nbsp; Large cycles &nbsp;`(A → B → C → A)`

<br/>

---

<br/>

## ✦ &nbsp; Text Node — Live Demo

Type into the Text node and watch the magic:

```
Hello {{name}}, your order {{orderId}} is ready!
```

**What happens:**
1. `{{name}}` → 🟢 Handle `name` appears on the left instantly
2. `{{orderId}}` → 🟢 Handle `orderId` appears below it
3. The node **grows wider** as your line gets longer
4. The node **grows taller** as you add new lines
5. Delete the `{{variable}}` → the handle disappears

<br/>

---

<br/>

## ✦ &nbsp; Test Cases

Run these in the Swagger UI at `/docs` or via PowerShell:

```powershell
# ✅ Valid 4-node pipeline → is_dag: true
curl.exe -X POST http://127.0.0.1:8000/pipelines/parse -H "Content-Type: application/json" -d '{"nodes":[{"id":"a"},{"id":"b"},{"id":"c"},{"id":"d"}],"edges":[{"source":"a","target":"b"},{"source":"b","target":"c"},{"source":"c","target":"d"}]}'

# ❌ Self-loop → is_dag: false
curl.exe -X POST http://127.0.0.1:8000/pipelines/parse -H "Content-Type: application/json" -d '{"nodes":[{"id":"a"}],"edges":[{"source":"a","target":"a"}]}'

# ✅ Diamond graph → is_dag: true
curl.exe -X POST http://127.0.0.1:8000/pipelines/parse -H "Content-Type: application/json" -d '{"nodes":[{"id":"a"},{"id":"b"},{"id":"c"},{"id":"d"}],"edges":[{"source":"a","target":"b"},{"source":"a","target":"c"},{"source":"b","target":"d"},{"source":"c","target":"d"}]}'

# ❌ 3-node cycle → is_dag: false
curl.exe -X POST http://127.0.0.1:8000/pipelines/parse -H "Content-Type: application/json" -d '{"nodes":[{"id":"a"},{"id":"b"},{"id":"c"}],"edges":[{"source":"a","target":"b"},{"source":"b","target":"c"},{"source":"c","target":"a"}]}'

# ✅ Empty pipeline → is_dag: true
curl.exe -X POST http://127.0.0.1:8000/pipelines/parse -H "Content-Type: application/json" -d '{"nodes":[],"edges":[]}'
```

<br/>

---

<br/>

## ✦ &nbsp; Deployment

<br/>

| Service | Platform | URL |
|---------|----------|-----|
| 🌐 Frontend | Vercel | [`vectorshift-assessment-pm2c-six.vercel.app`](https://vectorshift-assessment-pm2c-six.vercel.app) |
| ⚙️ Backend | Render | [`vectorshift-assessment-1-pe2c.onrender.com`](https://vectorshift-assessment-1-pe2c.onrender.com) |
| 📖 API Docs | Render | [`vectorshift-assessment-1-pe2c.onrender.com/docs`](https://vectorshift-assessment-1-pe2c.onrender.com/docs) |

<br/>

> ⚠️ **Note:** The backend runs on Render's free tier and may take **30–60 seconds** to wake up after inactivity. Open the backend URL directly first if Submit Pipeline times out.

<br/>

To connect your deployed frontend to the backend, set this environment variable in Vercel:

```
REACT_APP_API_BASE_URL = https://vectorshift-assessment-1-pe2c.onrender.com
```

<br/>

---

<br/>

## ✦ &nbsp; Tech Stack

<br/>

<div align="center">

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Flow Canvas | ReactFlow |
| State Management | Zustand |
| Styling | CSS3 + CSS Variables |
| Backend | FastAPI + Python |
| Data Validation | Pydantic v2 |
| Graph Algorithm | Iterative DFS |
| Deployment (FE) | Vercel |
| Deployment (BE) | Render |

</div>

<br/>

---

<br/>

## ✦ &nbsp; Author

<br/>

<div align="center">

**Nanjundeshwara K**

*Frontend Engineer · AI/ML Engineer · Azure Certified Developer*

[![GitHub](https://img.shields.io/badge/GitHub-Nanjundi15-181717?style=for-the-badge&logo=github)](https://github.com/Nanjundi15)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-nanjundi--k-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/nanjundi-k)
[![Email](https://img.shields.io/badge/Email-nanjundi9731@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nanjundi9731@gmail.com)

<br/>

---

<br/>

*Built with ♥ for the VectorShift Frontend Technical Assessment*

<br/>

</div>