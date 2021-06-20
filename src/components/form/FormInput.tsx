import React, { ChangeEvent } from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'
import {
  getOnlyButtontProps,
  getOnlyInputProps,
  getTransformedValidation
} from '../../helpers'
import { CustomStyle, Item, InputProps, GroupOption, Option } from '../../types'
import Flex from '../Flex'
import Title from '../formComponents/Title'

interface Props {
  children: any
  onInputChange?: (value: any, name: string) => void
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => void
  input: Item
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
    title,
    options,
    defaultValue,
    componentProps,
    customProps
  } = input
  const inputName = input.name as string

  const getInputProps = (skipRegister?: boolean) => {
    const formInputProps: InputProps | {} = !skipRegister
      ? register(inputName, getTransformedValidation(getValues, validation))
      : {}
    return {
      ...getOnlyInputProps(input),
      ...formInputProps,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        onInputChange?.(
          component === 'Checkbox' ? e.target.checked : e.target.value,
          inputName
        )
        ;(formInputProps as InputProps).onChange?.(e)
      }
    }
  }

  const getComponentProps = () => {
    switch (component) {
      case 'Button': {
        const buttonProps = getOnlyButtontProps(input)
        return {
          buttonProps: {
            ...buttonProps,
            disabled: buttonProps.disabled || !!isSubmitLoading,
            onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              onButtonClick?.(e, inputName)
            }
          },
          title: title,
          isLoading: !!isSubmitLoading
        }
      }
      // other inputs have same props
      default: {
        return {
          inputProps: {
            ...getInputProps()
          }
        }
      }
    }
  }

  const getSelectDefaultValue = () => {
    let selectedValue: Option | null | undefined = null
    if (options?.length && defaultValue) {
      // if it's grouped options
      if ((options[0] as GroupOption).options) {
        ;(options as GroupOption[]).map((o) => {
          o.options.map((item) => {
            if (item.value === defaultValue) {
              selectedValue = item
            }
          })
        })
      } else {
        selectedValue = (options as Option[]).find(
          (o: Option) => o.value === defaultValue
        )
      }
    }
    return selectedValue
  }

  const renderComponent = () => {
    switch (component) {
      case 'Title': {
        return <Title>{title}</Title>
      }
      case 'SelectInput': {
        const defaultValue = getSelectDefaultValue()
        return (
          <Controller
            name={inputName}
            rules={getTransformedValidation(getValues, validation)}
            defaultValue={defaultValue}
            control={form.control}
            render={({ field }) =>
              React.cloneElement(children, {
                ...componentProps,
                formProps: {
                  inputProps: {
                    options,
                    ...getInputProps(true),
                    ...field,
                    defaultValue
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
            customProps,
            ...getComponentProps(),
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
