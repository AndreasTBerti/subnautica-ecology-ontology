import { useState, useEffect } from "react";
import { getGraph } from "@/services/graphConnectionService";


export default function useGraph(graphType)
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function loadGraph() {

            try {

                setLoading(true);

                const result =
                    await getGraph(graphType);

                setData(result);

            }
            catch(err) {

                setError(err);

            }
            finally {

                setLoading(false);

            }
        }

        loadGraph();

    }, [graphType]);

    
    return {
        data,
        loading,
        error
    };

}