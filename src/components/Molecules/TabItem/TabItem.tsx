import React from 'react'
import styles from './TabItem.module.css'
import { clsx } from 'clsx'
import Label from '../../Atoms/Label/Label'
import { AgeGroup } from '../../../types/Populations'

type Props = JSX.IntrinsicElements['button'] & {
  activeTab?: AgeGroup
  label: string
}

const TabItem = ({ activeTab, label, onClick }: Props): JSX.Element => {
  return (
    <button
      className={clsx([
        styles.tabItem,
        activeTab === label ? styles.selected : '',
      ])}
      onClick={onClick}
    >
      <Label label={label} />
    </button>
  )
}

export default TabItem
