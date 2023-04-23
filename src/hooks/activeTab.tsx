import { AgeGroup } from '../types/Populations'
import { useGlobalState } from './globalState'

export const useActiveTab = () => {
  const { data, isLoading, mutate } = useGlobalState<AgeGroup, Error>(
    'activeTab',
    '総人口'
  )
  return {
    data,
    isLoading,
    mutate,
  }
}
