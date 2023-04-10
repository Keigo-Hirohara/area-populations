import {
  FormatedPopulationsForLinegraph,
  Populations,
} from '../../types/Populations'

export const formatPopulations = ({
  data,
}: Populations): FormatedPopulationsForLinegraph => {
  const formatedData = data.map((item) => {
    return {
      labels: Object.values(item.data.year),
      datasets: {
        label: item.label,
        data: Object.values(item.data.value),
      },
    }
  })
  return formatedData
}
