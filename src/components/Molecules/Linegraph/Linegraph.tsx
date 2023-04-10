import { Chart, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(...registerables)

type Props = {
  data:
    | {
        labels: string[]
        datasets: {
          label: string
          data: number[]
        }[]
      }
    | undefined
}

const Linegraph = ({ data }: Props): JSX.Element => {
  return <Line data={data || { labels: [], datasets: [] }} />
}

export default Linegraph
;<canvas></canvas>
