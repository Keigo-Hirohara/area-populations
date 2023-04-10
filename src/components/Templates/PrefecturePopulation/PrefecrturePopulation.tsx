import React from 'react'
import PrefectureList from '../../Organisms/Prefectures/PrefectureList'
import Linegraph from '../../Organisms/Linegraph/Linegraph'
import { FormatedPopulationsForLinegraph } from '../../../types/Populations'

type Props = {
  populationsData?: FormatedPopulationsForLinegraph
}

const PrefecrturePopulation = ({ populationsData }: Props): JSX.Element => {
  return (
    <div>
      <PrefectureList />
      {populationsData && <Linegraph data={populationsData} />}
    </div>
  )
}

export default PrefecrturePopulation
