import React from 'react'
import { flatten } from 'rambda'
import classNames from 'classnames'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'

import './input.css'
import { GroupOption, InputFormProps, Option } from '../../types'

interface Props {
  formProps: InputFormProps
}

const SelectInput = ({ formProps }: Props) => {
  const { inputProps, form, classes } = formProps
  const error = form.formState.errors[inputProps.name]

  const getSimpleOptions = () => {
    const { options } = inputProps
    if ((options?.[0] as GroupOption).options) {
      const splittedOptions = (options as GroupOption[])?.map((group) => [
        ...group.options
      ])
      return flatten(splittedOptions as [])
    }
    return inputProps.options as Option[]
  }

  return (
    <div className='jtrf-input-container'>
      <select
        {...inputProps}
        className={classNames(
          'jtrf-input-container__input',
          'jtrf-input-container__input--select',
          classes?.input,
          {
            'jtrf-input-container__input--error': !!error,
            [classes?.inputError || '']: !!error && classes?.inputError
          }
        )}
      >
        {getSimpleOptions().map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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

export default SelectInput
