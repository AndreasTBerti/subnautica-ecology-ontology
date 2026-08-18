from fastapi import APIRouter

from app.queries.graph_queries import (
    get_food_web,
    get_full_graph
)

router = APIRouter(prefix="/ontology")

@router.get("/food-web")
def food_web():
    return get_food_web()

@router.get("/full-graph")
def full_graph():
    return get_full_graph()
