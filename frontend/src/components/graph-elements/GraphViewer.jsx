"use client";

import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";

cytoscape.use(fcose);

export default function GraphViewer({ elements })
{

    const layout = {
        name: "fcose",
        randomize: true,
        fit: true,
        nodeDimensionsIncludeLabels: true,
        nodeRepulsion: 300000,
        idealEdgeLength: 250,
        padding: 80,
        edgeElasticity: 0.45,
        nestingFactor: 0.8,
        gravity: 0.1,
        numIter: 3000,
    }

    const stylesheet = [
        {
            selector: "node",
            style: {
                label: "",
                width: 40,
                height: 40,
                "background-color": "#000000",
                "z-index": 10,
            }
        },

        {
            selector: "edge",
            style: {
                label: "",
                width: 8,
                color: "#ffffff",
                // "font-size": "25px",
                "line-color": "#000000",
                "target-arrow-color": "#000000",
                "target-arrow-shape": "triangle",
                "curve-style": "bezier",
                opacity: 0.6,

                "transition-property": "label font-size",
                "transition-duration": "0.3s"
            }
        },
    ]


    return (
        <CytoscapeComponent
            elements={elements}
            layout={layout}
            stylesheet={stylesheet}
            style={{
                width: "100%",
                height: "100%"
            }}
        />
    )
}