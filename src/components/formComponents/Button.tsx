import classNames from 'classnames'
import React from 'react'
import { ButtonFormProps } from '../../types'
interface Props {
  formProps: ButtonFormProps
}

const Button = ({ formProps }: Props) => {
  const { buttonProps, title, classes } = formProps
  return (
    <button
      {...buttonProps}
      className={classNames('jtrf-button', classes?.button)}
    >
      {title}
    </button>
  )
}

export default Button
