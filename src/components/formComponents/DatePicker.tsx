import React from 'react'
import { InputFormProps } from '../../types'
import classNames from 'classnames'

import './input.css'
import ErrorContainer from './ErrorContainer'

interface Props {
  formProps: InputFormProps
}

const DatePicker = ({ formProps }: Props) => {
  const { inputProps, form, classes } = formProps
  const { name } = inputProps
  const error = form.formState.errors[name]

  return (
    <div
      className={classNames('jtrf-input-container', classes?.inputContainer)}
    >
      <input
        {...inputProps}
        className={classNames(
          'jtrf-input-container__input',
          'jtrf-input-container__input--datepicker',
          classes?.input,
          {
            'jtrf-input-container__input--error': !!error,
            [classes?.inputError || '']: !!error && classes?.inputError
          }
        )}
      />
      <ErrorContainer error={error} classes={classes} />
    </div>
  )
}

export default DatePicker
