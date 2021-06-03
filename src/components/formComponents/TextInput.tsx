import styled from '@emotion/styled'
import React, { useState } from 'react'
import { CustomStyle, InputFormProps } from '../../types'
import { ReactComponent as ErrorSVG } from '../../icons/error.svg'
import { ReactComponent as ShowSVG } from '../../icons/eye.svg'
import Flex from '../Flex'
import { css } from '@emotion/react'
import { darken } from 'polished'

interface Props {
  formProps: InputFormProps
}

const TextInput = ({ formProps }: Props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const { inputProps, form, customStyle } = formProps
  const { type, name } = inputProps
  const error = form.formState.errors[name]
  return (
    <Flex flex={1} position='relative'>
      <StyledInput
        {...inputProps}
        customStyle={customStyle}
        css={css`
          padding-right: ${type === 'password' ? 5 : 0};
        `}
        type={
          type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type
        }
        error={Boolean(error)}
      />
      {type === 'password' && (
        <ShowPasswordButton
          customStyle={customStyle}
          type='button'
          onClick={() => setPasswordVisible((prevState) => !prevState)}
        >
          <ShowSVG />
        </ShowPasswordButton>
      )}
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

export default TextInput

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
    border-color: ${({ customStyle }) =>
      darken(0.1, customStyle.inputBorderColor as string)};
  }

  border-radius: ${({ customStyle }) => customStyle.borderRadius};
  background-color: ${({ customStyle }) => customStyle.inputBackgroundColor};
  outline: none;
`

const ShowPasswordButton = styled.button<{ customStyle: CustomStyle }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ customStyle }) =>
      darken(0.5, customStyle.inputBorderColor as string)};
  }
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
  top: 0.5rem;
  right: 0.5rem;
`
