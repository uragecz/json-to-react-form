import React from 'react'
import { InputFormProps } from '../../types'
import classNames from 'classnames'

import './input.css'
import ErrorContainer from './ErrorContainer'

interface Props {
  formProps: InputFormProps
}

const TextArea = ({ formProps }: Props) => {
  const rows = 5
  const { inputProps, form, classes } = formProps
  const error = form.formState.errors[inputProps.name]

  return (
    <div
      className={classNames('jtrf-input-container', classes?.inputContainer)}
    >
      <textarea
        {...inputProps}
        className={classNames(
          'jtrf-input-container__input',
          'jtrf-input-container__input--textarea',
          classes?.input,
          {
            'jtrf-input-container__input--error': !!error,
            [classes?.inputError || '']: !!error && classes?.inputError
          }
        )}
        style={{ height: `${rows * 30}px` }}
        rows={rows}
      />
      <ErrorContainer error={error} classes={classes} />
    </div>
  )
}

export default TextArea
