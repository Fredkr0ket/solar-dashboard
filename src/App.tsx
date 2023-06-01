import { week } from "./assets/graphs/BarGraph"
import { showGraph } from "./assets/functions"
import ReactECharts from 'echarts-for-react';
function App() {
  const graph = showGraph({graph: "bar", periode: "week"})
  return (
      <>
        <h1>Solar Dashboard</h1>
        <ReactECharts
          option={graph}
        />
      </>
  );
}

export default App;
