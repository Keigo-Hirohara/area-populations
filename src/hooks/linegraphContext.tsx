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
        let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`

        return {
          demographic: fetchDataItem.label,
          populationChange,
          color: randomColor,
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

  const removeFromContext = async (prefName: string) => {
    await mutate((prev) => {
      if (!prev) {
        return
      }
      return {
        years: prev?.years,
        data: prev?.data.filter((item) => item.prefecture !== prefName),
      }
    })
  }

  return {
    data,
    isLoading,
    error,
    mutate,
    appendToContext,
    removeFromContext,
  }
}
