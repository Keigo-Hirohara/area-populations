import React from 'react'
import styles from './Label.module.css'

type Props = {
  label: string
}

const Label = ({ label }: Props): JSX.Element => {
  return <p className={styles.label}>{label}</p>
}

export default Label
