import styled from '@emotion/styled'
import { darken } from 'polished'
import React from 'react'
import { CustomStyle, InputFormProps } from '../../types'
import Flex from '../Flex'

interface Props {
  formProps: InputFormProps
}

const TextArea = ({ formProps }: Props) => {
  const rows = 5
  const { inputProps, form, customStyle } = formProps
  const error = form.formState.errors[inputProps.name];
  return (
    <Flex flex={1} alignSelf='stretch' position='relative'>
      <StyledTextArea
        style={{ height: `${rows * 30}px` }}
        rows={rows}
        customStyle={customStyle}
        {...inputProps}
        error={!!error}
      />
      {error && <Error customStyle={customStyle}>{error.message}</Error>}
    </Flex>
  )
}

export default TextArea

const StyledTextArea = styled.textarea<{
  error: boolean
  customStyle: CustomStyle
}>`
  width: 100%;
  height: 2.5rem;
  padding: 1rem;
  line-height: 1.5rem;
  border: 1px solid
    ${({ error, customStyle }) =>
      error ? customStyle.errorColor : customStyle.inputBorderColor};

  &:focus {
    border-color: ${({ customStyle }) => darken(0.1, customStyle.inputBorderColor as string)};
  }

  &:hover {
    border-color: ${({ error, customStyle }) =>
      error
        ? customStyle.errorColor
        : darken(0.1, customStyle.inputBorderColor as string)};
  }
  border-radius: ${({ customStyle }) => customStyle.borderRadius};
  background-color: ${({ customStyle }) => customStyle.inputBackgroundColor};
  outline: none;

  &::placeholder {
    font-size: 1rem;
  }
`

const Error = styled.span<{ customStyle: CustomStyle }>`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-size: 0.7rem;
  color: ${({ customStyle }) => customStyle.errorColor};
`
