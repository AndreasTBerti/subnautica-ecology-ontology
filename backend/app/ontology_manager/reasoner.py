from owlready2 import sync_reasoner
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent

OUTPUT_PATH = BASE_DIR / "data" / "inferred_data" / "inferred_ontology.owl"

def apply_reasoner(ontology):

    with ontology:
        sync_reasoner()

    return ontology


def save_inferred_ontology(ontology):

    ontology.save(
        file = str(OUTPUT_PATH),
        format = "rdfxml"
    )