import { ValidationValueMessage } from "react-hook-form";
import { Item, Validation, Validations } from "./types";

export const getTransformedValidation = (
  getValues: (field: string) => string,
  validation?: Validations,
) => {
  if (validation == null) {
    return {};
  }

  let transformedValidation = {
    ...validation,
    pattern: validation.pattern && {
      ...validation.pattern,
      value: new RegExp(
        (validation.pattern as ValidationValueMessage).value as string,
        "i"
      ),
    },
  };

  if (validation.validate && validation.validate.sameAs) {
    const sameAs = validation.validate.sameAs;
    transformedValidation = {
      ...transformedValidation,
      validate: {
        sameAs: (value: string) =>
          getValues((sameAs as Validation).value) === value || (sameAs as Validation).message,
      },
    };
  }
  return transformedValidation;
};

const inputPropsWhiteList = ["name", "type", "ref", "onChange", "onBlur", "defaultValue", "disabled", "options", "placeholder"]
export const getOnlyInputProps = (input: Item) => {
  const cleanInput = { ...input };

  Object.keys(input).forEach(key => {
    if(!inputPropsWhiteList.includes(key)){
      delete cleanInput[key];
    }
  });

  return {
    ...cleanInput,
    disabled: cleanInput.disabled === "true"
  };
}

const buttonPropsWhiteList = ["type", "ref", "onClick", "disabled", "options"];
export const getOnlyButtontProps = (button: Item) => {
  const cleanButton = { ...button };

  Object.keys(button).forEach(key => {
    if(!buttonPropsWhiteList.includes(key)){
      delete cleanButton[key];
    }
  });

  return {
    ...cleanButton,
    disabled: cleanButton.disabled === "true"
  };
}

