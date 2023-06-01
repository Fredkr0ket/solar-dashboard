import { graphs, periodes } from "./types"

interface showGraphProps  {
    graph: "bar" | "line",
    periode: "day" | "week" | "month" | "year"
}

export const showGraph = ({graph, periode}: showGraphProps) => {
    
}