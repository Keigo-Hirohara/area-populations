import React from 'react'
import Linegraph from '../../Molecules/Linegraph/Linegraph'
import { useLinegraphContext } from '../../../hooks/linegraphContext'
import { formatPopulationsForLinegraph } from '../../../utils/format'
import TabList from '../TabList/TabList'
import { useActiveTab } from '../../../hooks/activeTab'
import styles from './Chart.module.css'

const Chart = () => {
  const { data: contextData } = useLinegraphContext()
  const { data: activeTab } = useActiveTab()

  if (!contextData) {
    return null
  }
  return (
    <div className={styles.chart}>
      <TabList />
      <Linegraph
        data={formatPopulationsForLinegraph(contextData, activeTab || '総人口')}
      />
    </div>
  )
}

export default Chart
