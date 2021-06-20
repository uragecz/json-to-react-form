import React from 'react'
import { InputFormProps } from '../../types'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'
import classNames from 'classnames'

import './input.css'

interface Props {
  formProps: InputFormProps
}

const TextArea = ({ formProps }: Props) => {
  const rows = 5
  const { inputProps, form , classes } = formProps
  const error = form.formState.errors[inputProps.name]

  return (
    <div className='jtrf-input-container'>
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

export default TextArea
