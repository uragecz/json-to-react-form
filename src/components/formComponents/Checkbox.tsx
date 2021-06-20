import classNames from 'classnames'
import React from 'react'
import { InputFormProps } from '../../types'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'

import './input.css'
import HtmlParser from '../HtmlParser'

interface Props {
  formProps: InputFormProps
}

const Checkbox = ({ formProps }: Props) => {
  const { inputProps, form, classes, text } = formProps
  const { name } = inputProps
  const error = form.formState.errors[name]

  return (
    <div className='jtrf-input-container'>
      <input
        {...inputProps}
        id={inputProps.name}
        type='checkbox'
        onChange={console.log}
        className={classNames(
          'jtrf-input-container__input',
          'jtrf-input-container__input--checkbox',
          classes?.input,
          {
            'jtrf-input-container__input---error': !!error,
            [classes?.inputError || '']: !!error && classes?.inputError
          }
        )}
      />
      <label htmlFor={inputProps.name}>
        <HtmlParser html={text} style={{ marginLeft: '16px' }} />
      </label>
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

export default Checkbox
