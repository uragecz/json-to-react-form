import styled from '@emotion/styled'
import { darken, lighten } from 'polished'
import React from 'react'
import Select, { GroupTypeBase, Styles } from 'react-select'
import { CustomStyle, InputFormProps } from '../../types'
import Flex from '../Flex'

interface Props {
  formProps: InputFormProps
}

const SelectInput = ({ formProps }: Props) => {
  const { inputProps, customStyle, form } = formProps
  const error = form.formState.errors[inputProps.name]
  const customStyles:
    | Partial<Styles<any, false, GroupTypeBase<any>>>
    | undefined = {
    container: (provided) => ({
      ...provided,
      flex: 1
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 2,
      border: `1px solid ${darken(0.1, customStyle.inputBorderColor as string)}`
    }),
    control: (provided, state) => ({
      ...provided,
      borderWidth: 1,
      borderStype: 'solid',
      borderColor: error
        ? customStyle.errorColor
        : state.isFocused
        ? darken(0.1, customStyle.inputBorderColor as string)
        : customStyle.inputBorderColor,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
        borderColor: error
          ? customStyle.errorColor
          : darken(0.1, customStyle.inputBorderColor as string)
      }
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? customStyle.buttonBackgroundColor
        : state.isFocused
        ? lighten(0.6, customStyle.buttonBackgroundColor as string)
        : customStyle.inputBackgroundColor
    })
  }

  return (
    <Flex flex={1} position='relative'>
      <Select {...inputProps} styles={customStyles} />
      {error && (
        <React.Fragment>
          <Error customStyle={customStyle}>{error.message}</Error>
        </React.Fragment>
      )}
    </Flex>
  )
}

export default SelectInput

const Error = styled.span<{ customStyle: CustomStyle }>`
  position: absolute;
  bottom: -14px;
  left: 0;
  font-size: 0.7rem;
  color: ${({ customStyle }) => customStyle.errorColor};
`
