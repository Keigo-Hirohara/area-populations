import useSWR from 'swr'
import { FetchResultOfPopulations } from '../types/Populations'
import { fetcher } from '../utils/fetcher'

export const usePopulation = (prefCode: string) => {
  const { data, isLoading } = useSWR<FetchResultOfPopulations, Error>(
    `/population/composition/perYear?prefCode=${prefCode}`,
    fetcher
  )

  return {
    data,
    isLoading,
  }
}
