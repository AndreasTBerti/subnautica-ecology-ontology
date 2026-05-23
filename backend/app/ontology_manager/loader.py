from pathlib import Path
from owlready2 import get_ontology

BASE_DIR = Path(__file__).resolve().parents[2]

ONTOLOGY_PATH = BASE_DIR / "data" / "raw_data" / "subnautica-ecology-ontology-base.owl"

def load_ontology():
    ontology = get_ontology(str(ONTOLOGY_PATH)).load()
    print("loader: ",list(ontology.individuals()))
    return ontology