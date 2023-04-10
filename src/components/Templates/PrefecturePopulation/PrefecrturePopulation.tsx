import React from 'react'
import PrefectureList from '../../Organisms/Prefectures/PrefectureList'
import Linegraph from '../../Molecules/Linegraph/Linegraph'
import Chart from '../../Organisms/Chart/Chart'

const PrefecrturePopulation = (): JSX.Element => {
  return (
    <div>
      <PrefectureList />
      <Chart />
    </div>
  )
}

export default PrefecrturePopulation
