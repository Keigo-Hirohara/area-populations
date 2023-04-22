import { Chart, CoreChartOptions, registerables } from 'chart.js'
import { _DeepPartialObject } from 'chart.js/dist/types/utils'
import { Line } from 'react-chartjs-2'

Chart.register(...registerables)

type Props = {
  data:
    | {
        labels: string[]
        datasets: {
          label: string
          data: number[]
          borderColor: string
        }[]
      }
    | undefined
}

const Linegraph = ({ data }: Props): JSX.Element => {
  return (
    <Line
      data={data || { labels: [], datasets: [] }}
      options={{
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 10,
              font: {
                size: 20,
              },
            },
          },
        },
      }}
    />
  )
}

export default Linegraph
;<canvas></canvas>
