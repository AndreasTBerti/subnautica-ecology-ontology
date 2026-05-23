from fastapi import APIRouter
from app.services.graph_service import generate_graph

router = APIRouter()

@router.get("/graph")
def get_graph():
    print("Rota Executada")
    return generate_graph()