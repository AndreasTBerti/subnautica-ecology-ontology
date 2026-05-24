from owlready2 import sync_reasoner
from owlready2.namespace import Ontology
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
INFERRED_ONTOLOGY_PATH = BASE_DIR / "data" / "inferred_data" / "subnautica-ecology-ontology-inferred.owl"

def apply_reasoner(ontology: Ontology) -> Ontology:

    with ontology:
        sync_reasoner()

    return ontology


def save_inferred_ontology(ontology: Ontology):

    ontology.save(
        file=str(INFERRED_ONTOLOGY_PATH),
        format="rdfxml"
    )


if __name__ == "__main__":
    pass