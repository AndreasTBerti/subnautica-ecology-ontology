const API_URL = "http://127.0.0.1:8000"

export async function getOntologyGraph() {

    const response = await fetch(
        `${API_URL}/ontology/general-graph`
    )

    return response.json()
}


export async function getFoodWeb() {

    const response = await fetch(
        `${API_URL}/ontology/food-web`
    )

    return response.json()
}