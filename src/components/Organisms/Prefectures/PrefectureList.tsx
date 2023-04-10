import React, { ChangeEvent, useCallback } from 'react'
import PrefectureItem from '../../Molecules/PrefectureItem/PrefectureItem'
import { usePrefecture } from '../../../hooks/prefecture'

const PrefectureList = (): JSX.Element => {
  const { data, isLoading, error } = usePrefecture()
  if (isLoading) {
    return <div className="">読み込み中</div>
  }
  if (error) {
    return <div className="">データの取得に失敗しました: {error.message}</div>
  }
  return (
    <div>
      {data?.result.map((item: any) => {
        return (
          <PrefectureItem
            key={item.prefCode}
            label={item.prefName}
            prefCode={item.prefCode}
          />
        )
      })}
    </div>
  )
}

export default PrefectureList
