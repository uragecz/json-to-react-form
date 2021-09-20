import classNames from 'classnames'
import React from 'react'
import { InputFormProps } from '../../types'
import HtmlParser from '../HtmlParser'
import ErrorContainer from './ErrorContainer'
import './input.css'

interface Props {
  formProps: InputFormProps
}

const Checkbox = ({ formProps }: Props) => {
  const { inputProps, form, classes, text } = formProps
  const { name } = inputProps
  const error = form.formState.errors[name]

  return (
    <div
      className={classNames('jtrf-input-container', classes?.inputContainer)}
    >
      <input
        {...inputProps}
        id={inputProps.name}
        type='checkbox'
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
      <ErrorContainer error={error} classes={classes} />
    </div>
  )
}

export default Checkbox
