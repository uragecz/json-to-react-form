import { ValidationValueMessage } from "react-hook-form";
import { Validation, Validations } from "./types";

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
