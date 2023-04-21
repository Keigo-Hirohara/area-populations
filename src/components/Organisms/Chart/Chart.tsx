import React from 'react'
import Linegraph from '../../Molecules/Linegraph/Linegraph'
import { useLinegraphContext } from '../../../hooks/linegraphContext'
import { formatPopulationsForLinegraph } from '../../../utils/format'

const Chart = () => {
  const { data: contextData } = useLinegraphContext()

  if (!contextData) {
    return null
  }
  return (
    <div>
      <Linegraph data={formatPopulationsForLinegraph(contextData, '総人口')} />
    </div>
  )
}

export default Chart
