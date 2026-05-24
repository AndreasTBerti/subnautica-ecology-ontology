import json
from owlready2.namespace import Ontology
from pathlib import Path

BASE_DIR: Path = Path(__file__).resolve().parent.parent
JSON_OUTPUT_PATH: Path = BASE_DIR / "data" / "processed_data" / "ontology-graph.json"

def export_json_graph(ontology: Ontology) -> None:

    nodes: list = []
    edges: list = []
    added_nodes: set = set()

    # getting classes
    for cls in ontology.classes():

        node_id = cls.name
        if node_id not in added_nodes:
            nodes.append({
                "data": {
                    "id": node_id,
                    "label": node_id,
                    "kind": "class"
                }
            })

            added_nodes.add(node_id)

    # getting individuals
    for individual in ontology.individuals():

        node_id = individual.name
        if node_id not in added_nodes:
            nodes.append({
                "data": {
                    "id": node_id,
                    "label": node_id,
                    "kind": "individual"
                }
            })

            added_nodes.add(node_id)

    # getting object properties
    for prop in ontology.object_properties():

        for source, target in prop.get_relations():
            edges.append({
                "data": {
                    "source": source.name,
                    "target": target.name,
                    "label": prop.name
                }
            })

    # save json
    with open(JSON_OUTPUT_PATH, 'w', encoding="utf-8") as file:

        json.dump(
            {
                "nodes": nodes,
                "edges": edges
            },
            file,
            indent=4,
            ensure_ascii=False
        )


if __name__ == "__main__":
    pass