import { FormatedPopulationsForLinegraph } from '../types/Populations'
import { useGlobalState } from './globalState'

export const useLinegraphContext = (
  initialData?: FormatedPopulationsForLinegraph
) => {
  const { data, isLoading, error, mutate } = useGlobalState<
    FormatedPopulationsForLinegraph,
    Error
  >('linegraphContext', initialData)

  return {
    data,
    isLoading,
    error,
    mutate,
  }
}
