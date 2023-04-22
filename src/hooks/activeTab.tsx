import React from 'react'
import { useGlobalState } from './globalState'
import { AgeGroup } from '../utils/format'

export const useActiveTab = () => {
  const { data, error, isLoading, mutate } = useGlobalState<AgeGroup, Error>(
    'activeTab',
    '総人口'
  )
  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
