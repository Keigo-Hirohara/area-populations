import React, { ChangeEvent, useCallback } from 'react'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import Label from '../../Atoms/Label/Label'
import styles from './PrefectureItem.module.css'
import { usePopulation } from '../../../hooks/population'
import { useLinegraphContext } from '../../../hooks/linegraphContext'
import Skelton from '../../Atoms/Skelton/Skelton'

type Props = {
  label: string
  prefCode: string
  prefName: string
}

const PrefectureItem = ({ label, prefCode, prefName }: Props): JSX.Element => {
  const { data, isLoading } = usePopulation(prefCode)
  const { appendToContext, removeFromContext } = useLinegraphContext()
  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (!data) return
      if (e.target.checked) {
        await appendToContext(data?.result.data, prefName)
        return
      }
      await removeFromContext(prefName)
    },
    [data]
  )
  if (isLoading) {
    return <Skelton />
  }
  return (
    <div className={styles.prefectureItem}>
      <Checkbox className={styles.checkBox} onChange={handleChange} />
      <Label label={label} />
    </div>
  )
}

export default PrefectureItem
