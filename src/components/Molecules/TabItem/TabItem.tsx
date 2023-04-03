import React from 'react'
import styles from './TabItem.module.css'
import { clsx } from 'clsx'
import Label from '../../Atoms/Label/Label'

type Props = JSX.IntrinsicElements['button'] & {
  isSelected: boolean
  label: string
}

const TabItem = ({ isSelected, label }: Props): JSX.Element => {
  return (
    <button
      className={clsx([styles.tabItem, isSelected ? styles.selected : ''])}
    >
      <Label label={label} />
    </button>
  )
}

export default TabItem
