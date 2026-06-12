from app.services.graph_export import export_json_graph

json_graph: dict = export_json_graph()

nodes: dict = json_graph["nodes"]
edges: dict = json_graph["edges"]

outgoing_edges: dict = {}
incoming_edges: dict = {}

# node_index = {
#     node["data"]["id"]: node
#     for node in nodes
# }

# for edge in edges:

#     source = edge["data"]["source"]
#     target = edge["data"]["target"]

#     outgoing_edges.setdefault(source, []).append(edge)
#     incoming_edges.setdefault(target, []).append(edge)

def get_full_graph() -> dict:
    return json_graph

def get_food_web() -> list:

    web: list = []

    for edge in edges:

        if edge["data"]["label"] == "predatorOf":
            web.append(edge)

    return web