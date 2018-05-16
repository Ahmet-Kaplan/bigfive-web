import { Chart } from 'react-google-charts'

export default ({ title, data, header, vAxis, chartWidth }) => (
  <Chart
    chartType='ColumnChart'
    columns={[{label: 'domain', type: 'string'}, ...header]}
    rows={data}
    options={{ vAxis }}
    width={chartWidth}
    height='500px'
    graph_id={title}
    legend_toggle={false}
  />
)
