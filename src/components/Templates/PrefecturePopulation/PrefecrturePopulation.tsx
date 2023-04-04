import React from 'react'
import Prefectures from '../../Organisms/Prefectures/Prefectures'
import Linegraph from '../../Atoms/Linegraph/Linegraph'

type Props = {
  prefecturesData: {
    prefCode: number
    prefName: string
  }[]
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
    }[]
  }
}

const PrefecrturePopulation = ({
  prefecturesData,
  data,
}: Props): JSX.Element => {
  return (
    <div>
      <Prefectures prefecturesData={prefecturesData} />
      <Linegraph data={data} />
    </div>
  )
}

export default PrefecrturePopulation
