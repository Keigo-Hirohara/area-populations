import type { NextPage } from 'next'
import PrefecrturePopulation from '../components/Templates/PrefecturePopulation/PrefecrturePopulation'
import { usePrefecture } from '../hooks/prefecture'
import Skelton from '../components/Atoms/Skelton/Skelton'

const Home: NextPage = () => {
  const { data, isLoading, error } = usePrefecture()
  if (isLoading || !data) {
    return <Skelton />
  }
  return <PrefecrturePopulation />
}

export default Home
