import React, { useState } from 'react'
import { InputFormProps } from '../../types'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'
import { ReactComponent as ShowSVG } from '../../icons/eye.svg'
import classNames from 'classnames'

import './input.css'

interface Props {
  formProps: InputFormProps
}

const TextInput = ({ formProps }: Props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const { inputProps, form, classes } = formProps
  const { type, name } = inputProps
  const error = form.formState.errors[name]

  return (
    <div className='jtrf-input-container'>
      <input
        {...inputProps}
        className={classNames(
          'jtrf-input-container__input',
          'jtrf-input-container__input--text-input',
          classes?.input,
          {
            'jtrf-input-container__input--error': !!error,
            [classes?.inputError || '']: !!error && classes?.inputError
          }
        )}
        type={
          type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type
        }
      />
      {type === 'password' && (
        <button
          className={classNames(
            'jtrf-input-container__pswd-button',
            classes?.pswdButton
          )}
          type='button'
          onClick={() => setPasswordVisible((prevState) => !prevState)}
        >
          <ShowSVG />
        </button>
      )}
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

export default TextInput
