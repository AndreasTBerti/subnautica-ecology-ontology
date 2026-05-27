from fastapi import APIRouter
from app.services.graph_queries import (
    get_food_web
)

router = APIRouter()

@router.get("/ontology/food-web")
def food_web():
    return get_food_web()