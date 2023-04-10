import React from 'react'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import Label from '../../Atoms/Label/Label'
import styles from './PrefectureItem.module.css'

type Props = {
  label: string
  handleClick: () => void
}

const PrefectureItem = ({ label, handleClick }: Props): JSX.Element => {
  return (
    <div>
      <Checkbox className={styles.checkBox} onChange={handleClick} />
      <Label label={label} />
    </div>
  )
}

export default PrefectureItem
