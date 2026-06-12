import { useQuery } from "@tanstack/react-query";
import { getGraph } from "@/services/graphConnectionService";


export default function useGraph(graphType)
{
    return useQuery({

        queryKey: ["graph", graphType],

        queryFn: () => 
            getGraph(graphType)

    });
}