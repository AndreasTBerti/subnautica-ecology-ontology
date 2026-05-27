from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.ontology_router import (
    router
)
from app.services.graph_export import export_json_graph

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ontology/general-graph")
def home():
    return export_json_graph()

app.include_router(router)