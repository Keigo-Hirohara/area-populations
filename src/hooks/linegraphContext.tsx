import { Populations, PopulationsForContext } from '../types/Populations'
import { formatAgegroup } from '../utils/format'
import { useGlobalState } from './globalState'

export type LinegraphContext = {
  T: {
    data: string[]
    label: string
  }
}

export const useLinegraphContext = () => {
  const { data, isLoading, error, mutate } = useGlobalState<
    PopulationsForContext,
    Error
  >('linegraphContext')

  const appendToContext = (
    fetchData: Populations['result']['data'],
    prefName: string
  ) => {
    const formatedYears = fetchData[0].data.map((populationsItem) =>
      populationsItem.year.toString()
    )
    const formatedPopulations: PopulationsForContext = fetchData.map((item) => {
      const populations = item.data.map(
        (populationsItem) => populationsItem.value
      )
      return Object.fromEntries([
        ['ageGroup', formatAgegroup(item.label)],
        [
          'populationChange',
          Object.fromEntries([
            ['label', prefName],
            ['data', populations],
          ]),
        ],
      ])
    })
    if (data) {
      mutate([...data, ...formatedPopulations])
      return
    }
    mutate(formatedPopulations)
  }

  return {
    data,
    isLoading,
    error,
    mutate,
    appendToContext,
  }
}
