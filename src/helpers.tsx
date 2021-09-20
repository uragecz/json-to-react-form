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

export const flatten = (list:[], input?: any) => {
  const willReturn = input === undefined ? [] : input
  for (let i = 0; i < list.length; i++){
    if (Array.isArray(list[ i ])){
      flatten(list[ i ], willReturn)
    } else {
      willReturn.push(list[ i ])
    }
  }
  return willReturn
}
