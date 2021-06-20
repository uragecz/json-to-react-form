import classNames from 'classnames'
import React from 'react'
import { TitleFormProps } from '../../types'

interface Props {
  children?: React.ReactNode
  formProps: TitleFormProps
}

const Title = ({ children, formProps: { classes } }: Props) => {
  return (
    <span className={classNames('jtrf-title', classes?.title)}>{children}</span>
  )
}

export default Title
