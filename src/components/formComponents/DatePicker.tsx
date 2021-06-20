import React from 'react'
import { InputFormProps } from '../../types'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'
import classNames from 'classnames'

import './input.css'

interface Props {
  formProps: InputFormProps
}

const DatePicker = ({ formProps }: Props) => {
  const { inputProps, form, classes } = formProps
  const { name } = inputProps
  const error = form.formState.errors[name]

  return (
    <div className='jtrf-input-container'>
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
      {error && (
        <div
          className={classNames(
            'jtrf-input-container__error-container',
            classes?.errorContainer
          )}
        >
          <ErrorSVG
            className={classNames(
              'jtrf-input-container__error-icon',
              classes?.errorIcon
            )}
          />
          <span
            className={classNames(
              'jtrf-input-container__error-message',
              classes?.errorMessage
            )}
          >
            {error.message}
          </span>
        </div>
      )}
    </div>
  )
}

export default DatePicker
