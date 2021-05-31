import React, { ChangeEvent } from 'react'
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form'
import { getTransformedValidation } from '../../helpers'
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
    type,
    disabled,
    component,
    validation,
    placeholder,
    hidden,
    title,
    options,
    defaultValue,
    componentProps,
    customProps
  } = input

  const inputName = input.name as string

  const getComponentProps = () => {
    let inputProps: InputProps | {} = {};

    // Button can't be registred
    if(component !== 'Button'){
      const input = register(inputName, getTransformedValidation(getValues, validation))
      inputProps = {
        placeholder,
        type,
        disabled: disabled === 'true',
        defaultValue,
        ...input,
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          onInputChange?.(e.target.value, inputName);
          input.onChange(e);
        }
      }
    }

    switch (component) {
      case 'Button': {
        return {
          buttonProps: {
            type: type as 'submit' | 'button' | 'reset',
            disabled: disabled === 'true' || isSubmitLoading,
            title: title || '',
            isLoading: isSubmitLoading,
            onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              onButtonClick?.(e, inputName)
          }
        }
      }
      case 'TextInput': {
        return {
          inputProps: {
            ...inputProps,
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              onInputChange?.(e.target.value, inputName)
          }
        }
      }
      case 'TextArea': {
        return {
          inputProps: {
            ...inputProps,
            onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
              onInputChange?.(e.target.value, inputName)
          }
        }
      }
      case 'Checkbox': {
        return {
          inputProps: {
            ...inputProps,
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              onInputChange?.(e.target.checked, inputName)
          }
        }
      }
      case 'SelectInput': {
        return {
          inputProps: {
            ...inputProps,
            onChange: ({ value }: Option) => onInputChange?.(value, inputName),
            options
          }
        }
      }
      default: {
        return {}
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
                    defaultValue,
                    ...getComponentProps().inputProps,
                    ...field
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
            ...getComponentProps(),
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
