from app.services.ontology_service import get_reasoned_ontology
from app.ontology_manager.graph_buider import build_graph

def generate_graph():

    ontology = get_reasoned_ontology()

    return build_graph(ontology)