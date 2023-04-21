import React from 'react'
import Linegraph from '../../Molecules/Linegraph/Linegraph'
import { useLinegraphContext } from '../../../hooks/linegraphContext'
import { formatPopulationsForLinegraph } from '../../utils/formatPopulations'

const Chart = () => {
  const { data: contextData } = useLinegraphContext()

  if (!contextData) {
    return null
  }
  return (
    <div>
      <Linegraph
        data={formatPopulationsForLinegraph(contextData, '年少人口')}
      />
    </div>
  )
}

export default Chart
