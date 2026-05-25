from ontology_manager.graph_builder import build_json_graph
from ontology_manager.loader import load_ontology
from ontology_manager.reasoner import apply_reasoner, save_inferred_ontology

def exec_pipeline():
    ontology = load_ontology()
    ontology = apply_reasoner(ontology)
    save_inferred_ontology(ontology)
    build_json_graph(ontology)


if __name__ == "__main__":
    exec_pipeline()