import type { NextPage } from 'next'
import PrefecrturePopulation from '../components/Templates/PrefecturePopulation/PrefecrturePopulation'
import { usePrefecture } from '../hooks/prefecture'
import { useContext, useEffect } from 'react'
import { useLinegraphContext } from '../hooks/linegraphContext'

const Home: NextPage = () => {
  const { data, isLoading, error } = usePrefecture()
  const { data: prefecturesData } = useLinegraphContext()
  if (isLoading || !data) {
    return <div>読み込み中</div>
  }
  return <PrefecrturePopulation />
}

export default Home
