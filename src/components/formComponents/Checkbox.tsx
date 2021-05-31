import styled from '@emotion/styled'
import { darken } from 'polished'
import React from 'react'
import { CustomStyle, InputFormProps } from '../../types'
import HtmlParser from '../HtmlParser'

interface Props {
  formProps: InputFormProps
}

const Checkbox = ({ formProps }: Props) => {
  const { inputProps, form, customStyle } = formProps
  const { label, name } = inputProps

  const error = form.formState.errors[name];
  return (
    <Label customStyle={customStyle}>
      {label != null && <HtmlParser html={label} />}
      <input {...inputProps} type='checkbox' />
      <Checkmark error={Boolean(error)} customStyle={customStyle} />
      {error && <Error customStyle={customStyle}>{error.message}</Error>}
    </Label>
  )
}

export default Checkbox

const Checkmark = styled.span<{ customStyle: CustomStyle; error: boolean }>`
  position: absolute;
  top: 50%;
  left: 0;
  width: 1.25rem;
  height: 1.25rem;
  border: ${({ error, customStyle }) =>
    `1px solid ${
      error ? customStyle.errorColor : customStyle.inputBorderColor
    }`};
  border-radius: ${({ customStyle }) => customStyle.borderRadius};
  background-color: ${({ customStyle }) => customStyle.inputBackgroundColor};
  transform: translate(0, -50%);

  &:hover {
    border: ${({ error, customStyle }) =>
    `1px solid ${
      error ? customStyle.errorColor : darken(0.1, customStyle.inputBorderColor as string)
    }`};
  }

  ::after {
    content: '';
    position: absolute;
    display: none;
  }
`

const Label = styled.label<{ customStyle: CustomStyle }>`
  position: relative;
  display: block;
  padding-left: 2rem;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    cursor: pointer;
  }

  input:checked ~ ${Checkmark} {
    border: none;
    background-color: ${({ customStyle }) =>
      customStyle.checkboxActiveColor};
  }

  ${Checkmark} {
    ::after {
      top: 0.25rem;
      left: 33%;
      width: 0.25rem;
      height: 0.5rem;
      border: solid white;
      border-width: 0 0.125rem 0.125rem 0;
      transform: rotate(45deg);
    }
  }

  input:checked ~ ${Checkmark} {
    ::after {
      display: block;
    }
  }
`

const Error = styled.span<{ customStyle: CustomStyle }>`
  position: absolute;
  top: 42px;
  left: 0;
  font-size: 0.7rem;
  color: ${({ customStyle }) => customStyle.errorColor};
`
