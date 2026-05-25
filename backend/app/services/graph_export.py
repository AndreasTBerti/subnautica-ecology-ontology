import json
from pathlib import Path

BASE_DIR: Path = Path(__file__).resolve().parent.parent.parent
JSON_GRAPH_PATH: Path = BASE_DIR / "data" / "processed_data" / "ontology-graph.json"

def export_json_graph() -> dict:
    with open(JSON_GRAPH_PATH, 'r', encoding="utf-8") as file:
        return json.load(file)