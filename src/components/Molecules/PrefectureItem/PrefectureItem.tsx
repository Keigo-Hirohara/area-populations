import React from 'react'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import Label from '../../Atoms/Label/Label'
import styles from './PrefectureItem.module.css'

type Props = {
  label: string
}

const PrefectureItem = ({ label }: Props): JSX.Element => {
  return (
    <div>
      <Checkbox className={styles.checkBox} />
      <Label label={label} />
    </div>
  )
}

export default PrefectureItem
