import React from 'react'
import PrefectureItem from '../../Molecules/PrefectureItem/PrefectureItem'
import { usePrefecture } from '../../../hooks/prefecture'
import styles from './PrefectureList.module.css'

const PrefectureList = (): JSX.Element => {
  const { data, isLoading, error } = usePrefecture()
  if (isLoading) {
    return <div className="">読み込み中</div>
  }
  if (error) {
    return <div className="">データの取得に失敗しました: {error.message}</div>
  }
  return (
    <div className={styles.prefectureList}>
      {data?.result.map((item: any) => {
        return (
          <PrefectureItem
            key={item.prefCode}
            label={item.prefName}
            prefCode={item.prefCode}
            prefName={item.prefName}
          />
        )
      })}
    </div>
  )
}

export default PrefectureList
