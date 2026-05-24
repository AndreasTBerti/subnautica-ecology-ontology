from owlready2 import get_ontology
from owlready2.namespace import Ontology
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
RAW_ONTOLOGY_PATH = BASE_DIR / "data" / "raw_data" / "subnautica-ecology-ontology-base.owl"


def load_ontology() -> Ontology:
    return get_ontology(str(RAW_ONTOLOGY_PATH)).load()


if __name__ == "__main__":
    print(load_ontology())