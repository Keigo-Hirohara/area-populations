import React from 'react'
import Linegraph from '../../Molecules/Linegraph/Linegraph'
import { useLinegraphContext } from '../../../hooks/linegraphContext'
import { formatPopulationsForLinegraph } from '../../../utils/format'
import TabList from '../TabList/TabList'
import { useActiveTab } from '../../../hooks/activeTab'
import styles from './Chart.module.css'
import clsx from 'clsx'

const Chart = (): JSX.Element => {
  const { data: contextData } = useLinegraphContext()
  const { data: activeTab } = useActiveTab()

  if (!contextData) {
    return (
      <div className={clsx([styles.note, styles.chart])}>
        都道府県を選択してください
      </div>
    )
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
