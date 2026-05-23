from app.ontology_manager.loader import load_ontology
from app.ontology_manager.reasoner import apply_reasoner
from app.ontology_manager.reasoner import save_inferred_ontology

def get_reasoned_ontology():

    ontology = load_ontology()

    ontology = apply_reasoner(ontology)

    save_inferred_ontology(ontology)

    return ontology