from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.ontology_router import (
    router
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "ok"}

app.include_router(router)