import {
  Control,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormReturn
} from 'react-hook-form'

export type AdvanceValidation = (value: string) => string | true

export type Validation = {
  value: string
  message: string
}

export type Validations = Omit<RegisterOptions, 'pattern' | 'validate'> & {
  pattern?: Validation
  validate: Record<string, Validation | AdvanceValidation>
}

export type Item = Partial<Input> & {
  order?: number
  title?: string
  conditionalChildrenRender?: boolean
  children?: Item[]
}

export type Input = {
  name?: string
  defaultValue?: string | number
  disabled?: string
  type?: string
  placeholder?: string
  validation?: Validations
  align?: string
  unit?: string
  component: string
  hidden?: string

  // for select
  options?: GroupOption[] | Option[] | undefined

  // for checkbox
  text?: string

  // for button
  title?: string

  // other props
  componentProps: any
  customProps: any

  // for labels
  label?: string
  labelPosition?: LabelPosition
}

// GLOBAL EXPORT
export interface LayoutProps {
  layout?: [number, number]
  name: string
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string
  ) => void
  onInputChange?: (item: any, name: string) => void
  type?: string
  children: React.ReactNode
}

export interface Option {
  label: string
  value: any
}

interface GroupOption {
  label: string
  options: Option[]
}

export type LabelPosition = 'top' | 'left' | 'bottom' | 'right'

export interface InputProps {
  onChange: (
    event:
      | Option
      | Date
      | React.ChangeEvent<
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLDivElement
          | HTMLSelectElement
        >
  ) => void
  placeholder?: string
  name: string
  type?: string
  controllerProps?: ControllerRenderProps<Record<string, any>>
  disabled?: boolean
  ref?: any
  rules?: RegisterOptions
  control?: Control<Record<string, any>>
  options?: Option[] | GroupOption[]
  label?: string
  labelPosition?: LabelPosition
  defaultValue?: any
}

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  name: string
  type: 'button' | 'submit' | 'reset' | undefined
  title: string
  disabled?: boolean
  ref?: any
  isLoading?: boolean
}

export interface Option {
  label: string
  value: any
}

export interface GroupOption {
  label: string
  options: Option[]
}

interface Classes {
  input?: string
  inputError?: string
  pswdButton?: string
  errorContainer?: string
  errorIcon?: string
  errorMessage?: string
  button?: string
  title?: string
  childrenWrapper?: string
}

interface FormProps {
  form: UseFormReturn<FieldValues>
  customProps: {}
  classes?: Classes
}

export interface ButtonFormProps extends FormProps {
  buttonProps: ButtonProps
  title?: string
  isLoading: boolean
}

export interface InputFormProps extends FormProps {
  inputProps: InputProps

  // for checkbox
  text?: string
}

export interface TitleFormProps extends FormProps {}
