import React from 'react'

type Props = JSX.IntrinsicElements['input']

const Checkbox = ({ ...rest }: Props): JSX.Element => {
  return <input type="checkbox" {...rest} />
}

export default Checkbox
