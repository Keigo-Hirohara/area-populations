import React, { useCallback, useState } from 'react'
import { AgeGroup } from '../../../utils/format'
import TabItem from '../../Molecules/TabItem/TabItem'
import { useActiveTab } from '../../../hooks/activeTab'

const ageGroups: AgeGroup[] = ['総人口', '年少人口', '生産年齢人口', '老年人口']

const TabList = (): JSX.Element => {
  const { data, mutate } = useActiveTab()

  const handleClickTab = useCallback(
    (tabName: AgeGroup) => {
      mutate(tabName)
    },
    [data]
  )
  return (
    <>
      {ageGroups.map((demographic) => (
        <TabItem
          label={demographic}
          activeTab={data}
          onClick={() => handleClickTab(demographic)}
        />
      ))}
    </>
  )
}

export default TabList
