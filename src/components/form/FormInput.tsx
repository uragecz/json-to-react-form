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
import { CustomStyle, Option, Input } from '../../types'
import Flex from '../Flex'
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
  customStyle: CustomStyle
  isSubmitLoading?: boolean
}

const FormInput = ({
  children,
  input,
  form,
  onButtonClick,
  onInputChange,
  customStyle,
  isSubmitLoading
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
    customProps
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
          type: basicInputProps.type || "select",
          onChage: (e: React.ChangeEvent<HTMLSelectElement> | Option) => {
            fields.onChange(e)
            onInputChange?.(getSelectSelectedValue(e), inputName)
          }
        }
      case 'DatePicker':
        return {
          ...basicInputProps,
          ...fields,
          type: basicInputProps.type || "date",
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
        buttonProps: {
          ...basicInputProps,
          disabled: basicInputProps.disabled || isSubmitLoading,
          title: title || '',
          isLoading: isSubmitLoading,
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
          }
        }
      }
      default: {
        return {}
      }
    }
  }

  const renderComponent = () => {
    console.log('RENDER ', component)
    switch (component) {
      case 'Title': {
        return <Title>{title}</Title>
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
                  customStyle,
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
            customStyle,
            ...getBasicComponentProps(),
            customProps
          }
        })
      }
    }
  }

  return (
    <Flex display={hidden ? 'none' : 'flex'} flex={1}>
      {renderComponent()}
    </Flex>
  )
}

export default FormInput
