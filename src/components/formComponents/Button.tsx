import styled from "@emotion/styled";
import { darken } from "polished";
import React from "react";
import { ButtonFormProps, CustomStyle } from "../../types";
import Text from "../Text";

interface Props {
  formProps: ButtonFormProps;
}

const Button = ({ formProps }: Props) => {
  const { buttonProps, customStyle, title } = formProps;
  return (
    <StyledButton customStyle={customStyle} {...buttonProps}>
      <Text>{title}</Text>
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ customStyle: CustomStyle }>`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: ${({ customStyle }) => customStyle.borderRadius};
  border-color: ${({ customStyle }) => customStyle.buttonBorderColor};
  background-color: ${({ customStyle }) => customStyle.buttonBackgroundColor};
  color: ${({ customStyle }) => customStyle.buttonTextColor};
  white-space: nowrap;

  &:hover {
    background-color: ${({ customStyle }) => darken(0.1, customStyle.buttonBackgroundColor as string)};
  }
  cursor: pointer;
`;
