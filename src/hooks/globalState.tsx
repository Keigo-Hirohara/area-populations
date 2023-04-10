import useSWR, { SWRResponse, mutate } from 'swr'
import { cache } from 'swr/_internal'

export const useGlobalState = <Data, Error>(
  key: string,
  updateData?: Data,
  initialData?: Data
): SWRResponse<Data, Error> => {
  if (!updateData) {
    if (!cache.get(key) && initialData != null) {
      mutate(key, initialData, false)
    }
  } else {
    mutate(key, updateData)
  }
  return useSWR(key, null)
}
