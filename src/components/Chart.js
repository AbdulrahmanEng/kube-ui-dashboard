import React from "react";
import Plot from 'react-plotly.js';

export default function Chart({data, title}) {
    const chartData = [{
      type: 'scatter',
      mode: 'lines+markers',
      fill: 'tonexty',
      marker: {color: 'blue'},
      ...data
    }];

  return (
    <Plot
        data={chartData}
        layout={ {width: 400, height: 400, title} }
      />
  );
}