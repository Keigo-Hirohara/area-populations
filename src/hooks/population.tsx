import useSWR, { SWRResponse } from 'swr'
import { Populations } from '../types/Populations'
import { fetcher } from '../utils/fetcher'

export const usePopulation = (prefCode: string) => {
  const { data, isLoading, error } = useSWR<Populations, Error>(
    `/population/composition/perYear?prefCode=${prefCode}`,
    fetcher
  )

  return {
    data,
    isLoading,
    error,
  }
}
