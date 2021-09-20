import React from 'react'
import classNames from 'classnames'
import { GroupOption, InputFormProps, Option } from '../../types'
import { flatten } from '../../helpers'
import './input.css'
import ErrorContainer from './ErrorContainer'

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
    <div
      className={classNames('jtrf-input-container', classes?.inputContainer)}
    >
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
      <ErrorContainer error={error} classes={classes} />
    </div>
  )
}

export default SelectInput
