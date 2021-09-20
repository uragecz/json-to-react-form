import classNames from 'classnames'
import React from 'react'
import { InputFormProps, Option } from '../../types'

import './input.css'
import ErrorContainer from './ErrorContainer'

interface Props {
  formProps: InputFormProps
}

const RadioButton = ({ formProps }: Props) => {
  const { inputProps, form, classes, options } = formProps
  const { name } = inputProps
  const error = form.formState.errors[name]

  return (
    <div
      className={classNames('jtrf-input-container', classes?.inputContainer)}
    >
      <div>
        {(options as Option[])?.map((option) => (
          <div key={option.value} className='jtrf-input-container__option'>
            <input
              {...inputProps}
              id={option.value}
              value={option.value}
              type='radio'
              className={classNames(
                'jtrf-input-container__input',
                'jtrf-input-container__input--radio-button',
                classes?.input,
                {
                  'jtrf-input-container__input---error': !!error,
                  [classes?.inputError || '']: !!error && classes?.inputError
                }
              )}
            />
            &nbsp;
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
      <ErrorContainer error={error} classes={classes} />
    </div>
  )
}

export default RadioButton
