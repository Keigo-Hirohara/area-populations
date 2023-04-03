import React from 'react'
import styles from './Checkbox.module.css'

type Props = JSX.IntrinsicElements['input']

const Checkbox = ({ ...rest }: Props): JSX.Element => {
  return <input type="checkbox" {...rest} className={styles.checkBox} />
}

export default Checkbox
