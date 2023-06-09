import {
  FetchResultOfPopulations,
  PopulationsForContext,
  PopulationsForContextItem,
} from '../types/Populations'
import { useGlobalState } from './globalState'

export const useLinegraphContext = () => {
  const { data, isLoading, mutate } = useGlobalState<
    PopulationsForContext,
    Error
  >('linegraphContext')

  const appendToContext = async (
    fetchData: FetchResultOfPopulations['result']['data'],
    prefName: string
  ) => {
    const formatedYears = fetchData[0].data.map((populationsItem) =>
      populationsItem.year.toString()
    )
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`

    const formatedPopulations: PopulationsForContextItem = {
      prefecture: prefName,
      color: randomColor,
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
    mutate,
    appendToContext,
    removeFromContext,
  }
}
