"use client";

import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import fcose from "cytoscape-fcose";

cytoscape.use(fcose);

export default function OntologyGraph({ elements }) {

    const layout = {
        name: "fcose",
        animate: "end",
        animationDuration: 2200,
        // animationEasing: "ease-out-cubic",
        randomize: true, // Garante que não comecem todos no (0,0)
        fit: true,
        nodeDimensionsIncludeLabels: true,
        nodeRepulsion: 300000,
        idealEdgeLength: 250,
        padding: 80,
        edgeElasticity: 0.45,
        nestingFactor: 0.8,
        gravity: 0.1,
        numIter: 3000,
    };

    const stylesheet = [

        {
            selector: "node",
            style: {
                label: "",
                width: 120,
                height: 120,
                "background-color": "#000000",
                color: "#ffffff",
                // "font-size": "40px",
                "text-wrap": "wrap",
                "text-max-width": "80px",
                "text-valign": "bottom",
                "text-halign": "center",
                "text-margin-y": "30px",
                "overlay-padding": "6px",
                "z-index": 10,

                "transition-property": `
                    width,
                    height,
                    background-color,
                    border-width,
                    border-color,
                    opacity,
                    text-outline-width,
                    text-outline-color,
                    font-size,
                `,
                "transition-duration": "0.22s",
                "transition-timing-function": "cubic-bezier(0.22, 1, 0.36, 1)",
            }
        },

        {
            selector: 'node[classes *= "Fauna"]',
            style: {
                "background-color": "#ff5722",
            }
        },

        {
            selector: 'node[classes *= "Flora"]',
            style: {
                "background-color": "#00e676",
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
        
        {
            selector: "node:selected",
            style: {
                "background-color": "#ff9800",
                "line-color": "#ff9800",
                "target-arrow-color": "#ff9800",
                "source-arrow-color": "#ff9800"
            }
        },

        {
            selector: "node:active", // O estado exato do clique
            style: {
                "overlay-opacity": 0 // Remove o círculo de clique fantasma
            }
        },

        {
            selector: "node.hover", 
            style: {
                label: "data(label)",
                "width": 160,
                "height": 160,
                "font-size": "120px",
                "background-color": "#ffffff",
                "z-index": 999,
                "border-width": 6,
                "border-color": "#ffffff",
                "text-background-color": "#000000",
                "text-background-opacity": 0.7,
                "text-background-padding": "20px",
                "text-background-shape": "roundrectangle",
            }
        },

        {
            selector: "edge.hover",
            style: {
                label: "data(label)",
                "font-size": "40px",
                "line-color": "#ffffff",
                "target-arrow-color": "#ffffff",
                "text-background-color": "#000000",
                "text-background-opacity": 0.7,
                "text-background-padding": "20px",
                "text-background-shape": "roundrectangle",
            }
        },

    ]

    return (
        <div
        className="w-full h-screen flex bg-slate-950"
        style={{
                width: "100%",
                height: "100vh",
                backgroundImage: "radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)",
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

                        cy.minZoom(0.05);
                        cy.maxZoom(3);

                        cy.on("mouseover", "node", (event) => {
                            const node = event.target;
                            node.addClass("hover");
                            // Destaca as arestas conectadas
                            node.connectedEdges().addClass("hover"); 
                        });

                        cy.on("mouseout", "node", (event) => {
                            const node = event.target;
                            node.removeClass("hover");
                            node.connectedEdges().removeClass("hover");
                        });

                        const layoutInstance = cy.layout(layout);
                        layoutInstance.run();
                    }}
                />
        </div> 
    );
}