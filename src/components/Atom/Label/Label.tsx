import React from 'react'

type Props = {
  label: string
}

const Label = ({ label }: Props): JSX.Element => {
  return <p>{label}</p>
}

export default Label
