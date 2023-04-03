import React from 'react'
import PrefectureItem from '../../Molecules/PrefectureItem/PrefectureItem'

type Props = {
  prefecturesData: {
    prefCode: number
    prefName: string
  }[]
}

const Prefectures = ({ prefecturesData }: Props): JSX.Element => {
  return (
    <div>
      {prefecturesData.map((item) => {
        return <PrefectureItem label={item.prefName} key={item.prefCode} />
      })}
    </div>
  )
}

export default Prefectures
