"use client";

import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";

cytoscape.use(fcose);

export default function OntologyGraph({ elements }) {

    const layout = {
        name: "fcose",
        animate: true,
        randomize: true, // Garante que não comecem todos no (0,0)
        nodeDimensionsIncludeLabels: true,
        nodeRepulsion: 200000,
        idealEdgeLength: 300,
        padding: 200,
        edgeElasticity: 0.45,
        nestingFactor: 0.8,
        gravity: 0.3,
        numIter: 3000,
    };

    const stylesheet = [

        {
            selector: "node",
            style: {
                label: "data(label)",
                width: 120,
                height: 120,
                "background-color": "#00bcd4",
                color: "#ffffff",
                "font-size": "40px",
                "text-wrap": "wrap",
                "text-max-width": "80px",
                "text-valign": "bottom",
                "text-halign": "center",
                "text-margin-y": "12px",
                "overlay-padding": "6px",
                "z-index": 10
            }
        },

        {
            selector: "edge",
            style: {
                label: "data(label)",
                width: 12,
                color: "#ffffff",
                "font-size": "25px",
                "line-color": "#666",
                "target-arrow-color": "#666",
                "target-arrow-shape": "triangle",
                "curve-style": "bezier",
                opacity: 0.5
            }
        },
        
        {
            selector: ":selected",
            style: {
                "background-color": "#ff9800",
                "line-color": "#ff9800",
                "target-arrow-color": "#ff9800",
                "source-arrow-color": "#ff9800"
            }
        }
    ]

    return (
        <div
        className="w-full h-screen flex bg-slate-950"
        style={{
                width: "100%",
                height: "100vh",
            }}>

                <CytoscapeComponent
                    elements={elements}
                    layout={layout}
                    stylesheet={stylesheet}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    minZoom={0.05}
                    maxZoom={3}
                    wheelSensitivity={2.2}

                    cy={(cy) => {

                        cy.zoom(0.3);
                        cy.center();

                        cy.layout({ name: 'cose', ...layout }).run();
                    }}
                />
        </div> 
    );
}