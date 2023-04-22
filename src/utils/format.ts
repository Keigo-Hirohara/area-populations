import {
  FormatedPopulationsForLinegraph,
  PopulationsForContext,
} from '../types/Populations'

export type AgeGroup = '年少人口' | '生産年齢人口' | '総人口' | '老年人口'
export type formatedAgegroup =
  | 'youngPopulation'
  | 'workingPopulation'
  | 'totalPopulation'
  | 'agingPopulation'

export const formatAgegroup = (ageGroup: AgeGroup): formatedAgegroup => {
  switch (ageGroup) {
    case '年少人口':
      return 'youngPopulation'
    case '生産年齢人口':
      return 'workingPopulation'
    case '老年人口':
      return 'agingPopulation'
    default:
      return 'totalPopulation'
  }
}

export const formatPopulationsForLinegraph = (
  contextData: PopulationsForContext,
  selectedDemographc?: AgeGroup
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
        borderColor: selectedItem[0].color,
      }
    }),
  }
}
