# json-to-react-form

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/json-to-react-form.svg)](https://www.npmjs.com/package/json-to-react-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[React](https://reactjs.org/) form component, that allows to easily generate form fields from json file using [react-hook-form](https://react-hook-form.com/) library. Including validations, and high customization.

## Install

```bash
yarn add json-to-react-form
```

or

```bash
npm install --save json-to-react-form
```

## Basic usage

**Example of simple json file:**

```tsx
// registrationForm.json
[
  {
    component: 'TextInput',
    name: 'email',
    order: 0,
    label: 'E-mail:',
    labelPosition: 'top',
    type: 'email',
    validation: {
      required: 'This field is required'
    }
  },
  {
    component: 'TextInput',
    name: 'password',
    order: 1,
    label: 'Password:',
    type: 'password',
    validation: {
      required: 'This field is required',
      pattern: {
        value: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$',
        message: 'Password needs to contain at leat 8 letters and one number'
      }
    }
  },
  {
    component: 'Button',
    name: 'submit',
    order: 2,
    title: 'Register'
  }
]
```

**Generating form using our default components:**

```tsx
import React, { Component } from 'react'

import Form from 'json-to-react-form'
import registrationInputs from './registrationForm'

const Registration = () => {
  const handleRegister = (values: any) => {
    // do something here
  }
  return <Form layout={[2, 8]} inputs={registrationInputs} onSubmit={handleRegister} />
}
```

**Generating form using custom input component:**

```tsx
import React, { Component } from 'react'

import Form, { InputFormProps } from 'json-to-react-form'
import registrationInputs from './registrationForm'

interface Props {
	// This property is injected by our library
	formProps: InputFormProps
}

const TextInput = ({ formProps, ...componentProps }: Props) => {
	const { inputProps, form } = formProps
  const { name } = inputProps
  const error = form.formState.errors[name];
  return (
    <div>
		  <input {...inputProps} />
      {!!error && <span>{error}</span>}
		</div>
  )
}

const Registration = () => {
  const handleRegister = (values: any) => {
    // do some ajax call
  }
  return (
    <Form
      layout={[2, 8]}
      inputs={registrationInputs}
      onSubmit={handleRegister}
      components={ TextInput }
    />
  )
}
```

## Props

Common props you may need / want to specify include:

```tsx
// Source of inputs that are rendered, more details see bellow
inputs: Item[]

// Instance of react-hook-form, can be usefull if you want to submit or do some other magic from parent.
form?: UseFormReturn<FieldValues>

// Validation type for form, default is 'onBlur'.
validationMode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all'

// It's neccesary if you want to have repeatable form, with possibility of adding and removing forms. This value you get from useFieldArray().
fields?: Record<'id', string>[]

// This is needed only if fields prop is provided
formName?: string

// Layout for input and its label, default is [3,7].
layout?: [number, number]

// Defines breakpoint, when layout should be set for mobile / desktop, default is '52em'
desktopBreakpoint?: number

// You can provide your own layout component, that cares of rendering label together with input.
layoutComponent?: FunctionComponent<any>

onSubmit: (values: any) => void

// Events methods, adds listener for every button / input in form
onButtonClick?: (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  name: string
) => void
onInputChange?: (checked: boolean | number | string, name: string) => void

// We provide our own components by default, but if you want you can provide your own with own, it's super easy !
component?: {
  TextInput?: FunctionComponent<InputFormProps>
  SelectInput?: FunctionComponent<InputFormProps>
  Checkbox?: FunctionComponent<InputFormProps>
  Button?: FunctionComponent<ButtonFormProps>
  TextArea?: FunctionComponent<InputFormProps>
  Title?: FunctionComponent<{ children: React.ReactNode }>
}

// Styles that you can adjust by your wishes, if it's not enough, you can always pass your own components
customStyle?: {
  borderRadius?: string,
  errorColor?: string,
  labelColor?: string,
  buttonBackgroundColor?: string,
  buttonBorderColor?: string,
  buttonTextColor?: string,
  inputBorderColor?: string,
  inputBackgroundColor?:string,
  checkboxActiveColor?: string,
}
```

## Items/Inputs type for json

**Common properties for all inputs**

```tsx
{
  // If it's not specified, it renders just div, usually there is also added children prop, that renders another inputs
  component?: 'TextInput' | 'TextArea' | 'Checkbox' | 'SelectInput' | 'Button',
  // Usually is used with "conditionalChildrenRender" or when "component" is not defined
  children?: Item[],
  // Every input that has specified "component" needs to have "name"
  name?: string,
  order?: number,
  label?: string,
  labelPosition?: 'top' | 'left' | 'bottom' | 'right',
  type?: string,
  defaultValue?: any,
  validation?: Validation,
  // Allows to render children conditionaly - if this input is
  componentProps?: {},
  // These props are passed into component inside FormProps
  customProps?: {},
}
```

**Specific properties**

SelectInput:

```tsx
{
  options: { label: string, value: any }[] | { label: string, options: { label: string, value: any }[] }[]
}
```

Button:

```tsx
{
  type?: string | 'submit',
}
```

Checkbox:

```tsx
{
  // Allows to render children if checkbox is checked
  conditionalChildrenRender: true,
}
```

**Validation type**

```tsx
{
  // string represents error message
  required?: string,
  pattern?: {
	// regex
    value: string
    message: string
  },
  min?: {
    value: number
    message: string
  },
  max?: {
    value: number
    message: string
  },
  minLength?: {
    value: number
    message: string
  },
  maxLength?: {
    value: number
    message: string
  },
  validation?: {
    sameAs?: {
      // name of input
      value: string
      message: string
    }
  }
}
```

## License

MIT © [uRAGEcz](https://github.com/uRAGEcz)
