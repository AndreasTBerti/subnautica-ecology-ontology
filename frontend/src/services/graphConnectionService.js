const API_URL = "http://localhost:8000";


export async function getGraph(graphType)
{
    const response = await fetch(
        `${API_URL}/ontology/${graphType}`
    );

    return await response.json();
}