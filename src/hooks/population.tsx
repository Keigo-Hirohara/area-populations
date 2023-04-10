import useSWR, { SWRResponse, useSWRConfig } from 'swr'
import { Populations } from '../types/Populations'
import { fetcher } from '../utils/fetcher'
import { useCallback } from 'react'

export const usePopulation = (prefCode: string) => {
  const { data, isLoading, error } = useSWR<Populations, Error>(
    `/population/composition/perYear?prefCode=${prefCode}`,
    fetcher
  )

  const { mutate } = useSWRConfig()

  const fetchPrefectureItem = useCallback((prefCode: string) => {
    mutate(`/population/composition/perYear?prefCode=${prefCode}`)
  }, [])

  return {
    data,
    isLoading,
    error,
    fetchPrefectureItem,
  }
}
