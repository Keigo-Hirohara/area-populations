import useSWR, { SWRResponse, mutate } from 'swr'
import { cache } from 'swr/_internal'

export const useGlobalState = <Data, Error>(
  key: string,
  initialData?: Data
): SWRResponse<Data, Error> => {
  if (!cache.get(key) && initialData != null) {
    mutate(key, initialData, false)
  }
  return useSWR(key, null)
}
