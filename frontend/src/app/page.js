"use client"

import { useState } from "react";

import useGraph from "@/hooks/useGraph";

import GraphContainer from "@/components/menu-elements/GraphContainer"
import GraphViewer from "@/components/graph-elements/GraphViewer"

export default function Home()
{

    const [graphType, setGraphType] = useState("food-web");

    const {
        data,
        isLoading
    } = useGraph(graphType);

    const elements = data

    return (
        <div>
            <GraphContainer>
                <GraphViewer elements={elements}/>
            </GraphContainer>
        </div>
    )
}