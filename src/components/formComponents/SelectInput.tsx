import styled from '@emotion/styled'
import React from 'react'
import { CustomStyle, GroupOption, InputFormProps, Option } from '../../types'
import Flex from '../Flex'
import { flatten } from 'rambda'
import { darken } from 'polished'

interface Props {
  formProps: InputFormProps
}

const SelectInput = ({ formProps }: Props) => {
  const { inputProps, customStyle, form } = formProps
  const error = form.formState.errors[inputProps.name]

  const getSimpleOptions = () => {
    const { options } = inputProps;
    if((options?.[0] as GroupOption).options){
      const splittedOptions = (options as GroupOption[])?.map(group => [...group.options]);
      return flatten(splittedOptions as []);
    }
    return inputProps.options as Option[]
  }
  return (
    <Flex flex={1} position='relative'>
      <StyledSelect {...inputProps} error={error} customStyle={customStyle}>
        {getSimpleOptions().map((option: Option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </StyledSelect>
      {error && (
        <React.Fragment>
          <Error customStyle={customStyle}>{error.message}</Error>
        </React.Fragment>
      )}
    </Flex>
  )
}

export default SelectInput

const StyledSelect = styled.select<{ error: boolean; customStyle: CustomStyle }>`
  padding: 10.5px 14px;
  appearance: none;
  width: 100%;
  border-width: 1px;

  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 3em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;

  border-style: solid;
  border-color: ${({ error, customStyle }) =>
    error ? customStyle.errorColor : customStyle.inputBorderColor};

  &:hover {
    border-color: ${({ error, customStyle }) =>
      error
        ? customStyle.errorColor
        : darken(0.1, customStyle.inputBorderColor as string)};

  }

  &:focus {
    border-color: ${({ customStyle }) => darken(0.1, customStyle.inputBorderColor as string)};
  }

  border-radius: ${({ customStyle }) => customStyle.borderRadius};
  background-color: ${({ customStyle }) => customStyle.inputBackgroundColor};
  outline: none;
`

const Error = styled.span<{ customStyle: CustomStyle }>`
  position: absolute;
  bottom: -14px;
  left: 0;
  font-size: 0.7rem;
  color: ${({ customStyle }) => customStyle.errorColor};
`