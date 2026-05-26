"use client"

import { useEffect, useState } from "react"
import OntologyGraph from "@/components/OntologyGraph"

import {
    getOntologyGraph
} from "@/services/connectOntologyApi"


export default function Home() {

    const [elements, setElements] = useState([])

    useEffect(() => {

        async function loadGraph() {

            const graph = await getOntologyGraph()

            const formattedElements = [
                ...graph.nodes,
                ...graph.edges
            ];
            
            setElements(formattedElements)

        }

        loadGraph();

    }, [])

    return (
      <main>
        <OntologyGraph elements={elements} />
      </main>
    )
}