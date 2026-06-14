from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI(title="VectorShift Pipeline Backend")

# Allow the React dev server to call this API during local development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://vectorshift-assessment-pm2c-six.vercel.app",
        "https://*.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str
    type: str | None = None
    data: Dict[str, Any] | None = None
    position: Dict[str, Any] | None = None

    class Config:
        extra = "allow"


class Edge(BaseModel):
    id: str | None = None
    source: str
    target: str

    class Config:
        extra = "allow"


class Pipeline(BaseModel):
    nodes: List[Node] = []
    edges: List[Edge] = []


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


def is_directed_acyclic_graph(node_ids: List[str], edges: List[Edge]) -> bool:
    """
    Returns True if the graph formed by `node_ids` and `edges` is a DAG,
    i.e. it contains no directed cycles. Uses an iterative DFS with
    three-color marking (white/gray/black) to detect back edges.
    """
    adjacency: Dict[str, List[str]] = {node_id: [] for node_id in node_ids}
    for edge in edges:
        # Only consider edges between known nodes.
        if edge.source in adjacency and edge.target in adjacency:
            adjacency[edge.source].append(edge.target)

    WHITE, GRAY, BLACK = 0, 1, 2
    color = {node_id: WHITE for node_id in node_ids}

    def has_cycle(start: str) -> bool:
        # Iterative DFS to avoid recursion-depth issues on large graphs.
        stack = [(start, iter(adjacency[start]))]
        color[start] = GRAY

        while stack:
            node, neighbours = stack[-1]
            found_next = False

            for neighbour in neighbours:
                if color[neighbour] == GRAY:
                    return True  # back edge -> cycle
                if color[neighbour] == WHITE:
                    color[neighbour] = GRAY
                    stack.append((neighbour, iter(adjacency[neighbour])))
                    found_next = True
                    break

            if not found_next:
                color[node] = BLACK
                stack.pop()

        return False

    for node_id in node_ids:
        if color[node_id] == WHITE:
            if has_cycle(node_id):
                return False

    return True


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    node_ids = [node.id for node in pipeline.nodes]
    num_nodes = len(node_ids)
    num_edges = len(pipeline.edges)
    dag = is_directed_acyclic_graph(node_ids, pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": dag,
    }
