import {
  Populations,
  PopulationsForContext,
  PopulationsForContextItem,
} from '../types/Populations'
import { useGlobalState } from './globalState'

export const useLinegraphContext = () => {
  const { data, isLoading, error, mutate } = useGlobalState<
    PopulationsForContext,
    Error
  >('linegraphContext')

  const appendToContext = async (
    fetchData: Populations['result']['data'],
    prefName: string
  ) => {
    const formatedYears = fetchData[0].data.map((populationsItem) =>
      populationsItem.year.toString()
    )

    const formatedPopulations: PopulationsForContextItem = {
      prefecture: prefName,
      populations: fetchData.map((fetchDataItem) => {
        const populationChange = fetchDataItem.data.map(
          (populationsItem) => populationsItem.value
        )

        return {
          demographic: fetchDataItem.label,
          populationChange,
        }
      }),
    }

    mutate((prev) => {
      if (prev?.data) {
        return {
          years: prev.years,
          data: [...prev.data, formatedPopulations],
        }
      }
      return {
        years: formatedYears,
        data: [formatedPopulations],
      }
    })
  }

  return {
    data,
    isLoading,
    error,
    mutate,
    appendToContext,
  }
}
