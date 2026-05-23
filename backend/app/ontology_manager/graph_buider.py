def build_graph(ontology):

    nodes: list = []
    edges: list = []

    # CLASSES
    for cls in ontology.classes():
        print(cls)

        nodes.append({
            "data": {
                "id": cls.name,
                "label": cls.name,
                "kind": "class"
            }
        })

    # INDIVÍDUOS
    for ind in ontology.individuals():
        print(ind)

        nodes.append({
            "data": {
                "id": ind.name,
                "label": ind.name,
                "kind": "individual"
            }
        })

        # RELAÇÕES
        for prop in ind.get_properties():

            values = prop[ind]

            for value in values:

                if hasattr(value, "name"):

                    edges.append({
                        "data": {
                            "source": ind.name,
                            "target": value.name,
                            "label": prop.name
                        }
                    })

    return {
        "nodes": nodes,
        "edges": edges
    }