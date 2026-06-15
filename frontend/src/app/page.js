"use client"

import { useState } from "react";

import useGraph from "@/hooks/useGraph";

import GraphViewer from "@/components/graph-elements/GraphViewer"

export default function Home()
{

    const [graphType, setGraphType] = useState("full-graph");

    const {
        data,
        loading,
        error,
    } = useGraph(graphType);

    const elements = data
        ? [
            ...data.nodes,
            ...data.edges
        ]
        : [];

    return (
        <div className="app">
            <div className="graphContainer">
                <GraphViewer elements={elements}/>
            </div>
        </div>
    )
}