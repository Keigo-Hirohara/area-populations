import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { Prefectures } from '../types/Prefectures'
export const usePrefecture = () => {
  const { data, isLoading, error } = useSWR<Prefectures, Error>(
    '/prefectures',
    fetcher
  )

  return {
    data,
    isLoading,
    error,
  }
}
