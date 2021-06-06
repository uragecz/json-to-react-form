import React from 'react'
import { CustomStyle, InputFormProps } from '../../types'
import styled from '@emotion/styled'
import Flex from '../Flex'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'
import { darken } from 'polished'

interface Props {
  formProps: InputFormProps
}

const DatePicker = ({ formProps }: Props) => {
  const { inputProps, form, customStyle } = formProps
  const { name } = inputProps
  const error = form.formState.errors[name];
  console.log('OK ', formProps)
  return (
    <Flex flex={1} position='relative'>
      <StyledInput {...inputProps} error={error} customStyle={customStyle}/>
      {error && (
        <React.Fragment>
          <Icon>
            <ErrorSVG />
          </Icon>
          <Error customStyle={customStyle}>{error.message}</Error>
        </React.Fragment>
      )}
    </Flex>
  )
}

export default DatePicker;

const StyledInput = styled.input<{ error: boolean; customStyle: CustomStyle }>`
  padding: 10.5px 14px;
  width: 100%;
  border-width: 1px;
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

const Icon = styled.div`
  position: absolute;
  top: 8px;
  right: 40px;
`
