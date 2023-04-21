import {
  FormatedPopulationsForLinegraph,
  PopulationsForContext,
} from '../../types/Populations'
import { AgeGroup } from '../../utils/format'

export const formatPopulationsForLinegraph = (
  contextData: PopulationsForContext,
  selectedDemographc: AgeGroup
): FormatedPopulationsForLinegraph => {
  return {
    labels: contextData.years,
    datasets: contextData.data.map((populationChangeItem) => {
      const selectedItem = populationChangeItem.populations.filter(
        (item) => item.demographic === selectedDemographc
      )
      const data = selectedItem.map((item) => item.populationChange)[0]
      return {
        label: populationChangeItem.prefecture,
        data,
      }
    }),
  }
}
