import React, { ChangeEvent } from 'react'
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  UseFormReturn
} from 'react-hook-form'
import { getTransformedValidation } from '../../helpers'
import {
  getSelectDefaultValue,
  getSelectSelectedValue
} from '../../inputHelpers'
import { Option, Input, Classes } from '../../types'
import Title from '../formComponents/Title'

interface Props {
  children: any
  onInputChange?: (value: any, name: string) => void
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => void
  input: Input
  form: UseFormReturn<FieldValues>
  isSubmitLoading?: boolean
  classes?: Classes
}

const FormInput = ({
  children,
  input,
  form,
  onButtonClick,
  onInputChange,
  isSubmitLoading,
  classes
}: Props) => {
  const { register, getValues } = form
  const {
    component,
    validation,
    hidden,
    placeholder,
    type,
    disabled,
    title,
    options,
    defaultValue,
    componentProps,
    customProps,
    text
  } = input
  const inputName = input.name as string
  const basicInputProps = {
    placeholder,
    type,
    name: inputName,
    disabled: disabled === 'true',
    defaultValue,
    ...input
  }

  const getControlledComponentProps = (
    fields: ControllerRenderProps<FieldValues, string>
  ) => {
    switch (component) {
      case 'SelectInput':
        return {
          ...basicInputProps,
          ...fields,
          type: basicInputProps.type || 'select',
          onChage: (e: React.ChangeEvent<HTMLSelectElement> | Option) => {
            fields.onChange(e)
            onInputChange?.(getSelectSelectedValue(e), inputName)
          }
        }
      case 'DatePicker':
        return {
          ...basicInputProps,
          ...fields,
          type: basicInputProps.type || 'date',
          onChage: (date: Date) => {
            fields.onChange(date)
            onInputChange?.(date, inputName)
          }
        }
      default:
        return {}
    }
  }

  const getBasicComponentProps = () => {
    // Button component shouldn't be registred
    if (component === 'Button') {
      return {
        title: title || '',
        isLoading: isSubmitLoading,
        buttonProps: {
          ...basicInputProps,
          disabled: basicInputProps.disabled || isSubmitLoading,
          onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            onButtonClick?.(e, inputName)
          }
        }
      }
    }

    const formInputProps = register(inputName, {
      ...getTransformedValidation(getValues, validation),
      shouldUnregister: true
    })

    switch (component) {
      case 'TextInput': {
        return {
          inputProps: {
            ...formInputProps,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              onInputChange?.(e.target.value, inputName)
              formInputProps.onChange(e)
            }
          }
        }
      }
      case 'TextArea': {
        return {
          inputProps: {
            ...formInputProps,
            onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
              onInputChange?.(e.target.value, inputName)
              formInputProps.onChange(e)
            }
          }
        }
      }
      case 'Checkbox': {
        return {
          inputProps: {
            ...formInputProps,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              onInputChange?.(e.target.checked, inputName)
              formInputProps.onChange(e)
            }
          },
          text
        }
      }
      default: {
        return {}
      }
    }
  }

  const renderComponent = () => {
    switch (component) {
      case 'Title': {
        return <Title formProps={{ classes, form, customProps }}>{title}</Title>
      }
      case 'DatePicker':
      case 'SelectInput': {
        const correctDefaultValue =
          component === 'SelectInput'
            ? getSelectDefaultValue(options, defaultValue)
            : defaultValue

        return (
          <Controller
            name={inputName}
            rules={getTransformedValidation(getValues, validation)}
            defaultValue={correctDefaultValue}
            control={form.control}
            render={({ field }) =>
              React.cloneElement(children, {
                ...componentProps,
                formProps: {
                  inputProps: {
                    ...getControlledComponentProps(field)
                  },
                  form,
                  customProps
                }
              })
            }
          />
        )
      }
      default: {
        return React.cloneElement(children, {
          ...componentProps,
          formProps: {
            form,
            ...getBasicComponentProps(),
            customProps
          }
        })
      }
    }
  }

  return (
    <div style={{ display: hidden ? 'none' : 'flex', flex: 1 }}>
      {renderComponent()}
    </div>
  )
}

export default FormInput
