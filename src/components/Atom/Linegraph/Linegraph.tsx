import { Chart, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'

type Props = {
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
    }[]
  }
}

Chart.register(...registerables)

const Linegraph = ({ data }: Props): JSX.Element => {
  return <Line data={data} />
}

export default Linegraph
;<canvas></canvas>
