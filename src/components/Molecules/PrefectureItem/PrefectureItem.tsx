import React, { ChangeEvent, useCallback } from 'react'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import Label from '../../Atoms/Label/Label'
import styles from './PrefectureItem.module.css'
import { usePopulation } from '../../../hooks/population'

type Props = {
  label: string
  prefCode: string
}

const PrefectureItem = ({ label, prefCode }: Props): JSX.Element => {
  const { data, error, isLoading } = usePopulation(prefCode)
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        console.log(data?.result.data)
      }
    },
    [data]
  )
  if (isLoading) {
    return <div>読み込み中です</div>
  }
  if (error) {
    return <div>データを取得できませんでした。{error.message}</div>
  }
  return (
    <div>
      <Checkbox className={styles.checkBox} onChange={handleChange} />
      <Label label={label} />
    </div>
  )
}

export default PrefectureItem
